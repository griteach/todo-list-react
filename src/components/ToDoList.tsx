import { ErrorMessage } from '@hookform/error-message';
import {useForm} from 'react-hook-form';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';


const toDoState = atom({
    key:"toDo",
    default:[],
})


const ToDoList = () => {

    const [toDos, setTodos] = useRecoilState(toDoState);
    //만들어둔 atom에서 값을 가져와 사용하는 방법
    // const value = useRecoilValue(toDoState);
    //atom에 저장된 값을 변경하고 싶을 때 사용하는 함수
    // const modFn = useSetRecoilState(toDoState);



    //인터페이스를 이용해서 useForm에서 사용할 데이터의 타입을 만들어 준다.
    interface IForm{
        toDo:string;
    }

    //submit이 이상없을 때(조건을 다 만족시켰을 때) 실행할 코드.
    const onValid = (data:IForm) => {
        console.log(data);
        
        /**
         *  setValue를 통해서 값을 재지정(""는 빈칸으로 만들어서 입력폼을 비워준다. 다시 입력할 수 있도록.)
         *  setValue가 onValid에 들어있는 이유는 정상적으로 submit이 되었기 때문이며, 
         *  그렇지 않은 경우에는 데이터가 제대로 입력되지 않았기 때문에 입력폼을 비워줄 필요가 없다.   
        */
        setValue("toDo", "");
    }
    const { 
        register, 
        handleSubmit, 
        formState:{errors},  //formState에는 errors말고도 다른 유용한 것들이 많이 있음. 공식 문서 참조하기
        setValue
        } = useForm<IForm>();
    return <div>
        <h1>ToDos</h1>
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
            <input {...register("toDo", {
                required:"Please write something...",
                maxLength:{
                    value:15,
                    message:"Too long",
                }
            })} placeholder="Wirte to do list...">
            </input>
            {/* 에러 메세지를 통해서 화면에 띄울 에러메세지를 설정한다.*/}
            <ErrorMessage name='toDo' errors={errors} render={
                ({message}) => <p>{message}</p>
            } />
            <input type="submit" value="ADD" />
        </form>
    </div>


}

export default ToDoList;