import React from 'react';
import {ArrowRightOutlined} from "@ant-design/icons";
import {Footer} from "@components/footer/Footer";
import { Button } from '@components/button/Button';
import { BackButton } from '@components/button/BackButton';
import { Row} from 'antd';
import "./footerWithNavigation.css"

export function FooterWithNavigation({previous, next,subtitle,formprevious,formnext,current}) {
    
    return <Footer>
        <div className="footer-buttons-container">
            <div className="footer-buttons-left">
                <BackButton  formprevious={formprevious} current={current}/>
            </div>
            <div className="footer-buttons-right">
                <Button text="suite" icon={() => <ArrowRightOutlined/>} formnext={formnext} current={current}/>
            </div>
        </div>

        <div className="footer-navigation-container">
            <div className="footer-navigation-left">
                <span>{previous}</span>
            </div>
            <div className="footer-navigation-right">
                <Row justify="end">{next}</Row>
                <Row justify="end">{subtitle}</Row>
            </div>
        </div>
    </Footer>
}
