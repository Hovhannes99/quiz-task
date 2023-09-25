import {useContext} from "react";
import {AuthContext} from "../../Context.tsx";


const LogOut = () => {
    const { logOut, user } = useContext(AuthContext);

    return (
        <div className={'container-log-out'}>
           <p>User email - {user.email}</p>
            <button onClick={logOut}>Log out</button>
        </div>
    )
}

export default LogOut