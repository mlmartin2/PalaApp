// comparar nome e senha c/ dados na dbu

import { useContext } from "react";
import { AuthContext } from "../context/contextProvider";
import { find_Value, get_dataEntry } from "./dbHandler";

// REFATORAR
// mudar validators
// criar func. geral p erros ( usuario n existente )

export default async function login(username: string, password: string)
{
    if(username == '') alert('usuario em branco')
    else if(password == '') alert('senha em branco')
    else
    {
        let u = await get_dataEntry('usuarios', 'name', username)
        if(u.pin_hash != password) alert('Senha inválida')
        else {return {...u}}
    }
    return null    
} 