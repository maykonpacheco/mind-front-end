export function CreatePacientResquest(username, fone, email) {
  return {
    type: "@auth/CREATE_PACIENT_REQUEST",
    payload: { username, fone, email }
  };
}

export function createPacientFailure() {
  return { type: "@auth/CREATE_PACIENT_FAILURE" };
}
