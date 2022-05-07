import axios from "axios";
import User_Class, {User} from "../models/userModel";
import validate_User from "./validators/user_validator";

export default async function register_User(username: string, entry_year: number, pin_hash: string, pin_confirm: string)
{
    let user: User = new User_Class(username, entry_year, pin_hash)
    if(pin_hash != pin_confirm) alert('PINs não coincidem')
    else if(await validate_User(user))
    {
        try { await axios.post('http://192.168.1.114:8000/usuarios/', user); return true}
        catch(error){alert(error)}
    }
    return false;
}