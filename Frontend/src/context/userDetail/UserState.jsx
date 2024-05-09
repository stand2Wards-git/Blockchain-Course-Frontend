import { useState } from "react"
import UserContext from "./UserContext"


const UserState = (props) => {


    
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [email, setEmail] = useState("");
    return (
        <UserContext.Provider value={{name, email, photo, setName, setPhoto, setEmail}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState