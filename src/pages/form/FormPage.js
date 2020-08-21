import React, {useState, useEffect} from 'react';
import {Layout,Row,Col} from 'antd';
import "./formpage.css";
import {Button as ButtonAntd} from "antd";
import {InfoOutlined , HomeOutlined} from "@ant-design/icons";
import { Modal } from "@components/modal/Modal";
import {
    ABOUT_TITLE,
    ABOUT_CONTENT1,
    ABOUT_CONTENT2,
    ABOUT_CONTENT3,
} from "@utils/constants";
import { useHistory } from "react-router-dom"
import {StyledTitle} from "@components/title/StyledTitle";
import {FooterWithNavigation} from "@components/footer/FooterWithNavigation";
import { Timeline } from "@components/timeline/Timeline"
import { SvgComponent } from "@components/svgcomponent/SvgComponent"
import { Typography } from 'antd';
import { FormPro } from '../../components/form/formItemInput/FormPro';
import { FormPro2 } from '../../components/form/formItemInput/FormPro2';
import { TimelineMobile } from "@components/timeline/TimelineMobile"

const { Footer, Header , Content } = Layout;

export function FormPage () {
    const [isVisible, setVisible] = useState(false);
    const history = useHistory()
    const { Title } = Typography;
    const onStart = () => {
        history.push("/home")
      }
    const [isTitle] = useState("LoremIpsum");
    const [form1, setform1] = useState(0);
    const [form2, setform2] = useState(0);
    const [form3, setform3] = useState(0);

    const [isCurrent, setCurrent] = useState(-1);

    const nextStep = () =>{
            setCurrent(isCurrent+1)
    }

    const previousStep = () =>{

            setCurrent(isCurrent-1)
    }

    useEffect ( () => {
    }, [form1, form2, form3])

    let formpage;
    switch (isCurrent) {
        case -1:
            formpage = <FormPro setChamp={setform1} setChamp2={setform2} setChamp3={setform3} value1={form1} value2={form2} value3={form3} title={isTitle} />
            break;
        case 0:
            formpage = <FormPro2 />
            break;
        default:
            
            break;
    }



return <Layout>
<Header>
    <Row> 
        <Col md={2} xs={2}>
            <ButtonAntd
                className="colorspan"
                type="primary"
                shape="circle"
                icon={<HomeOutlined />}
                onClick={onStart}
                />
        </Col>
        <Col md={20} xs={20}>
            <h1 className="colortitle">paris 2024</h1>
        </Col>
        <Col md={2} xs={2}>
            <Row justify="end">
                <Col md={4}> 
                    <ButtonAntd
                        className="colorspan"
                        type="primary"
                        shape="circle"
                        icon={<InfoOutlined/>}
                        onClick={() => setVisible(true)}
                    />
                </Col>
            </Row>
        </Col>
    </Row>
</Header>
<Modal
    title={ABOUT_TITLE}
    content={[ABOUT_CONTENT1, ABOUT_CONTENT2, ABOUT_CONTENT3]}
    isVisible={isVisible}
    hideOverlay={() => setVisible(false)}
/>
<Content className="text">
<Row style={{marginBottom:"75px"}}>
    <Col span={24}>
    <StyledTitle title1={"Vie"} title2={"Professionnelle"}/>
    </Col>
</Row>
<Row justify="start" align="left">
    <Col md={{span:0}} xs={{span:13}}>
    <TimelineMobile isCurrent={isCurrent} style={{marginBottom:"75px"}}/>
    </Col>
</Row>
    <Row justify="center" align="middle">
        <Col md={{span:12, order:1}} xs={{order:2}}>
            <Row justify="center">
                <Col md={{offset:10,span:7}} xs={12}>
                    <Row>
                        <Col md={{span:24}} xs={{span:23, offset:1}}>
                            <Title>
                                <Row justify="center" align="middle">
                                    <Col span={24} style={{color: "white"}}>Les </Col> 
                                    <Col span={24} style={{color: "white"}}>questions</Col>
                                </Row>
                            </Title>
                        </Col>
                        <Col md={{span:24}} xs={0}>
                            <SvgComponent/>
                        </Col>
                    </Row>
                </Col>
                <Col md={{span:7}} xs={12}>
                    <Timeline isCurrent={isCurrent}/>
                </Col>
            </Row>
        </Col>
        <Col md={{span:11, offset:1, order:2}} xs={{span:24, order:1}}>
        {formpage}
        </Col>
    </Row>
</Content>
<Footer>
    <FooterWithNavigation previous={"Introdution"} next={"Vie professionnelle"} subtitle={"Au travail"} formnext={nextStep} formprevious={previousStep} current={isCurrent}>
    </FooterWithNavigation>
</Footer>
</Layout>
}