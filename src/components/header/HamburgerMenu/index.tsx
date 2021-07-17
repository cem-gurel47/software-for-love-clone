import React, { useState } from "react";
import { BarsOutlined } from "@ant-design/icons";
import Drawer, { Divider, ContactUsButton, NavButton } from "./styles";

interface Props {
  data: { text: string; path: string }[];
}

const index: React.FC<Props> = ({ data }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const showMenu = () => {
    setIsMenuVisible(true);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <>
      <BarsOutlined onClick={showMenu} />
      <Drawer
        visible={isMenuVisible}
        closable
        onClose={closeMenu}
        placement="right"
        width="360px"
      >
        <Divider />
        {data.map(({ text, path }, index) => (
          <div key={`drawer-button-${index}`}>
            <NavButton href={path}>{text}</NavButton>
            <Divider />
          </div>
        ))}
        <ContactUsButton>Contact Us</ContactUsButton>
      </Drawer>
    </>
  );
};

export default index;
