import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export interface Expense{
    id: string;
    description: string;
    cost: number;
    user: string;
}

export default class Expense_Class
{
    id: string;
    description: string;
    cost: number;
    user: string;

    constructor(description:string, cost:number, user:string)
    {
        this.id = uuidv4()
        this.description = description
        this.cost = cost
        this.user = user
    }
}