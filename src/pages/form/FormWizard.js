import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button as ButtonAntd } from "antd";
import { InfoOutlined, HomeOutlined } from "@ant-design/icons";
import { useWindowSize } from "@hooks/window";
import { getCategoryItems } from "@utils/category";
import { Header } from "@components/header/Header";
import { BoxSides } from "@components/box/BoxSides";
import { DynamicSummary } from "@components/dynamicSummary/DynamicSummary";
import { MobileDynamicSummary } from "@components/dynamicSummary/MobileDynamicSummary";
import { FooterWithNavigation } from "@components/footer/FooterWithNavigation";
import { Modal } from "@components/modal/Modal";
import { StyledTitle } from "@components/title/StyledTitle";
import { config } from "./formConfig";

import {
  ABOUT_TITLE,
  ABOUT_CONTENT1,
  ABOUT_CONTENT2,
  ABOUT_CONTENT3,
} from "@utils/constants";

export function FormWizard() {
  const isMobile = useWindowSize();
  const history = useHistory();
  const [isVisible, setVisible] = useState(false);
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
          <div style={{ position: "fixed" }}>
            <DynamicSummary items={summaryItems} current={progress} />
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

  const [title1, title2] = category.split(" ");
  return (
    <Fragment>
      <Header>
        <div
          style={{
            position: "fixed",
            top: "8px",
            left: "8px",
            color: "var(--main-color)",
            fontFamily: "Paris2024",
          }}
        >
          <Link to="/intro">
            <ButtonAntd type="primary" shape="circle" icon={<HomeOutlined />} />
            <span style={{ marginLeft: "4px" }}>PARIS2024</span>
          </Link>
        </div>
        <ButtonAntd
          className="show-modal-btn"
          type="primary"
          shape="circle"
          icon={<InfoOutlined />}
          onClick={() => setVisible(true)}
        />
        <StyledTitle title1={title1} title2={title2} />
      </Header>
      <Modal
        title={ABOUT_TITLE}
        content={[ABOUT_CONTENT1, ABOUT_CONTENT2, ABOUT_CONTENT3]}
        isVisible={isVisible}
        hideOverlay={() => setVisible(false)}
      />
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
