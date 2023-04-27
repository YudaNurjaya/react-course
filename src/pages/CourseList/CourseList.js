import {Button} from "react-bootstrap";

import {StyledListGroup} from "./style";
import CourseItem from "./components/CourseItem/CourseItem";
import { EmptyList } from "../../components/EmptyList";
import {StyledContainer} from "../../components";
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { getCourses } from "../../services/courseServices";


const List = ({data}) => {
    return (
        <StyledListGroup>
            {data?.map((item) => (
                <CourseItem data={item} key={item?.courseId} />
            ))}
        </StyledListGroup>
    )
}

const CourseList = () => {
    const {data: courses, loading, error} = useQuery(getCourses,{})
    const navigate = useNavigate();
    console.log(courses)
    return (
        <StyledContainer>
            <h1>Course List Page</h1>
            {courses?.length > 0 ? <List data={courses} /> : <EmptyList/>}
            <Button variant="success" onClick={() => navigate('/add-course')} style={{marginRight:20}}>Add Course</Button>
            <Button variant="success" onClick={()=> navigate('/type-list')}>Type List</Button>
        </StyledContainer>
    )
}

export default CourseList;