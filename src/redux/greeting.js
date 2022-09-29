const GET_GREETING = 'GET_GREETING';
const URL = 'http://127.0.0.1:3000/messages';

const initialState = {};

const getGreeting = (Data) => ({
  type: GET_GREETING,
  payload: Data,
});

export const getGrettingFetch = () => async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  if (response.ok) {
    dispatch(getGreeting(data));
  }
};

export const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};
