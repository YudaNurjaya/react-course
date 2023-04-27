import React from "react";
import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useMutation from "../../../../hooks/useMutation";
import { deleteById } from "../../../../services/courseServices";

const CourseItem = ({data}) => {
    const {onMutation}= useMutation(deleteById,{
        onSuccess: ()=> navigate(0),
        onError: ()=> {}
    })

    const navigate = useNavigate()
    return (
        <StyledListItem action>
            <Col>
                <h3 className="lead">{data?.title}</h3>
                <p>{data?.description}</p>
            </Col>
            <ButtonGroup>
                <Button variant="primary" onClick={()=> navigate(`/edit-course/${data.id}`)}>Edit</Button>
                <Button variant="danger" onClick={()=> onMutation(data.id)}>Delete</Button>
                <Button variant="secondary">Download</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}

export default React.memo(CourseItem);