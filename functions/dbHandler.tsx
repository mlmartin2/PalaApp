import axios from "axios";

export default async function get_dataSet(dataset_name: string)
{
    var users: object = {}
    try
    {
        axios.get('http://192.168.1.114:8000/'+ dataset_name +'/?format=json')
        .then((set) => users = set.data)
    }
    catch(error) {console.log(error)}
    return users
}

export async function find_Value(dataset_name: string, column_name: string, data_value: string)
{
    var id = null
    try{
        let dataset: any = await get_dataSet(dataset_name)
        let keys = Object.keys(dataset)
        for(let i = 0; i < keys.length; i++)
        {
            let _id = keys[i]
            if(dataset[_id][column_name] == data_value)
            { id = _id; break; }
        }
    }
    catch(error) {alert(error)}
    return id
}