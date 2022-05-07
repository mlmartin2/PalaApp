import axios from "axios";

const host = 'http://192.168.1.112:8000/'

export default async function get_dataSet(dataset_name: string)
{
    var users: object = {}
    try
    {
        await axios.get(host + dataset_name +'/?format=json')
        .then((set) => users = set.data)
    }
    catch(error) {console.log(error)}
    return users
}

export async function get_dataEntry(dataset_name:string, column_name: string, data_value: string)
{
    var users: any = await get_dataSet('usuarios')
    for(let i = 0; i < users.length; i++ )
    {
        if(users[i][column_name] == data_value) return users[i]
    }
    return null;
}

export async function find_Value(dataset_name: string, column_name: string, data_value: string)
{
    var id = null
    try{
        let dataset: any = await get_dataSet(dataset_name)
        for(let i = 0; i < dataset.length; i++)
        {
            let _id = dataset[i]
            if(dataset[_id][column_name] == data_value)
            { id = _id; break; }
        }
    }
    catch(error) {alert(error)}
    return id
}