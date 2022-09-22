import { atom, selector } from 'recoil';



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







export const toDoSelector = selector({
    key:"toDoSelelctor",
    get:({get}) => {
        const toDos = get(toDoState);
        return [ 
            toDos.filter(toDo => toDo.category === "TO_DO"), 
            toDos.filter(toDo => toDo.category === "DOING"), 
            toDos.filter(toDo => toDo.category === "DONE") 
        ];
    }
})


