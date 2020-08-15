import React from "react";
import { Form, Tooltip } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";
import { getColor } from "@utils/cssUtil";
import "./formItem.css";

export function FormItem(props) {
    const { className, label, labelStyle = {}, name, tooltipTitle, rules, hasError } = props;
    const mainColor = getColor('--main-color');
    return (
        <Form.Item
            className={className}
            label={
                <span style={labelStyle}>
          {label}
                    {tooltipTitle && (
                        <Tooltip className="tooltip-icon" title={tooltipTitle} color={mainColor} placement="topRight">
                            <QuestionCircleFilled />
                        </Tooltip>
                    )}
        </span>
            }
            name={name}
            rules={rules}
            help={hasError && tooltipTitle}
        >
            {props.children}
        </Form.Item>
    );
}
