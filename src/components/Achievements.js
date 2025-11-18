"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Achievements() {
  return (
    <section className="mb-10 px-4">
      <h2 className="text-xl font-semibold mb-4 text-primary">
        Achievements & Non-Technical Experience
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="1" className="border-0">
          <AccordionTrigger className="text-sm font-semibold hover:no-underline">
            Perempuan Inovasi 2025 Scholarship – Full Stack Web Development
          </AccordionTrigger>
          <AccordionContent className="text-xs text-muted-foreground">
            <p>August 2025 – Present</p>
            <p>
              Selected from thousands of applicants as one of 40 women to join the full stack
              web development track with Markoding & Ministry of Education.
            </p>
            <p>
              Currently learning modern web technologies such as HTML, CSS, JavaScript, React, and Next.js.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="2" className="border-0">
          <AccordionTrigger className="text-sm font-semibold hover:no-underline">
            Production Admin & Boarding House Manager (Self-employed)
          </AccordionTrigger>
          <AccordionContent className="text-xs text-muted-foreground">
            <p>2021 – Present</p>
              <p>Handled production data, inventory, and financial reports.</p>
              <p>Managed online promotions and client communication.</p>
              <p>Demonstrated strong organizational and customer service skills.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
