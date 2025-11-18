import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const allSkills = [
    "Next.js", "HTML", "CSS", "JavaScript (Basic)", "Tailwind CSS", "shadcn/ui",
    "Supabase", "Express.js (Basic)", "MySQL", "MongoDB", 
    "VS Code", "Git", "GitHub", "Figma",
    "Wireframe", "Layout", "User Flow",
    "Team Collaboration", "Problem Solving", "Adaptability", "Time Discipline"
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center py-10 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-primary">
        Technical & Soft Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
        {allSkills.map((skill, i) => (
          <Badge
            key={i}
            variant="secondary"
            className="text-sm px-3 py-2 shadow-sm hover:scale-105 transition-transform"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
