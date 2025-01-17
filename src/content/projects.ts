import { getDate, slugify } from "@/util/misc";
import { ContentImage } from "./shared";

import rawlinsLawImage from "@/assets/projects/rawlins-law.jpg";
import phoenixImage from "@/assets/projects/phoenix.jpg";

export interface ProjectDefinition {
  id: string;
  title: string;

  image: ContentImage;
  client: {
    name: string;
    location?: string;
    description: string;
  };
  category: string;
  team: [
    {
      name: string;
      role: string;
    }
  ];
  date: Date;
  services: string[];
  outcome: {
    description: string;
    images: ContentImage[];
  };
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const rawProjects: Omit<ProjectDefinition, "id">[] = [
  {
    title: "Lulu's Surfboards",
    image: rawlinsLawImage,
    client: {
      name: "Lulu's Surfboards",
      location: "Santa Cruz, California, USA",
      description: `
Lulu's Surfboard is a small surfboard business based in Santa Cruz, Califonia. Home of where surfing began was introduced within the "mainland" United States. Lulu's specializes in handcrafting surfboards for women. The aim of this project was to develop a brand with the similiar attention to detail and love as the surfboards themselves. 
      `,
    },
    category: "Illustration",
    team: [
      {
        name: "Rodrigo Flores",
        role: "Graphic Designer / Letterer",
      },
    ],
    date: getDate(2017, 9, 25),
    services: ["Lettering", "Illustration", "Branding"],
    outcome: {
      description: `
A lot of communication was needed in order to understand what the client wanted to transmit. At the end of every meeting, the solution was clear that a hand-made product was the way to go. The final product was created by means of mastering illustraion and converting it to a vector.
      `,
      images: [],
    },
  },
  {
    title: "Phoenix Pools and Spas",
    image: phoenixImage,
    client: {
      name: "Alex DeCamp and Eric Phoenix - Personal Branding",
      description: `
The goal of this project was to reinvent an existing logo with an innovative and modern design in order to communicate the company's values & professionalism.
      `,
    },
    category: "Illustration",
    team: [
      {
        name: "Rodrigo Flores",
        role: "Graphic Designer",
      },
    ],
    date: getDate(2014, 9, 24),
    services: ["Illustration", "Branding"],
    outcome: {
      description: `
Developed a personal brand to market a professional and respectable image. The final product was a modern and innovative design that communicated the company's values and professionalism.
      `,
      images: [],
    },
  },
  {
    title: "Rawlin's Law",
    image: rawlinsLawImage,
    client: {
      name: "Ashley Rawlins, Esq./ Ashley Rawlins APC",
      description: `
Ashley Rawlins is a dedicated, hard-working individual that vigorously defends all her clients using the law. Therefore, she wanted to convey her same qualities through visual communication.
      `,
    },
    category: "Illustration",
    team: [
      {
        name: "Rodrigo Flores",
        role: "Graphic Designer",
      },
    ],
    date: getDate(2018, 2, 8),
    services: ["Lettering", "Illustration", "Branding", "Animation"],
    outcome: {
      description: `
The aim of this project was to craft an image that represented the elegant qualities of this powerful attorney and her industrious team. The solution wasn't simply to show off Ashley's knowledge of the law but to capture her dedication to her craft by means of illustration and the fundamentals of graphic design. Hand lettering and illustration required the use of illustrator in order to convert images into vectors to develop a satisfying end product for client, designer, as well was the public.
      `,
      images: [],
    },
  },
];

export const projects: ProjectDefinition[] = rawProjects.map((project) => ({
  ...project,
  id: slugify(project.title),
}));
