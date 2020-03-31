import produce from "immer";

const INITIAL_STATE = {
  pacient: []
};

export default function pacient(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/CREATE_SCHEDULE_REQUEST": {
        draft.pacient = action.payload.profile;
        break;
      }
      default:
    }
  });
}
