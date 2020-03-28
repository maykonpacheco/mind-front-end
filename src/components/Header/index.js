import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { MdMenu } from "react-icons/md";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link>
            <MdMenu size={24} color="#7b7b7b" />
          </Link>
          <p to="/sessions">SESSÕES</p>
        </nav>
      </Content>
    </Container>
  );
}
