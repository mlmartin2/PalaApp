import User_Class, {User} from "../../models/userModel"
import { find_Value } from "../dbHandler"

const Errors = {
    Empty_Field:
    {
        Username: 'Usuário em branco',
        PIN: 'PIN em branco',
        PIN_Confirm: 'Confirmar PIN'
    },
    Repeated_Value:
    {
        Username: 'Usuário já existe'
    }
}

export default function validate_User(user: User)
{
    if(user.name == '') alert(Errors.Empty_Field.Username)
    else if (user.pin_hash == '') alert(Errors.Empty_Field.PIN)
    else if( find_Value('usuarios', 'username', user.name) != undefined) alert(Errors.Repeated_Value.Username)
    else return true
    return false
}