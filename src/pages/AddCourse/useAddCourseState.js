import React from "react";
import{onChangeFile, onChangeText} from "../../utils/eventHandlers";

const useAddCourseState = () =>{
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [typeId, setTypeId] = React.useState('');
    const [courseFile, setCourseFile] = React.useState(null);
    const [level, setLevel] = React.useState('');
    const [duration, setDuration] = React.useState('');

    const getter = {title, description, typeId, courseFile, level, duration};
    const setter = {
        title: onChangeText(setTitle),
        description: onChangeText(setDescription),
        typeId: onChangeText(setTypeId),
        courseFile: onChangeFile(setCourseFile),
        level: onChangeText(setLevel),
        duration: onChangeText(setDuration)
    }

    return {
        getter, setter
    }
}

export default useAddCourseState;