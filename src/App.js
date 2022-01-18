import { createStore, combineReducers } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
const inputereducer = (input = "", action) => {
  switch (action.type) {
    case "add":
      console.log(action.payload);
      return input + action.payload;
    default:
      return input;
  }
};
const count = (counter = 0, action) => {
  switch (action.type) {
    case "inc":
      return counter + 1;
    default:
      return counter;
  }
};
const store = createStore(
  combineReducers({
    counters: count,
    inputs: inputereducer
  })
);

const Countercompo = () => {
  const select = useSelector(function (state) {
    return state.counters;
  });
  const dispatch = useDispatch();
  return (
    <>
      {select}
      <button onClick={() => dispatch({ type: "inc" })}>INCrement</button>
    </>
  );
};

const Compo = () => {
  const select = useSelector((state) => {
    return state.input;
  });
  const dispatch = useDispatch();
  return (
    <>
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "add", payload: e.target.value });
        }}
      />
    </>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <h1>hrllo</h1>
      <Countercompo />
      <Compo />
    </Provider>
  );
}
