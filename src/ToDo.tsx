import {useForm} from "react-hook-form";

function Todo(){
    const { register, watch } = useForm(); //register function

    return <div>
        <form>
            <input {...register("toDo")}  placeholder="Write a to do" />
        </form>
        <button>Add</button>

    </div>;
}


export default Todo;