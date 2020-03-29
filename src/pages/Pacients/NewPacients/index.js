import React from "react";
import { useDispatch } from "react-redux";

import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { Container } from "./styles";

import { CreatePacientResquest } from "~/store/modules/pacient/actions";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  fone: Yup.string().required("O telefone é obrigatório")
});

export default function NewPacients() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, fone }) {
    dispatch(CreatePacientResquest(name, email, fone));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="fone" placeholder="Telefone" />
        <Input name="email" type="email" placeholder="E-mail" />

        <button type="submit">Criar novo paciente</button>
      </Form>
    </Container>
  );
}
