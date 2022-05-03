import  React, { useContext, useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import { styles } from "../styles";
import authenticate_User from "../functions/authHandler";
import { AuthContext } from "../context/contextProvider"
import { Picker } from "@react-native-picker/picker";
import validate_username from "../functions/validators/username_validator";
import PINInput from "../components/PinInput";

const years = ['2015','2016','2017','2018','2019','2020','2021','2022']

export default function LoginScreen({navigation}: any)
{
    const [username, setUsername] = useState('')
    const [startyear, setStartyear] = useState(2016)
    const [password, setPassword] = useState('')
    const [passconfirm, setPassconfirm] = useState('')
    
    return(
        <View style={styles.root}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../resources/vetorpalaonly.png')} />
            </View>
            <View style={styles.body}>
                <TextInput style={{textAlign:'center'}} autoCapitalize='words' placeholder="Nome" onChangeText={setUsername} value={username} />
                <PINInput placeholder="PIN" onChangeText={setPassword} value={password} />
                <PINInput placeholder="Confirmar PIN" onChangeText={setPassconfirm} value={passconfirm} />
                <View>
                    <Picker
                        selectedValue={startyear}
                        style={{textAlign:'center'}}
                        onValueChange={(val,idx) => setStartyear(val)} >
                        <Picker.Item label="2016" value={2016} />
                        <Picker.Item label="2017" value={2017} />
                        <Picker.Item label="2018" value={2018} />
                        <Picker.Item label="2019" value={2019} />
                        <Picker.Item label="2020" value={2020} />
                        <Picker.Item label="2021" value={2021} />
                        <Picker.Item label="2022" value={2022} />
                        <Picker.Item label="2023" value={2023} />
                    </Picker>
                </View>
                <Button title="Cadastrar" onPress={() => authenticate_User(username, password)} />
                <Button title="Login" onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    )
}



async function TEST_SignUp(username: string, pass: string, passconfirm: string)
{
    if(await validate_username(username) == false
        || pass != passconfirm ) return false;
    return true
}