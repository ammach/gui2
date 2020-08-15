import React, { useState } from "react";
import { Button } from "antd";
import { FormItem } from "@components/form/formItem/FormItem";

export function FormItemInputNumber({ form, name, label, tooltipTitle }) {
    const [number, setNumber] = useState(0);

    const triggerChange = (newValue) => {
        form.setFieldsValue({
            [name]: newValue
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
        width: "50%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    };

    const numberStyle = { fontSize: "32px", fontWeight: "bold", color: "white" };

    return (
        <FormItem
            label={label}
            name={name}
            tooltipTitle={tooltipTitle}
            rules={[
                {
                    validator: checkNumber
                }
            ]}
        >
            <div style={containerStyle}>
                <Button type="primary" shape="circle" onClick={decrement}>
                    -
                </Button>
                <span style={numberStyle}>{number}</span>
                <Button type="primary" shape="circle" onClick={increment}>
                    +
                </Button>
            </div>
        </FormItem>
    );
}
