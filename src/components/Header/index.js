import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { MdKeyboardBackspace } from "react-icons/md";

import { MdMenu } from "react-icons/md";

import { Container, Content, ButtonBack } from "./styles";

import Menu from "./Menu";

export default function Header() {
  const [MenuModal, setMenuModal] = useState(false);
  const history = useHistory();

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
          <ButtonBack onClick={() => history.goBack("/")}>
            <MdKeyboardBackspace />
            <span>VOLTAR</span>
          </ButtonBack>
        </nav>
      </Content>
      {MenuModal && <Menu setMenuModal={setMenuModal} />}
    </Container>
  );
}
