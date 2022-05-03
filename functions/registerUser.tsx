import axios from "axios";
import User_Class, {User} from "../models/userModel";
import validate_User from "./validators/user_validator";

export default function register_User(username: string, entry_year: number, pin_hash: string)
{
    let user: User = new User_Class(username, entry_year, pin_hash)
    if(validate_User(user))
    {
        let userjson = JSON.stringify(user)
        try {axios.post('192.168.1.114:8000/usuarios/', userjson); return true}
        catch(error){alert(error)}
    }
    return false;
}