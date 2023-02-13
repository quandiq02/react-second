import DarkMode from "./components/darkMode/darkMode";
import Modal from "./components/modal/Modal";
import TodoList from "./components/mytodolist/childTDItem";
import Temp from "./components/temperature/temp";
import Toggle from "./components/toggle/toggle";

function App() {
  return (
    <>
      <Modal />
      <DarkMode />
      <Temp/>
      <Toggle/>
    </>
  );
}

export default App;
