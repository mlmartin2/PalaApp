import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export interface User{
    id: string;
    name: string;
    present: boolean;
    entry_year: number;
    pin_hash: string
}

export default class User_Class
{
    id: string;
    name: string;
    present: boolean;
    entry_year: number;
    pin_hash: string

    constructor(name:string, entry_year:number, pin_hash:string)
    {
        this.id = uuidv4()
        this.name = name
        this.present = true
        this.entry_year = entry_year
        this.pin_hash = pin_hash
    }
}
