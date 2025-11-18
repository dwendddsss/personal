"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Education() {
  const certificates = [
    {
      title: "Basic Course – Full Stack Web Development",
      issuer:
        "Perempuan Inovasi 2025 (Markoding x Ministry of Education) – Skilvul",
      date: "May – June 2025",
      image: "basi-course.png",
      link: "basic-course-pi.pdf",
    },
    {
      title: "Introduction to UI/UX Design",
      issuer: "Skilvul",
      date: "August 2025",
      image: "ui-ux.png",
      link: "uiux.pdf",
    },
    {
      title: "Basic HTML",
      issuer: "Skilvul",
      date: "May 2025",
      image: "htmldasar.png",
      link: "html.pdf",
    },
    {
      title: "Basic CSS",
      issuer: "Skilvul",
      date: "May 2025",
      image: "cssdasar.png",
      link: "css.pdf",
    },
    {
      title: "Basic JavaScript",
      issuer: "Skilvul",
      date: "May 2025",
      image: "jsdasar.png",
      link: "javascript.pdf",
    },
  ];

  return (
    <section className="mb-10 px-4">
      {/* EDUCATION SECTION */}
      <h2 className="text-xl font-semibold mb-3 tracking-tight text-primary">
        Education
      </h2>

      <div className="mb-8 text-sm text-muted-foreground">
        <h3 className="font-medium text-foreground">
          SMA Negeri 1 Gadingrejo, Lampung
        </h3>
        <p>Graduated 2021 | Social Science | GPA: 86.73</p>
      </div>

      {/* CERTIFICATIONS SECTION */}
      <h2 className="text-xl font-semibold mb-3 tracking-tight text-primary">
        Certifications
      </h2>

      <div className="w-full max-w-3xl mx-auto">
        <Carousel>
          <CarouselContent>
            {certificates.map((cert, i) => (
              <CarouselItem
                key={i}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-4 text-center space-y-2">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-40 object-contain rounded-md shadow-sm bg-white"
                  />
                  <div>
                    <h3 className="font-semibold text-sm">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <p className="text-xs">{cert.date}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      View Certificate ↗
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
