import User from "./components/User";
import { Provider } from "react-redux";
import store from "./redux/store";
import Adduser from "./components/Adduser";

function App() {
  return (
    <Provider store={store}>
      <Adduser />
      <User />
    </Provider>
  );
}

export default App;
