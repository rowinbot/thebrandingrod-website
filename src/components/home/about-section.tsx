import {
  AboutSectionDetailDefinition,
  AboutSectionMetricDefinition,
} from "@/content/home";
import { clsx } from "@/util/clsx";

export function AboutSectionMetric({
  metric,
  className,
}: {
  metric: AboutSectionMetricDefinition;
  className: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col font-serif items-center gap-2 text-center",
        className
      )}
    >
      <p className="font-sans text-base uppercase text-gray-400 font-medium">
        {metric.label}
      </p>
      <p className="text-8xl font-medium">{metric.metric}</p>
    </div>
  );
}

export function AboutSectionDetail({
  detail,
  className,
}: {
  detail: AboutSectionDetailDefinition;
  className: string;
}) {
  let content: React.ReactNode;

  if ("email" in detail) {
    content = (
      <>
        <p>{detail.address}</p>

        <a
          href={`mailto:${detail.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {detail.email}
        </a>
        <a
          href={`tel:${detail.phone}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {detail.phone}
        </a>
      </>
    );
  } else if ("services" in detail) {
    content = (
      <ul>
        {detail.services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    );
  } else {
    content = <p>{detail.value}</p>;
  }

  return (
    <div
      className={clsx(
        "flex flex-col font-serif items-center gap-2 text-center",
        className
      )}
    >
      <p className="font-sans text-base uppercase text-gray-400 font-medium">
        {detail.label}
      </p>

      <div className="flex flex-col text-2xl leading-relaxed max-w-sm">
        {content}
      </div>
    </div>
  );
}
