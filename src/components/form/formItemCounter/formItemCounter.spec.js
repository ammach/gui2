import React from "react";
import { mount } from "cypress-react-unit-test";
import { FormItemCounter } from "./FormItemCounter";
import { Button, Form } from "antd";
import { Form as ConfiguredForm } from "../Form";
import { ReactComponent as Computer } from "@components/form/formItemCounter/computer.svg";

const errorMsg = "this is a tooltip";

function NumbersForm({ onFinish, onFinishFailed }) {
  const [form] = Form.useForm();

  return (
    <ConfiguredForm
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <FormItemCounter
        form={form}
        name="peopleCount"
        label="people count"
        tooltipTitle="this is a tooltip"
        icon={<Computer />}
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </ConfiguredForm>
  );
}

describe("FormItemInputNumber component", () => {
  it("should show error when any number is selected", () => {
    const onFinishFailed = cy.stub();
    mount(
      <NumbersForm
        onFinish={() => cy.stub()}
        onFinishFailed={onFinishFailed}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get("button:contains(Submit)").click();

    cy.get(".ant-form-item-explain > div")
      .contains(errorMsg)
      .should("exist")
      .then(() => {
        expect(onFinishFailed).to.be.calledOnce;
      });
  });

  it("should not show error when a number selected", () => {
    const onFinish = cy.stub();
    mount(
      <NumbersForm onFinish={onFinish} onFinishFailed={() => cy.stub()} />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );
    cy.chooseNumber(6);

    cy.get("button:contains(Submit)").click();

    cy.get(`body:contains(${errorMsg})`)
      .should("not.exist")
      .then(() => {
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          peopleCount: 6,
        });
      });
  });
});
