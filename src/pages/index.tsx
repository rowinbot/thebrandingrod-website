import Image from "next/image";
import img from "../../public/img/header-me.jpeg";
import { AppLayout } from "@/components/layout/app-layout";
import React from "react";
import {
  AboutSectionDetailDefinition,
  aboutSectionDetails,
  aboutSectionMetrics,
  type AboutSectionMetricDefinition,
} from "@/content/home";
import {
  AboutSectionDetail,
  AboutSectionMetric,
} from "@/components/home/about-section";

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
    <AppLayout className="flex flex-col gap-8 items-center">
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
    </AppLayout>
  );
}
