import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import {Footer} from "@components/footer/Footer";
import {FooterWithNavigation} from "@components/footer/FooterWithNavigation";
import "./stories.css";


export default { title: 'Footer', decorators: [withKnobs]};


export const footer = () => <Footer />;
export const footerWithNavigation = () => <FooterWithNavigation previous={{category: 'Accueil', details: '', path: '/'}} next={{category: 'Vie professionnel', details: 'trajets', path: '/pro'}}/>;