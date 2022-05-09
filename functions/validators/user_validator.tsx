import User_Class, {User} from "../../models/userModel"
import { find_Value } from "../dbHandler"
import { Errors } from "./errors"


export default async function validate_User(user: User)
{
    //alert(find_Value('usuarios', 'username', user.name))
    if(user.name == '') alert(Errors.Empty_Field.Username)
    else if (user.pin_hash == '') alert(Errors.Empty_Field.PIN)
    else if(await find_Value('usuarios', 'username', user.name) != null) {alert(Errors.Repeated_Value.Username)}
    else return true
    return false
}