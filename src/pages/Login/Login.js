import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import FormInput from "../../components/FormInput";
import {StyledContainer, StyledTitle} from '../AddCourse/styles';
import useLoginState from "./useLoginState"





const login_list = [
    {id:'email', label:'Email',type:'text',placeholder:'Email'},
    {id:'password', label:'Password',type:'password',placeholder:'Password'}
]

const schema = yup.object({
    email: yup.string().email('format email is example@email.com').required('Email is required').matches('email@gmail.com', "email is wrong"),
    password: yup.string().required('password is required').matches('123456', "Password is wrong")
})


const Login = ({setIsLoggedIn})=>{
    const navigate = useNavigate()
    const {getter,setter} = useLoginState();
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = () => {
        setIsLoggedIn(true)
        navigate('/')   
    }
    return (
        <StyledContainer>
            <StyledTitle>Login Page</StyledTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
            {login_list.map(list =>(
                <FormInput
                label={list.label}
                type={list.type}
                value={getter[list.id]}
                onChange={setter[list.id]}
                placeholder={list.placeholder}
                register={register}
                id={list.id}
                errors={errors}
                />
            ))}


            <ButtonGroup>
                <Button variant="success" type="submit">Login</Button>
            </ButtonGroup>
            </Form>


        </StyledContainer>
    )
}

export default Login