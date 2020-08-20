import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import {MealsOfWeek} from "@components/form/mealsOfWeek/MealsOfWeek";
import {Form as ConfiguredForm} from "@components/form/Form";
import "./stories.css";
import {Button, Form} from "antd";


export default {title: 'MealsOfWeek', decorators: [withKnobs]};

const onFinishFailed = ({_, errorFields}) => {
    console.log('failed', errorFields);
};

const onFinish = (values) => {
    console.log('success', values);
};

export const mealsOfWeek = () => {
    const [form] = Form.useForm();

    return <ConfiguredForm
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
        <MealsOfWeek
            form={form}
            name="meals"
            label="meals of week"
            tooltipTitle="plz fill meals of all days"
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
};
