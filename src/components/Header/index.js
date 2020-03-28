import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { MdMenu } from "react-icons/md";

import { Container, Content, Profile } from "./styles";

import Menu from "./Menu";

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const [MenuModal, setMenuModal] = useState(false);

  function openMenu() {
    setMenuModal(true);
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link>
            <MdMenu size={24} color="#7b7b7b" onClick={openMenu} />
          </Link>
          <p to="/sessions">SESSÕES</p>
        </nav>
      </Content>
      {MenuModal && <Menu setMenuModal={setMenuModal} />}
    </Container>
  );
}
