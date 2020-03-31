import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { CreateScheduleResquest } from "~/store/modules/schedule/actions";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Container } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  date: Yup.string().required("O dia é obrigatório"),
  time: Yup.string().required("O hora é obrigatório"),
  value: Yup.string().required("O valor é obrigatório")
});

export default function NewSessions() {
  const dispatch = useDispatch();

  function handleSubmit({ date, time, value }) {
    dispatch(CreateScheduleResquest(date, time, value));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Selecione um paciente" />

        <Input name="date" placeholder="Dia" />
        <Input name="time" placeholder="Hora" />
        <Input name="value" placeholder="Valor" />

        <button type="submit">Agendar uma sessão</button>
      </Form>
    </Container>
  );
}
