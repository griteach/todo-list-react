import { atom, selector } from 'recoil';






export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}

export interface IToDo{
    text:string;
    id:number;
    category: Categories;
}


//recoil atom 만들기 (글로벌 스테이트)
export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default: [],
})


export const categoryState = atom<Categories>({
    key:"category",
    default:Categories.TO_DO,
})




export const toDoSelector = selector({
    key:"toDoSelelctor",
    get:({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter(toDo => toDo.category === category);
        
        
        
    }
})


