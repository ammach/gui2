import React from "react";
import { FooterWithNavigation } from "@components/footer/FooterWithNavigation";

export function ProStep2() {
  return (
    <div>
      <span>pro - step2</span>
      <FooterWithNavigation
        previous={{
          category: "Vie professionnelle",
          details: "Au bureau",
          path: "/pro/step1",
        }}
        next={{
          category: "Vie professionnelle",
          details: "Numérique",
          path: "/pro/step3",
        }}
      />
    </div>
  );
}
