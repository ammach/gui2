import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {Form as ConfiguredForm} from "@components/form/Form";
import {FormItemNumber} from '@components/form/formItemNumber/FormItemNumber';
import { getColor } from "@utils/cssUtil";
import "./stories.css";


export default {title: 'FormItemNumber', decorators: [withKnobs]};

const onFinishFailed = ({_, errorFields}) => {
    console.log('failed');
    const errorColor = getColor('--error-color');
    const errorColorShade2 = getColor('--error-color-shade-2');
    errorFields.forEach(errors =>
        errors.name.forEach(error => {
            const inputContainer = document.getElementById(error).parentNode
                .parentNode;
            inputContainer.style.backgroundColor = 'black';
            inputContainer.style.borderColor = errorColor;
            inputContainer.style.color = errorColor;
            document.querySelector(
                `[for="${error}"]`
            ).firstElementChild.style.color = errorColorShade2;
        })
    );
};

const onFinish = (values) => {
    console.log('success', values);
};

export const formItemNumber = () =>
    <ConfiguredForm
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
    >
        <FormItemNumber
            name="without"
            tooltipTitle="this is a tooltip"
            label="Label with toolitp"
            rules={[{required: true, message: "⚠ Please input your number!"}]}
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
