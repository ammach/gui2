import React, { Fragment, useState } from "react";
import { Header } from "@components/header/Header";
import { Modal } from "@components/modal/Modal";
import { FooterWithNavigation } from "@components/footer/FooterWithNavigation";
import { InfoOutlined } from "@ant-design/icons";
import {
  ABOUT_TITLE,
  ABOUT_CONTENT1,
  ABOUT_CONTENT2,
  ABOUT_CONTENT3,
} from "@utils/constants";
import { Button as ButtonAntd } from "antd";

export function ProStep1() {
  const [isVisible, setVisible] = useState(false);

  return (
    <Fragment>
      <Header>
        <ButtonAntd
          className="show-modal-btn"
          type="primary"
          shape="circle"
          icon={<InfoOutlined />}
          onClick={() => setVisible(true)}
        />
      </Header>
      <Modal
        title={ABOUT_TITLE}
        content={[ABOUT_CONTENT1, ABOUT_CONTENT2, ABOUT_CONTENT3]}
        isVisible={isVisible}
        hideOverlay={() => setVisible(false)}
      />
      <span>pro - step1</span>
      <FooterWithNavigation
        previous={{ category: "Introduction", path: "/intro" }}
        next={{
          category: "Vie professionnelle",
          details: "Au bureau",
          path: "/pro/step2",
        }}
      />
    </Fragment>
  );
}
