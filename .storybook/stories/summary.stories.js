import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import {DynamicSummary} from "@components/dynamicSummary/DynamicSummary";

export default { title: 'DynamicSummary', decorators: [withKnobs]};

export const summaryBeforeIStart = () => <DynamicSummary category="pro" />;

export const summaryWhenIProcessFirstForm = () => <DynamicSummary category="pro" current={0} />;

export const summaryWhenICompleteTwoForms = () => <DynamicSummary category="pro" current={2} />;

