import React from "react";
import {Form, Button, ButtonGroup} from 'react-bootstrap';
import FormInput from "../../components/FormInput";
import {StyledContainer, StyledTitle} from './styles';
import useAddCourseState from './useAddCourseState';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import { addCourse } from "../../services/courseServices";


const FORM_LIST = [
    {id:'title', label:'Title',type:'text',placeholder:'Enter course title'},
    {id:'description', label:'Description',type:'textarea',placeholder:'Enter course description'},
    {id:'typeId', label:'Type id',type:'text',placeholder:'Enter course type id'},
    {id:'courseFile', label:'Course Material',type:'file',placeholder:'Choose course material'},
    {id:'level', label:'Level',type:'text',placeholder:'Enter course level'},
    {id:'duration', label:'Duration',type:'text',placeholder:'Enter course duration'}
]

const schema = yup.object({
    title: yup.string().min(4).required('Title Required'),
    description: yup.string().min(10).required('Description Required'),
    typeId: yup.string().required('Type Id Required'),
    courseFile: yup.mixed()
    .test("required", "You need to provide a file", (file) => {
      if (file) return file[0];
      return false;
    }).required(),
    level: yup.string().min(4).required('Level Required'),
    duration: yup.string().min(4).required('Duration Required')
})

const AddCourse = () => {
    const navigate = useNavigate();
    const{onMutation} = useMutation(addCourse,{
        onSuccess: () => navigate('/'),
        onError: () => {}
    })
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const {getter, setter} = useAddCourseState();

    const onSubmit = (data) => {
        onMutation(data)
    }

    return ( 
        <StyledContainer>
            <StyledTitle>Add Course</StyledTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {FORM_LIST.map(item => (
                    <FormInput
                    label={item.label}
                    type={item.type}
                    value={getter[item.id]}
                    onChange={setter[item.id]}
                    placeholder={item.placeholder}
                    register={register}
                    id={item.id}
                    errors={errors}
                    />
                ))}
                <ButtonGroup>
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={()=> navigate('/')}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddCourse;