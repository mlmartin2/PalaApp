import { TextInput } from "react-native"
import type { Dispatch, SetStateAction } from "react"

 export default function PINInput(props: {placeholder: string, onChangeText: Dispatch<SetStateAction<string>>, value: string})
{
    return (
        <TextInput style={{textAlign:'center'}} 
        placeholder={props.placeholder}
        keyboardType='number-pad' 
        onChangeText={props.onChangeText} 
        value={props.value}
        secureTextEntry />
    )
}