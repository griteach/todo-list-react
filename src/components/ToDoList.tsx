import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { toDoSelector, toDoState } from '../atoms';
import ToDo from './ToDo';
import CreateToDo from './CreateToDo';


//컴포넌트 생성
const ToDoList = () => {

    const toDos = useRecoilValue(toDoState);
    const selectorOutput = useRecoilValue(toDoSelector);

    console.log(selectorOutput);
    return <div>
        <h1>ToDos</h1>
        <hr></hr>
        <CreateToDo />
        <ul>
            {toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
        </ul>
    </div>


}

export default ToDoList;