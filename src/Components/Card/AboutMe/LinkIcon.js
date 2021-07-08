import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
const LinkIcon = ({ link }) => {
  return (
    <div className="LinkIconWrapper">
      <a className="LinkIconButton" href={link.link}>
        {link.type === "Github" && <GithubOutlined className="LinkIcon" />}
        {link.type === "Resume" && <FilePdfOutlined className="LinkIcon" />}
        {link.type === "LinkedIn" && <LinkedinOutlined className="LinkIcon" />}
      </a>
      <h4 className="LinkIconTooltip">{link.type}</h4>
    </div>
  );
};
export default LinkIcon;
