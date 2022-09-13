import {useForm} from "react-hook-form";

function Todo(){
    const { register, handleSubmit } = useForm(); //register function
    const onValid = (data:any) => {
        console.log(data);
    }
    
    return <div>
        <form onSubmit={handleSubmit(onValid)}>
            <input {...register("Email", {required:true})}  placeholder="Email" />
            <input {...register("Phone", {required:true})}  placeholder="Phone" />
            <input {...register("Password", {required:true})}  placeholder="Password" />
            <input {...register("Password1", {required:true})}  placeholder="Password1" />
            <input {...register("Name", {required:true})}  placeholder="Name" />
            <input {...register("Home", {required:true})}  placeholder="Home" />
            <input {...register("Age", {required:true})}  placeholder="Age" />
        <button>Add</button>


        </form>

    </div>;
}


export default Todo;