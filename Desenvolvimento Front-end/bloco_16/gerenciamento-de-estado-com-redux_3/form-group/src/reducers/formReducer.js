
const INITIAL_STATE = {
  form: {}
}

const formReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FORM_INFORMATION':
      return { form: action.payload.objetoForm };
    default:
      return state;
  }
}

export default formReducer;