import React from "react";
import { mount } from "cypress-react-unit-test";
import { Pie1, Pie2, Pie3 } from "./Pie";

const data = [
  {
    id: "pro",
    label: "pro",
    value: 80,
    color: "hsl(0, 0%, 77%)",
  },
  {
    id: "perso",
    label: "perso",
    value: 20,
    color: "hsl(0, 0%, 44%)",
  },
];

describe("Pie component", () => {
  it("pie1", () => {
    mount(<Pie1 data={data} />, {
      style: `body {
                background-color: var(--bg-color)
            }`,
    });
  });

  it("pie2", () => {
    mount(<Pie2 data={data} />, {
      style: `body {
                background-color: var(--bg-color)
            }`,
    });
  });

  it.only("pie3", () => {
    cy.viewport("ipad-2");
    mount(<Pie3 data={data} />, {
      style: `body {
                background-color: var(--bg-color)
            }`,
    });
  });
});
