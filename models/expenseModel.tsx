import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export interface Expense{
    //id: string;
    description: string;
    cost: number;
    user: string | null;
}

export default class Expense_Class
{
    description: string;
    cost: number;
    user: string | null;

    constructor(description:string, cost:number, user:string|null = null)
    {
        this.description = description
        this.cost = cost
        this.user = user
    }
}