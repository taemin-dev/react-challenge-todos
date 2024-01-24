import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import SelectCategory from "./SelectCategory";
import CreateCategory from "./CreateCategory";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateCategory />
      <hr />
      <SelectCategory />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
