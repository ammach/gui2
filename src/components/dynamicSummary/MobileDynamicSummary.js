import React from "react";
import { Steps } from "antd";
import { getStatus } from "./status";
import "./mobileDynamicSummary.css";

export function MobileDynamicSummary({ size, current }) {
  const steps = [...Array(size).keys()];

  return (
    <Steps progressDot>
      {steps.map((_, index) => (
        <Steps.Step status={getStatus(index, current)} />
      ))}
    </Steps>
  );
}
