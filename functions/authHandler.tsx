import get_dataSet from "./dbHandler";

export default function authenticate_User(username: String, password: String)
{
    var users = get_dataSet('usuarios')
    alert(users)
}