"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Module = {
  title: string;
  topics: string[];
};

export default function SyllabusAccordion({
  modules,
}: {
  modules: Module[];
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
    >
      {modules.map((module, index) => (
        <AccordionItem
          key={module.title}
          value={`item-${index}`}
        >
          <AccordionTrigger>
            {module.title}
          </AccordionTrigger>

          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              {module.topics.map((topic) => (
                <li key={topic}>
                  {topic}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}