import React, { useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import { Input } from "antd";
import { getColor } from "@utils/cssUtil";
import { FormItem } from "@components/form/formItem/FormItem";
import "./formItemInput.css";

export function FormItemInput({ label, name, rules, className }) {
  const mainColor = getColor("--main-color");
  const inputRef = useRef();
  const [labelStyle, setLabelStyle] = useState({ color: mainColor });

  const onFocus = () => {
    const focusColor = "white";
    setLabelStyle({ ...labelStyle, color: focusColor });
    changeColorElementTo(inputRef, focusColor);
  };

  const onBlur = () => {
    const blurColor = mainColor;
    setLabelStyle({ ...labelStyle, color: blurColor });
    changeColorElementTo(inputRef, blurColor);
  };

  const changeColorElementTo = (ref, color) => {
    const element = findDOMNode(ref.current);
    element.style.borderColor = color;
    element.style.color = color;
  };

  return (
    <FormItem
      className={className}
      label={label}
      labelStyle={labelStyle}
      name={name}
      rules={rules}
    >
      <Input ref={inputRef} onFocus={onFocus} onBlur={onBlur} />
    </FormItem>
  );
}
