import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { InfoOutlined, HomeOutlined } from "@ant-design/icons";
import { Button as ButtonAntd } from "antd";
import { Header } from "./Header";
import { StyledTitle } from "@components/title/StyledTitle";
import { Modal } from "@components/modal/Modal";

import {
  ABOUT_TITLE,
  ABOUT_CONTENT1,
  ABOUT_CONTENT2,
  ABOUT_CONTENT3,
} from "@utils/constants";
import "./headerWithCategory.css";

export function HeaderWithCategory({ title1, title2 }) {
  const [isVisible, setVisible] = useState(false);

  return (
    <Fragment>
      <Header>
        <div className="home-link">
          <Link to="/intro">
            <ButtonAntd type="primary" shape="circle" icon={<HomeOutlined />} />
            <span style={{ marginLeft: "4px" }}>PARIS2024</span>
          </Link>
        </div>
        <ButtonAntd
          className="show-modal-btn"
          type="primary"
          shape="circle"
          icon={<InfoOutlined />}
          onClick={() => setVisible(true)}
        />
        <StyledTitle title1={title1} title2={title2} />
      </Header>
      <Modal
        title={ABOUT_TITLE}
        content={[ABOUT_CONTENT1, ABOUT_CONTENT2, ABOUT_CONTENT3]}
        isVisible={isVisible}
        hideOverlay={() => setVisible(false)}
      />
    </Fragment>
  );
}
