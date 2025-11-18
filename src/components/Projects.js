"use client";

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

export default function Projects() {
  const projects = [
    {
      name: "She Time – Daily Planner",
      image: "/shetime.png",
      description:
        "A productivity app that helps women plan their days and track habits.",
      details: `SheTime was designed to help women balance self-care, productivity, and daily planning. I built this using Next.js and Tailwind CSS with a focus on simplicity and a feminine design aesthetic. It includes features like daily habit tracking and to-do planning.`,
      demo: "https://she-time.vercel.app",
      code: "https://github.com/dwendddsss/she-time",
      tech: ["Next.js", "Tailwind CSS"],
      status : "Completed",
    },
    {
      name: "ManagHer",
      image: "/managher.png",
      description:
        "An app empowering women entrepreneurs to manage business finances easily. (Developed in a team)",
      details: `ManagHer is a team project created during the Perempuan Inovasi program. We built a web app that helps women entrepreneurs manage business income and expenses in a simple and empowering way. I contributed to front-end design and layout development.`,
      demo: "https://managher.netlify.app/",
      code: "https://github.com/Team-Susi-Pudjiastuti/managher",
      tech: ["HTML", "Tailwind", "JavaScript"],
      status : "Under Development",
    },
  ];

  return (
    <section className="mb-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mt-3">Recent Work</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Crafted with love, logic, and creativity 
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <Card
            key={i}
            className="w-72 sm:w-80 hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="p-0">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-44 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-base mb-2">{p.name}</CardTitle>
              <p className="text-xs text-muted-foreground mb-3">
                {p.description}
              </p>
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
                <a href={p.demo} target="_blank" rel="noopener noreferrer">
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
                    <DialogDescription className="text-xs">
                      {p.details}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-between mt-4">
                    <Button asChild size="sm">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="secondary" asChild size="sm">
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
