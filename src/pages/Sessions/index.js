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
      const response = await api.get("schedule");

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = response.data.map(hour => {
        /* const checkData = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkData, timezone);
        */

        const dateFormatted = format(new Date(hour.date), "d", { locale: pt });
        const dayWeek = "SEN";

        console.log(hour);

        return {
          time: hour.time,
          dateFormatted,
          user: hour.user.username,
          dayWeek
        };
      });
      setSchedule(data);
    }
    loadSchedule();
  }, [date]);

  return (
    <Container>
      <header>
        <strong>MAR 22 - 28</strong>
      </header>

      {schedule.map(time => (
        <Time key={time.date}>
          <nav>
            <span>{time.dayWeek}</span>
            <strong>{time.dateFormatted}</strong>
          </nav>
          <div>
            <p>
              {time.user ? (
                <AppointmentCLient>
                  <strong>{time.user}</strong>
                  <span>{time.time}</span>
                </AppointmentCLient>
              ) : (
                "Nenhum agendamento para hoje"
              )}
            </p>
          </div>
        </Time>
      ))}

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
