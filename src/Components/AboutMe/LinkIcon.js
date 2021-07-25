import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
const LinkIcon = ({ link }) => {
  return (
    <div className="AboutMeLinkIconWrapper">
      <a className="AboutMeLinkIconButton" href={link.link}>
        {link.type === "Github" && (
          <GithubOutlined className="AboutMeLinkIcon" />
        )}
        {link.type === "Resume" && (
          <FilePdfOutlined className="AboutMeLinkIcon" />
        )}
        {link.type === "LinkedIn" && (
          <LinkedinOutlined className="AboutMeLinkIcon" />
        )}
      </a>
      <h4 className="AboutMeLinkIconTooltip">{link.type}</h4>
    </div>
  );
};
export default LinkIcon;
