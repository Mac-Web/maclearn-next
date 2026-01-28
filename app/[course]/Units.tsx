"use client";

import type { UnitsType } from "@/types/Courses";
import { useState } from "react";
import Accordion from "@/components/ui/Accordion";

function Units({ courseUnits, course }: { courseUnits: UnitsType; course: string }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="flex flex-col gap-y-4 px-5 md:px-20 lg:px-[calc(50%-550px)]">
      {Object.values(courseUnits).map((unitArticles, i) => {
        return <Accordion key={i} id={i} course={course} articles={unitArticles} open={open === i} setOpen={setOpen} />;
      })}
    </div>
  );
}

export default Units;
