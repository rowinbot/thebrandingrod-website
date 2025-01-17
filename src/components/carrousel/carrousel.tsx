import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";
import {
  CarrouselDotButton,
  useCarrouselDotButton,
} from "./carrousel-dot-button";
import {
  CarrouselArrowNextButton,
  CarrouselArrowPrevButton,
  useCarrouselArrowButtons,
} from "./carrousel-arrow-button";
import { styleProp } from "@/util/misc";
import { clsx } from "@/util/clsx";

const TWEEN_FACTOR_BASE = 0.2;

const options: EmblaOptionsType = {
  loop: true,
  slidesToScroll: "auto",
};

export function Carrousel<S>({
  slides,
  SlideRenderer,
}: {
  slides: S[];
  SlideRenderer: (props: { slide: S; className: string }) => React.ReactNode;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useCarrouselDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarrouselArrowButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".carrousel-layer") as HTMLElement;
    });
    console.log("here", tweenNodes.current);
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          const tweenNode = tweenNodes.current[slideIndex];

          if (!tweenNode) return;
          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenParallax]);

  return (
    <section
      className="m-auto relative [--slide-size:100%] lg:[--slide-size:75%]"
      style={styleProp({
        "--slide-height": "19rem",
        "--slide-spacing": "2rem",
      })}
    >
      <div className="overflow-hidden py-1" ref={emblaRef}>
        <div className="flex [touch-action:pan-y_pinch-zoom] ml-[calc(var(--slide-spacing)*-1)]">
          {slides.map((slide, i) => (
            <div
              className="transform-gpu flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)]"
              key={i}
            >
              <div className="rounded-3xl h-full overflow-hidden">
                <div className="relative h-full w-full flex justify-center carrousel-layer">
                  <SlideRenderer
                    slide={slide}
                    className="max-w-[none] flex-[0_0_calc(115%+var(--slide-spacing)*2)]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CarrouselArrowPrevButton
        className="absolute left-0 inset-y-0 m-auto"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <CarrouselArrowNextButton
        className="absolute right-0 inset-y-0 m-auto"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />

      <div className="mt-4 flex flex-wrap justify-center items-center gap-2">
        {scrollSnaps.map((_, index) => (
          <CarrouselDotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx(
              "appearance-none touch-manipulation inline-flex cursor-pointer border-0 p-0 m-0 size-5 items-center justify-center rounded-full bg-gray-300",
              index !== selectedIndex && "opacity-45"
            )}
          />
        ))}
      </div>
    </section>
  );
}
