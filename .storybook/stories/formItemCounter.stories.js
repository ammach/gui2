import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {Form as ConfiguredForm} from "@components/form/Form";
import {FormItemCounter} from '@components/form/formItemCounter/FormItemCounter';
import {ReactComponent as Computer} from "@components/form/formItemCounter/computer.svg";
import "./stories.css";


export default {title: 'FormItemCounter', decorators: [withKnobs]};

const onFinishFailed = ({_, errorFields}) => {
    console.log('failed', errorFields);
};

const onFinish = (values) => {
    console.log('success', values);
};

export const formItemCounter = () => {
    const [form] = Form.useForm();

    return <ConfiguredForm
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
        <FormItemCounter
            form={form}
            name="peopleCount"
            label="Nombre d’ordinateurs portables professionnels mis à votre disposition"
            tooltipTitle="this is a tooltip"
            icon={<Computer/>}
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
};

