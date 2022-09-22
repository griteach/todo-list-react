import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { toDoSelector, toDoState } from '../atoms';
import ToDo from './ToDo';
import CreateToDo from './CreateToDo';


//컴포넌트 생성
const ToDoList = () => {

    
    const [todo, doing, done] = useRecoilValue(toDoSelector);

    
    return <div>
        <h1>ToDos</h1>
        <hr></hr>
        <CreateToDo />
        <h2>ToDo</h2>
        <ul>
            {todo.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
        </ul>
        <hr />
        <h2>Doing</h2>
        <ul>
            {doing.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
        </ul>
        <hr />
        <h2>Done</h2>
        <ul>
            {done.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
        </ul>
        <hr />
    </div>


}

export default ToDoList;