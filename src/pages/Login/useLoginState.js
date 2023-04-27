import React from "react";
import{onChangeText} from "../../utils/eventHandlers";


const useLoginState = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const getter = {email,password}
    const setter = {
        email: onChangeText(setEmail),
        password: onChangeText(setPassword)
    }

    return {
        getter,setter
    }
}

export default useLoginState