import React from "react";
import { useTrail, a } from "@react-spring/web";
import Icon, {
  GithubOutlined,
  IdcardOutlined,
  PlayCircleOutlined,
  LinkedinOutlined,
  InfoCircleOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { ReactComponent as DevPost } from "../../res/CardImages/dev_post_icon.svg";
import Storytok from "../../res/CardImages/storytok.webp";
const Menu = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1500, friction: 300 },
    opacity: open ? 1 : 0,
    from: { opacity: 0, height: 0 },
  });
  return (
    <>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </>
  );
};
const LinkMenu = ({ openLinks, links }) => {
  return (
    <Menu open={openLinks}>
      {links.map((link, index) => (
        <div key={index} className="ExperienceLinkIconWrapper">
          <a href={link.link} className="ExperienceLinkIconButton">
            {link.label === "Github" && (
              <GithubOutlined className="ExperienceLinkIcon" />
            )}
            {link.label === "Information" && (
              <InfoCircleOutlined className="ExperienceLinkIcon" />
            )}
            {link.label === "GameSetMatch" && (
              <LinkOutlined className="ExperienceLinkIcon" />
            )}
            {link.label === "This Website" && (
              <IdcardOutlined className="ExperienceLinkIcon" />
            )}
            {link.label === "Play Store" && (
              <PlayCircleOutlined className="ExperienceLinkIcon" />
            )}
            {link.label === "Project Owner" && (
              <LinkedinOutlined className="ExperienceLinkIcon" />
            )}
            {link.label === "Dev Post" && (
              <Icon
                component={DevPost}
                className="ExperienceLinkIcon DevPostIcon"
              />
            )}
            {link.label === "Storytok" && (
              <Icon
                component={() => <img width={25} height={25} src={Storytok}></img>}
                className="ExperienceLinkIcon DevPostIcon"
              />


            )}
          </a>
          <h4 className="ExperienceLinkIconTooltip">{link.label}</h4>
        </div>
      ))}
    </Menu>
  );
};
export default LinkMenu;
