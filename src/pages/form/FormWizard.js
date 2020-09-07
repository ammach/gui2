import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useWindowSize } from "@hooks/window";
import { getCategoryItems } from "@utils/category";
import { BoxSides } from "@components/box/BoxSides";
import { DynamicSummary } from "@components/dynamicSummary/DynamicSummary";
import { MobileDynamicSummary } from "@components/dynamicSummary/MobileDynamicSummary";
import { HeaderWithCategory } from "@components/header/HeaderWithCategory";
import { FooterWithNavigation } from "@components/footer/FooterWithNavigation";
import { config } from "./formConfig";

export function FormWizard() {
  const isMobile = useWindowSize();
  const history = useHistory();
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

  const { component: FormStep, progress, category, previous, next } = config[
    activeStep
  ];
  const summaryItems = getCategoryItems(category);
  let content;

  if (isMobile) {
    content = (
      <div style={{ width: "100%" }}>
        <MobileDynamicSummary size={summaryItems.length} current={progress} />
        <FormStep step={activeStep} setNextStep={setNextStep} />
      </div>
    );
  } else {
    content = (
      <BoxSides
        left={
          <div style={{ position: "fixed", marginTop: "60px" }}>
            <div style={{ float: "left" }}>
              <div>les questions</div>
            </div>
            <div style={{ float: "left" }}>
              <DynamicSummary items={summaryItems} current={progress} />
            </div>
          </div>
        }
        right={
          <div
            style={{
              position: "absolute",
              width: "100%",
              backgroundColor: "green",
            }}
          >
            <div style={{ height: "1000px", backgroundColor: "black" }}>
              <FormStep step={activeStep} setNextStep={setNextStep} />
            </div>
          </div>
        }
      />
    );
  }

  const [title1, title2] = category.split(" ");
  return (
    <Fragment>
      <HeaderWithCategory title1={title1} title2={title2} />
      {content}
      <FooterWithNavigation
        previous={{
          category: previous.category,
          details: previous.details,
          onClick:
            activeStep === 0
              ? () => history.push("/intro")
              : handlePreviousStep,
        }}
        next={{
          category: next.category,
          details: next.details,
        }}
        step={activeStep}
      />
    </Fragment>
  );
}
