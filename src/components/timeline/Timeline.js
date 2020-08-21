import React from 'react';
import {Steps} from 'antd';

export function Timeline (props) {

    let {isCurrent} = props
    const { Step } = Steps;

    return(

    <Steps size="small" progressDot current={isCurrent} direction="vertical">
        <Step title="Au bureau" description="8 questions" />
        <Step title="Empreinte numérique" description="5 questions" />
        <Step title="Restauration" description="6 questions" />
        <Step title="Trajets" description="3 questions" />
        <Step title="Déplacements" description="7 questions" />
    </Steps>
)}