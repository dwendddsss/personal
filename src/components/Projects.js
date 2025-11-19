'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Projects() {
  const projects = [
    {
      name: "Calculator BMI",
      image: "/3.png",
      details: "A solo project built from scratch using HTML, Tailwind CSS, and JavaScript. Designed with simplicity and accessibility in mind, it provides instant BMI results with health category guidance.",
      demo: "https://dewicalculatebmi.netlify.app/",
      tech: ["HTML", "Tailwind", "JavaScript"],
    },
    {
      name: "She Time – Daily Planner",
      image: "/shetime.png",
      details: "Developed independently using Next.js and Tailwind CSS, She Time blends productivity with wellness. The app features a soft pink aesthetic, responsive layout, and intuitive task management — created to support women in building balanced, intentional days.",
      demo: "https://she-time.vercel.app",
      tech: ["Next.js", "Tailwind CSS"],
    },
    {
      name: "ManagHer",
      image: "/managher.png",
      details: "Created as part of a team during the Perempuan Inovasi program. I led the front-end implementation using HTML, Tailwind CSS, and JavaScript, focusing on a clean, empowering UI for financial tracking. This version serves as the MVP foundation.",
      demo: "https://managher.netlify.app/",
      tech: ["HTML", "Tailwind", "JavaScript"],
    },
    {
      name: "ManagHer V2",
      image: "/4.png",
      details: "My first full-stack project: I built both front-end (Next.js, Tailwind) and back-end (Express.js, MongoDB) independently. Features include user authentication, real-time expense tracking, and weekly financial summaries — designed to scale from MVP to a real-world tool for women entrepreneurs.",
      demo: "https://managher-v2.vercel.app",
      tech: ["Next.js", "TailwindCSS", "Express.js", "MongoDB"],
    },
  ];

  return (
    <section className="mb-16 px-4">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 tracking-tight text-primary">
          Project
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Crafted with love, logic, and creativity
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((p, i) => (
              <CarouselItem
                key={i}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-44 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-base mb-3">{p.name}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-muted text-[10px] px-2 py-1 rounded-md text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 border-t">
                    <Button asChild size="sm">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary" size="sm">
                          More Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>{p.name}</DialogTitle>
                          <DialogDescription className="text-sm">
                            {p.details}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end mt-4">
                          <Button asChild size="sm">
                            <a
                              href={p.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Live Demo
                            </a>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}