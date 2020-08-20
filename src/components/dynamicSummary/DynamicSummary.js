import React from "react";
import { Steps } from "antd";
import "./dynamicSummary.css";

export function DynamicSummary({ category, current }) {
  const STATUS = { WAIT: "wait", PROCESS: "process", FINISH: "finish" };

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

  const getStatus = (index, current) => {
    if (index < current) return STATUS.FINISH;
    else if (index === current) return STATUS.PROCESS;
    else if (index > current || !current) return STATUS.WAIT;
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
