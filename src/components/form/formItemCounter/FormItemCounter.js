import React, { useState } from "react";
import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { FormItem } from "@components/form/formItem/FormItem";

export function FormItemCounter({ form, name, label, tooltipTitle, icon }) {
  const [number, setNumber] = useState(0);

  const triggerChange = (newValue) => {
    form.setFieldsValue({
      [name]: newValue,
    });
  };

  const increment = () => {
    setNumber(number + 1);
    triggerChange(number + 1);
  };

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
      triggerChange(number - 1);
    }
  };

  const checkNumber = () => {
    const count = form.getFieldValue(name);
    if (count && count > 5) {
      return Promise.resolve();
    }

    return Promise.reject(tooltipTitle);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const buttonStyle = { width: "64px", height: "64px" };

  const numberStyle = { fontSize: "32px", fontWeight: "bold", color: "white" };

  const labelNode = (
    <div style={{ display: "flex", alignItems: "center" }}>
      {icon}
      <span style={{ width: "70%", marginLeft: "8px" }}>{label}</span>
    </div>
  );
  return (
    <FormItem
      label={labelNode}
      name={name}
      tooltipTitle={tooltipTitle}
      rules={[
        {
          validator: checkNumber,
        },
      ]}
    >
      <div style={containerStyle}>
        <Button
          type="primary"
          shape="circle"
          onClick={decrement}
          data-label="decrement"
          icon={<MinusOutlined style={{ fontSize: "32px" }} />}
          style={buttonStyle}
        />
        <span style={numberStyle}>{number}</span>
        <Button
          type="primary"
          shape="circle"
          onClick={increment}
          data-label="increment"
          icon={<PlusOutlined style={{ fontSize: "32px" }} />}
          style={buttonStyle}
        />
      </div>
    </FormItem>
  );
}
