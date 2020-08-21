import React, {useState} from 'react';
import { Typography, Select, Row, Col, Collapse, Divider,Tooltip} from 'antd';
import {PlusCircleFilled,MinusCircleFilled,LaptopOutlined,QuestionCircleFilled} from '@ant-design/icons'
import './formpro.css';
import './formItemInput.css';

export function FormPro2(props){

    let{title} =props

    const [compteur, setCompteur] = useState(0);
    const { Panel } = Collapse;
    const { Option } = Select;
    const { Title, Text } = Typography;
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis, eros maximus laoreet condimentum, orci purus molestie orci, vel pretium lorem augue in mauris.";

    

    return<Row className="card" justify="center" align="middle">
    <Col span={24}>
        <Title  style={{color:"white"}} className={"center"}> Au bureau</Title>
        <p>Votre bureau est situé...</p>
        <Tooltip className="tooltip-icon" title={title}  placement="topRight">
            <QuestionCircleFilled />
        </Tooltip>
        <Select defaultValue="lucy" style={{ width: "100%" }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Collapse defaultActiveKey={['1']} ghost accordion={false} >
            <Panel header="Détails" key="1" style={{color:"white"}}>
            <Text>{text}</Text>
            </Panel>
        </Collapse>
        <Divider />
        <Row justify="center" align="middle">
            <Col span={12}>
                <LaptopOutlined />
                <Text>Nombre do'rdinateurs portable professionnels mis à votre disposition</Text>
                <Tooltip className="tooltip-icon" title={title}  placement="topRight">
                <QuestionCircleFilled />
                </Tooltip>
            </Col>
            <Col span={12}>
                <PlusCircleFilled onClick={()=> setCompteur(compteur +1)}/>
                {compteur}
                <MinusCircleFilled onClick={()=> setCompteur(compteur -1)}/>
            </Col>
        </Row>
        </Col>

  </Row>    
}