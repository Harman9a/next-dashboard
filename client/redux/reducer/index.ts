const iState = {
  isLogin: false,
};

interface ActionInterface {
  type: String;
  payload: Object;
}

const Reducer = (state = iState, action: ActionInterface) => {
  return state;
};

export default Reducer;
