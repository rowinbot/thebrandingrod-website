export interface AboutSectionData {
  label: string;
}

export interface AboutSectionMetricDefinition extends AboutSectionData {
  metric: string | number;
}

export type AboutSectionDetailDefinition = AboutSectionData &
  (
    | { value: string }
    | { address: string; email: string; phone: string }
    | { services: string[] }
  );

export const aboutSectionMetrics: AboutSectionMetricDefinition[] = [
  { label: "Years of Experience", metric: "14" },
  { label: "Clients Satisfaction", metric: "100%" },
  { label: "Clients Worldwide", metric: "+50" },
];

export const aboutSectionDetails: AboutSectionDetailDefinition[] = [
  {
    label: "Biography",
    value:
      "Crafting logos with passion and precision! I'm Rodrigo, a graphic designer based in Spain, tweaking vectors with my morning coffee.",
  },
  {
    label: "Contact",
    address: "Vigo, Spain",
    email: "me@thebrandingrod.com",
    phone: "+34 622 45 60 10",
  },
  {
    label: "Services",
    services: ["Branding", "Logo Design", "UI/UX Design", "Web Design"],
  },
];

export const educationAndExperienceSection = [
  {
    title: "Associate of Science in Visual Communication",
    address: "Los Angeles, CA, USA",
  },
  {
    title: "Design Internship",
    address: "Ontario, CA",
  },
  {
    title: "Freelance Graphic Designer",
    address: "Throughout the United States",
  },
];

export const instagramPosts = [
  {
    label: "Lucrative Endeavor",
    image: "/img/ig/lucrative-endeavor.avif",
    link: "https://www.instagram.com/share/_9FnVe_t1",
  },
  {
    label: "Lu Lu's Surf",
    image: "/img/ig/lulu-surf.avif",
    link: "https://www.instagram.com/share/BAZgIyiqAU",
  },
  {
    label: "Tek Crate",
    image: "/img/ig/tek-crate.webp",
    link: "https://www.instagram.com/share/BAaR6BOJch",
  },
  {
    label: "Quinto",
    image: "/img/ig/quinto.avif",
    link: "https://www.instagram.com/share/_hEmN6qS6",
  },
];
