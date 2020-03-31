import React, { useState, useEffect } from "react";
import {
  format,
  addWeeks,
  setSeconds,
  setMinutes,
  setHours,
  isBefore,
  isEqual,
  parseISO
} from "date-fns";
import pt from "date-fns/locale/pt";
import { utcToZonedTime } from "date-fns-tz";
import { Link } from "react-router-dom";
import { Container, Time, AppointmentCLient, Month } from "./styles";

import api from "~/services/api";
import ButtonCreateSession from "../../components/ButtonCreate";

const range = [8, 9, 10, 11, 12];

export default function Sessions() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get(`pacients/1/schedules/3`);

      setSchedule(response);
    }
    loadSchedule();
  }, []);

  console.log(schedule);

  return (
    <Container>
      <header>
        <strong>MAR 22 - 28</strong>
      </header>
      <Time>
        <nav>
          <span>SEG</span>
          <strong>28</strong>
        </nav>
        <div>
          <p>
            <AppointmentCLient>
              <strong>MAYKON PACHECO</strong>
              <span>19:00</span>
            </AppointmentCLient>
          </p>
        </div>
      </Time>
      <header>
        <strong>MAR 25 - 31</strong>
      </header>
      <Month>
        <strong>ABRIL 2020</strong>
      </Month>
      <Link to="/new-sessions">
        <ButtonCreateSession />
      </Link>
    </Container>
  );
}
