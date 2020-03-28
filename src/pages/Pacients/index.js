import React from "react";
import { Link } from "react-router-dom";

import ButtonCreatePacients from "../../components/ButtonCreate";

// import { Container } from './styles';

export default function Pacients() {
  return (
    <>
      <h1> Pacients</h1>
      <Link to="/new-pacients">
        <ButtonCreatePacients />
      </Link>
    </>
  );
}
