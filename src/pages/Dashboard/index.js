import React from "react";

import { Container, Time, Date, AppointmentCLient, Month } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>MAR 22 - 28</strong>
      </header>

      <Time day>
        <nav>
          <span>SEG</span>
          <strong>22</strong>
        </nav>
        <div>
          <p>Nenhum agendamento para hoje</p>
        </div>
      </Time>
      <Time>
        <nav>
          <span>TER</span>
          <strong>23</strong>
        </nav>
        <div>
          <AppointmentCLient>
            <strong>Henrique Rolin</strong>
            <span>18:00</span>
          </AppointmentCLient>
        </div>
      </Time>
      <Time>
        <nav>
          <span>QUA</span>
          <strong>24</strong>
        </nav>
        <div>
          <AppointmentCLient>
            <strong>Maykon Pacheco</strong>
            <span>18:00</span>
          </AppointmentCLient>
        </div>
      </Time>

      <header>
        <strong>MAR 25 - 31</strong>
      </header>

      <Month>
        <strong>ABRIL 2020</strong>
      </Month>
    </Container>
  );
}
