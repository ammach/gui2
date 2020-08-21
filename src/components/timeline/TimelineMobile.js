import React from 'react';
import {Steps} from 'antd';
import "./timelinemobile.css";

export function TimelineMobile (props) {

    let {isCurrent} = props
    const { Step } = Steps;

    return(
    <Steps id="mobileform" type="default" size="small" progressDot current={isCurrent} direction="horizontal">
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
    </Steps>
)}