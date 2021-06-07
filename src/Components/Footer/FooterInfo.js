import React from "react";
import "./styles.css";
import { InfoCircleOutlined } from "@ant-design/icons";
const FooterInfo = () => {
  return (
    <div className="FooterInfo">
      <div className="FooterInfoTextWrapper">
        <h3 className="FooterInfoText">Made with React in 2021</h3>
      </div>
      <InfoCircleOutlined className="InfoButton" />
    </div>
  );
};

export default FooterInfo;
