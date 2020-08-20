import React from "react";
import { Form as FormAntd } from "antd";

export function Form({ name, form, onFinish, onFinishFailed, children }) {
  return (
    <FormAntd
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      layout="vertical"
      form={form}
      name={name}
      validateTrigger="onSubmit"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {children}
    </FormAntd>
  );
}
