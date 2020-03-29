import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import profile from "../../assets/profile.svg";
import ButtonCreatePacients from "../../components/ButtonCreate";

import { Container, Profile } from "./styles";

export default function Pacients() {
  const [listPacients, setListPacients] = useState([]);

  useEffect(() => {
    async function loadPacients() {
      const response = await api.get(`pacients`);

      const data = response.data.map(pacients => ({
        ...pacients
      }));

      setListPacients(data);
    }

    loadPacients();
  }, [listPacients]);

  return (
    <Container>
      {listPacients.map(pacient => (
        <Profile>
          <img src={profile} alt="logo" />
          <div>
            <strong>{pacient.username}</strong>
            <p>{pacient.fone}</p>
            <span>{pacient.email}</span>
          </div>
        </Profile>
      ))}

      <Link to="/new-pacients">
        <ButtonCreatePacients />
      </Link>
    </Container>
  );
}
