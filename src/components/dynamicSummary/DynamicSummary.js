import React from "react";
import { Steps } from "antd";
import { getStatus } from "./status";
import "./dynamicSummary.css";

export function DynamicSummary({ category, current }) {
  const proItems = [
    {
      title: "Finished",
      description: "This is a description. This is a description.",
    },
    {
      title: "Current",
      description: "This is a description. This is a description.",
    },
    {
      title: "Waiting",
      description: "This is a description. This is a description.",
    },
    {
      title: "Waiting",
      description: "This is a description. This is a description.",
    },
    {
      title: "Waiting",
      description: "This is a description. This is a description.",
    },
  ];

  const persoItems = [];

  const config = {
    pro: proItems,
    perso: persoItems,
  };

  const getCategoryItems = (category) => {
    return config[category];
  };

  return (
    <Steps progressDot direction="vertical">
      {getCategoryItems(category).map(({ title, description }, index) => (
        <Steps.Step
          title={title}
          description={description}
          status={getStatus(index, current)}
        />
      ))}
    </Steps>
  );
}
