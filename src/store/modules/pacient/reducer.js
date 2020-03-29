import produce from "immer";

const INITIAL_STATE = {
  pacient: null,
  loading: false
};

export default function pacient(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/CREATE_PACIENT_REQUEST": {
        draft.loading = true;
        break;
      }
      default:
    }
  });
}
