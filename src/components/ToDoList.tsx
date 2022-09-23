import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Categories, categoryState, toDoSelector, toDoState } from '../atoms';
import ToDo from './ToDo';
import CreateToDo from './CreateToDo';
import React, { ReactElement } from 'react';


//컴포넌트 생성
const ToDoList = () => {

    
    const [category, setCategory] = useRecoilState(categoryState);
    const todos = useRecoilValue(toDoSelector);
    
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    }

    return <div>
        <h1>ToDos</h1>
        <hr></hr>
        <CreateToDo />
        <select onInput={onInput}>
            <option value={Categories.TO_DO}>To Do</option>
            <option value={Categories.DOING}>Doing</option>
            <option value={Categories.DONE}>Done</option>
        </select>
        {todos?.map(todo => <ToDo key={todo.id} {...todo}/>)}

        
    </div>


}

export default ToDoList;