import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Container } from "./styles";

export default function NewSessions() {
  function handleSubmit() {}

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Selecione um paciente" />
        <Input name="name" placeholder="Dia" />

        <Input type="name" name="oldPassword" placeholder="Hora" />

        <Input type="name" name="confirmPassword" placeholder="Valor" />

        <button type="submit">Agendar uma sessão</button>
      </Form>
    </Container>
  );
}
