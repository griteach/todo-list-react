import { ErrorMessage } from '@hookform/error-message';
import {useForm} from 'react-hook-form';

const ToDoList = () => {

    interface IForm{
        toDo:string;
    }

    const onValid = (data:IForm) => {
        console.log(data);
        setValue("toDo", "");
    }
    const { register, handleSubmit, formState:{errors}, setValue} = useForm<IForm>();
    return <div>
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
            <input {...register("toDo", {
                required:"Please write something...",
                maxLength:{
                    value:15,
                    message:"Too long",
                }
            })} placeholder="Wirte to do list...">
            </input>
            <ErrorMessage name='toDo' errors={errors} render={
                ({message}) => <p>{message}</p>
            } />
            <input type="submit" value="ADD" />
        </form>
    </div>


}

export default ToDoList;