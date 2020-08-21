import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from "@ant-design/icons";
import './backButton.css';


export function BackButton({formprevious,current}) {

    function goBack() {
      if(current !== -1 && formprevious !== undefined) {
        formprevious()
      }else{
        window.history.back();
      }
      }

    return <Button className="back-btn" shape='circle' icon={<ArrowLeftOutlined />} onClick={goBack}/>;
}
