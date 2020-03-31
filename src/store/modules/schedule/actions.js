export function CreateScheduleResquest(date, time, value) {
  return {
    type: "@auth/CREATE_SCHEDULE_REQUEST",
    payload: { date, time, value }
  };
}

export function createScheduleFailure() {
  return { type: "@auth/CREATE_SCHEDULE_FAILURE" };
}
