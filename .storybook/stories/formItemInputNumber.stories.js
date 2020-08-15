import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {Form as ConfiguredForm} from "@components/form/Form";
import {FormItemInputNumber} from '@components/form/formItemInputNumber/FormItemInputNumber';
import "./stories.css";


export default {title: 'FormItemInputNumber', decorators: [withKnobs]};

const onFinishFailed = ({_, errorFields}) => {
    console.log('failed', errorFields);
};

const onFinish = (values) => {
    console.log('success', values);
};

export const formItemInputNumber = () => {
    const [form] = Form.useForm();

    return <ConfiguredForm
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
        <FormItemInputNumber
            form={form}
            name="peopleCount"
            label="people count"
            tooltipTitle="this is a tooltip"
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
};

