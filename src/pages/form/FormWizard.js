import React, { Fragment, useEffect, useState } from "react";
import { useWindowSize } from "@hooks/window";
import { Header } from "@components/header/Header";
import { BoxSides } from "@components/box/BoxSides";
import { DynamicSummary } from "@components/dynamicSummary/DynamicSummary";
import { MobileDynamicSummary } from "@components/dynamicSummary/MobileDynamicSummary";
import { FooterWithNavigation } from "@components/footer/FooterWithNavigation";
import { config } from "./formConfig";

export function FormWizard() {
  const isMobile = useWindowSize();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    console.log(activeStep);
  }, [activeStep]);

  const setNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  const { component: FormStep, category, previous, next } = config[activeStep];
  let content;

  if (isMobile) {
    content = (
      <div style={{ width: "100%" }}>
        <MobileDynamicSummary size={5} current={activeStep} />
        <FormStep step={activeStep} setNextStep={setNextStep} />
      </div>
    );
  } else {
    content = (
      <BoxSides
        left={
          <div style={{ position: "fixed" }}>
            <DynamicSummary category="pro" current={activeStep} />
          </div>
        }
        right={
          <div style={{ backgroundColor: "green" }}>
            <div style={{ height: "1000px", backgroundColor: "yellow" }}>
              <FormStep step={activeStep} setNextStep={setNextStep} />
            </div>
          </div>
        }
      />
    );
  }

  return (
    <Fragment>
      <Header>{category}</Header>
      {content}
      <FooterWithNavigation
        previous={{
          category: previous.category,
          details: previous.details,
          onClick: handlePreviousStep,
        }}
        next={{ category: next.category, details: next.details }}
        step={activeStep}
      />
    </Fragment>
  );
}
