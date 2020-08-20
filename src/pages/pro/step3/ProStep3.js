import React from "react";
import { FooterWithNavigation } from "@components/footer/FooterWithNavigation";

export function ProStep3() {
  return (
    <div>
      <span>pro - step3</span>
      <FooterWithNavigation
        previous={{
          category: "Vie professionnelle",
          details: "Numérique",
          path: "/pro/step2",
        }}
        next={{
          category: "Vie professionnelle",
          details: "Trajets",
          path: "/google",
        }}
      />
    </div>
  );
}
