import React from "react";
import { Form, InputNumber} from 'antd';
import { Row,Col,Tooltip} from 'antd';
import { QuestionCircleFilled } from "@ant-design/icons";
import './formpro.css';
import './formItemInput.css';



export function FormPro(props){

  let {title,setChamp,setChamp2,setChamp3,value1,value2,value3} = props;


  const changeInput1 = (evt) => {
       
    console.log(evt)
    setChamp(evt);
   }
   const changeInput2 = (evt) => {
    setChamp2(evt);
   }
   const changeInput3 = (evt) => {
    setChamp3(evt);
   }


  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

    const layout = {
      labelCol: { span: 16 },
      wrapperCol: { span: 16},
      };
    return<Row justify="center" align="middle">
      <Col span={24}>
      <Form
            {...layout}
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="card"
          >
    <Row justify="center" align="middle">
      <Col md={{span:18,offset:6}} xs={{span:24, offset:0}}>
      <Form.Item
              label="Nombre de jours travaillés par an"
              name="an"
              rules={[
                {
                  required: true,
                  message: '⚠ Merci de n\'utiliser que des chiffres.',
                },
              ]}
      >
        <Tooltip className="tooltip-icon" title={title}  placement="topRight">
        <QuestionCircleFilled />
        </Tooltip>
        <InputNumber size="large" min={0} max={365} initialValues={value1} onChange={changeInput1} />
      </Form.Item>
      
      <Form.Item
              label="Ancienneté dans le COJO (en mois)"
              name="cojo"
              rules={[
                {
                  required: true,
                  message: '⚠ Merci de n\'utiliser que des chiffres.',
                },
              ]}
      >
        <InputNumber size="large" min={0} max={7300} initialValues={value2} onChange={changeInput2} />
      </Form.Item>

      <Form.Item
              label="Nombre de jours de télétravail par mois"
              name="teletravail"
              rules={[
                {
                  required: true,
                  message: '⚠ Merci de n\'utiliser que des chiffres.',
                },
              ]}
      >
        <InputNumber size="large" min={0} max={7} initialValues={value3} onChange={changeInput3} />
      </Form.Item>
      </Col>
      </Row>
  </Form>
  </Col>
  </Row>
};