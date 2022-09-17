import { atom } from 'recoil';



export interface IToDo{
    text:string;
    id:number;
    category: "DONE" | "DOING" | "TO_DO";
}


//recoil atom 만들기 (글로벌 스테이트)
export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default: [],
})

