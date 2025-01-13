import Image from "next/image";
import img from "../../public/img/header-me.jpeg";
import { AppLayout } from "@/components/layout/app-layout";
import React from "react";
import {
  AboutSectionDetailDefinition,
  aboutSectionDetails,
  aboutSectionMetrics,
  educationAndExperienceSection,
  instagramPosts,
  type AboutSectionMetricDefinition,
} from "@/content/home";
import {
  AboutSectionDetail,
  AboutSectionMetric,
} from "@/components/home/about-section";
import { DayDrinkersLogo } from "@/assets/daydrinkers-logo";
import { PhoenixLogo } from "@/assets/phoenix-logo";
import { RowinLogo } from "@/assets/rowin-logo";
import { TheMachoMythLogo } from "@/assets/the-macho-myth-logo";
import { TheJobMobLogo } from "@/assets/the-job-mob-logo";
import { RodrigoMonikaMonogram } from "@/assets/rodrigo-monika-monogram";
import { ReachMeButton } from "@/components/reach-me-button";
import { Icon } from "@iconify-icon/react";
import { InstagramPostButton } from "@/components/home/instagram-post-button";
import { me } from "@/content/app";

function getDetailsAndMetrics() {
  const list: (AboutSectionMetricDefinition | AboutSectionDetailDefinition)[] =
    [];

  for (
    let i = 0;
    i < Math.max(aboutSectionMetrics.length, aboutSectionDetails.length);
    i++
  ) {
    const metric = aboutSectionMetrics[i];
    const detail = aboutSectionDetails[i];

    if (detail) list.push(detail);
    if (metric) list.push(metric);
  }

  return list;
}

export const aboutSectionDetailsAndMetrics = getDetailsAndMetrics();

export default function Home() {
  const gridRows = Math.max(
    aboutSectionMetrics.length,
    aboutSectionDetails.length
  );

  return (
    <AppLayout className="flex flex-col gap-20 items-center">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[20rem_1fr_20rem] gap-10 sm:gap-6"
        style={{
          ["--rows" as any]: gridRows,
        }}
      >
        <header
          className="flex flex-col items-center gap-20 text-center sm:col-span-2 xl:col-[2] lg:row-[span_var(--rows)] mb-10"
          style={{
            ["--rows" as any]: gridRows + 1, // +1 for uniformity
          }}
        >
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-medium">Rodrigo Flores</h1>
            <p className="whitespace-pre-line font-serif text-4xl md:text-5xl leading-snug">
              {"Graphic Designer\nBased in Spain"}
            </p>
          </div>

          <Image
            src={img}
            placeholder="blur"
            alt="Me"
            width={485}
            height={600}
            className="rounded-full object-cover aspect-[485/600] transition-all duration-75 max-w-full sm:max-md:max-w-[400px]"
          />
        </header>
        <div className="hidden xl:block" />

        {aboutSectionDetailsAndMetrics.map((detailOrMetric, index) => {
          if ("metric" in detailOrMetric) {
            return (
              <AboutSectionMetric
                key={index}
                metric={detailOrMetric}
                className="xl:col-[3]"
              />
            );
          } else {
            return (
              <AboutSectionDetail
                key={index}
                detail={detailOrMetric}
                className="xl:col-[1]"
              />
            );
          }
        })}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-x-4 gap-y-10 w-full place-items-center pb-20 border-b border-black/30">
        <h2 className="text-lg uppercase font-medium text-gray-400 text-center whitespace-pre-line xl:hidden sm:col-span-2">
          {"Some of the brands I've worked\nwith and for"}
        </h2>

        <RodrigoMonikaMonogram className="fill-black/65 hover:fill-black hover:scale-105 transition-all duration-150 size-32" />
        <TheMachoMythLogo className="fill-black/65 hover:fill-black hover:scale-105 transition-all duration-150 h-32" />
        <RowinLogo className="fill-black/65 hover:fill-black hover:scale-105 transition-all duration-150 h-32" />
        <PhoenixLogo className="fill-black/65 hover:fill-black hover:scale-105 transition-all duration-150 h-12 xl:hidden" />
        <DayDrinkersLogo className="fill-black/65 hover:fill-black hover:scale-105 transition-all duration-150 h-24" />
        <TheJobMobLogo className="fill-black/65 hover:fill-black hover:scale-105 transition-all duration-150 h-20" />
      </section>

      <section className="border-b border-black/30 self-stretch pb-20 flex flex-col items-center gap-20 text-center">
        <h2 className="text-4xl">Education and experience</h2>

        <ul className="space-y-10">
          {educationAndExperienceSection.map((item, index) => (
            <li key={index} className="flex flex-col gap-2">
              <h3 className="text-3xl font-medium font-serif">{item.title}</h3>
              <p className="text-base text-gray-500">{item.address}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-16">
        <h2 className="text-4xl text-center">
          <Icon
            icon="akar-icons:instagram"
            aria-hidden
            className="align-middle mr-4 text-pink-700"
          />

          <a href={me.instagram} target="_blank" rel="noopener noreferrer">
            <span className="sr-only">Posts my instagram</span>
            <span>@branding.rod</span>
          </a>
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20">
          {instagramPosts.map((post) => (
            <InstagramPostButton key={post.label} post={post} />
          ))}
        </ul>
      </section>

      <ReachMeButton link={me.calendly} />
    </AppLayout>
  );
}
