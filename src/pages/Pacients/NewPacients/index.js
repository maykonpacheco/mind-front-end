import React from "react";
import { Form, Input } from "@rocketseat/unform";

import { Container } from "./styles";

export default function NewPacients() {
  function handleSubmit() {}

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="name" placeholder="Telefone" />
        <Input type="email" name="oldPassword" placeholder="email" />

        <button type="submit">Criar novo paciente</button>
      </Form>
    </Container>
  );
}
