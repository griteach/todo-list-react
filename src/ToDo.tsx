import {useForm} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import styled from "styled-components";

const ErrorMessagePargraph = styled.p`
    font-size: 8px;
    color:red;
    font-weight: bolder;
    margin-top:3px;

`;

interface IForm {
    email:string,
    lastName:string,
    firstName:string,
    home:string,
    passWord:string,
    passWord2:string,
    singleErrorInput:string,
    extraError:string,
}

function Todo(){
    const { register, handleSubmit, formState:{errors}, setError } = useForm<IForm>({
        defaultValues:{
            email:"@gmail.com",
            firstName:"이름",
            lastName:"성",
            home:"Wonju"
            

        }
    }); //register function
    const onValid = (data:IForm) => {
        if(data.passWord !== data.passWord2){
            setError("passWord", {message:"Password are not the same."}, {shouldFocus:true})
        }
        
    }
    
    
    return <div>
        <form style={{display:"flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
            <input {...register("email", {
                required:"This is required.",
                
                validate:
                {
                    iteach12:(value)=>
                    value.includes('iteach12') ? "You can't use this email" : true,
                    griteach22:(value)=>
                    value.includes('griteach22') ? "You can't use this email" : true
                }
                 })}  placeholder="Email" />
            <ErrorMessage 
                errors={errors} 
                name="email" 
                render={
                    ({message}) => <ErrorMessagePargraph>{message}</ErrorMessagePargraph>
                } />
            <input {...register("firstName", {required:"Name is required."})}  placeholder="First Name" />
            <ErrorMessage 
                errors={errors}
                name="firstName"
                render={
                    ({message}) => <ErrorMessagePargraph>{message}</ErrorMessagePargraph>
                }
            />
            <input {...register("lastName", {required:true})}  placeholder="Last Name" />
            <input {...register("home", {required:true})}  placeholder="Home" />
            <input {...register("passWord", {
                required:"Password is requried.", 
                minLength:{
                    value:5,
                    message:"Your password is too short."
                },
                maxLength:{
                    value:10,
                    message:"Your password is too long."
                }})}  placeholder="PassWord" />
                <ErrorMessage 
                errors={errors}
                name="passWord"
                render={
                    ({message}) => <ErrorMessagePargraph>{message}</ErrorMessagePargraph>
                }
            />
            <input {...register("passWord2", {
                required:"Password is requried.", 
                minLength:{
                    value:5,
                    message:"This is too short.",
                }, 
                maxLength:{
                    value:10,
                    message:"This is too long.",
                }})}  placeholder="PassWord2" />
                <ErrorMessage 
                errors={errors}
                name="passWord2"
                render={
                    ({message}) => <ErrorMessagePargraph>{message}</ErrorMessagePargraph>
                }
            />
            
            <input type="submit" value="Add" />
        </form>

    </div>;
}


export default Todo;