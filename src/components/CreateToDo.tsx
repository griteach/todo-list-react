import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';


interface IForm{
    toDo:string;
    
}


function CreateToDo(){

    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    
    const {register, handleSubmit, setValue, formState:{errors}} = useForm<IForm>();
    const onValid = ({toDo}:IForm) => {
        console.log("add to do",toDo);
        setToDos(oldTodos => [{text:toDo, id:Date.now(), category}, ...oldTodos]);
        /**
         *  setValue를 통해서 값을 재지정. ("")은 빈칸으로 만들어서 입력폼을 비워준다. 다시 입력할 수 있도록.
         *  setValue가 onValid에 들어있는 이유는 정상적으로 submit이 되었기 때문이며, 
         *  그렇지 않은 경우에는 데이터가 제대로 입력되지 않았기 때문에 입력폼을 비워줄 필요가 없다.   
        */
        setValue("toDo", "");
    }


    return (<form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
    <input {...register("toDo", {
        required:"Please write something...",
        maxLength:{
            value:15,
            message:"Too long",
        }
    })} placeholder="Wirte to do list...">
    </input>
    {/* 에러 메세지를 통해서 화면에 띄울 에러메세지를 설정한다.*/}
    <ErrorMessage
        name='toDo' 
        errors={errors} 
        render={
            ({message}) => <p>{message}</p>
        } 
    />
    <input type="submit" value="ADD" />
</form>)
}

export default CreateToDo;