import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

import logo from "../../../assets/logo.svg";
import profile from "../../../assets/profile.svg";
import { Container, Profile, List } from "./styles";

export default function Menu({ setMenuModal }) {
  function closerMenu() {
    setMenuModal(false);
  }

  return (
    <Container onClick={closerMenu}>
      <List>
        <img src={logo} alt="logo" />

        <Profile>
          <img src={profile} alt="logo" />

          <div>
            <p>Psicologo(a)</p>
            <strong>Maykon Pacheco</strong>
          </div>
        </Profile>
        <section>
          <Link to="/sessions">
            <MdArrowForward /> Sessões
          </Link>
          <Link to="/pacients">
            <MdArrowForward /> Pacientes
          </Link>
          <Link>
            <MdArrowForward /> Financeiro
          </Link>
          <Link>
            <MdArrowForward /> Sair
          </Link>
        </section>
      </List>
    </Container>
  );
}
