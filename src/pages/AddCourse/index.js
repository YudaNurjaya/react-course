import React from "react";
import {Form, Button, ButtonGroup} from 'react-bootstrap';
import FormInput from "../../components/FormInput";
import {StyledContainer, StyledTitle} from './styles';
import useAddCourseState from './useAddCourseState';

const FORM_LIST = [
    {id:'title', label:'Title',type:'text',placeholder:'Enter course title'},
    {id:'description', label:'Description',type:'textarea',placeholder:'Enter course description'},
    {id:'typeId', label:'Type id',type:'text',placeholder:'Enter course type id'},
    {id:'courseFile', label:'Course Material',type:'file',placeholder:'Choose course material'},
    {id:'level', label:'Level',type:'text',placeholder:'Enter course level'},
    {id:'duration', label:'Duration',type:'text',placeholder:'Enter course duration'}
]

const AddCourse = () => {
    const {getter, setter} = useAddCourseState();

    return (
        <StyledContainer>
            <StyledTitle>Add Course</StyledTitle>
            <Form>
                {FORM_LIST.map(item => (
                    <FormInput
                    label={item.label}
                    type={item.type}
                    value={getter[item.id]}
                    onChange={setter[item.id]}
                    placeholder={item.placeholder}
                    />
                ))}
                <ButtonGroup>
                    <Button variant="success">
                        Submit
                    </Button>
                    <Button variant="secondary">
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddCourse;