import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Footer } from "@components/footer/Footer";
import { Button } from "@components/button/Button";
import { BackButton } from "@components/button/BackButton";
import { useHistory } from "react-router-dom";
import "./footerWithNavigation.css";

export function FooterWithNavigation({ previous, next }) {
  const {
    category: previousCategory,
    details: previousDetails = "",
    path: previousPath,
  } = previous;
  const {
    category: nextCategory,
    details: nextDetails = "",
    path: nextPath,
  } = next;

  const history = useHistory();

  const handlePreviousClick = () => {
    history.push(previousPath);
  };

  const handleNextClick = () => {
    history.push(nextPath);
  };

  return (
    <Footer>
      <div className="footer-buttons-container">
        <div className="footer-buttons-left">
          <BackButton onClick={handlePreviousClick} />
        </div>
        <div className="footer-buttons-right">
          <Button
            text="suite"
            icon={() => <ArrowRightOutlined />}
            onClick={handleNextClick}
          />
        </div>
      </div>

      <div className="footer-navigation-container">
        <div className="footer-navigation-left">
          <span>{previousCategory}</span>
        </div>
        <div className="footer-navigation-right">
          <span>{nextCategory}</span>
        </div>
      </div>
      <div className="footer-navigation-details-container">
        <div className="footer-navigation-left">
          <span>{previousDetails}</span>
        </div>
        <div className="footer-navigation-right">
          <span>{nextDetails}</span>
        </div>
      </div>
    </Footer>
  );
}
