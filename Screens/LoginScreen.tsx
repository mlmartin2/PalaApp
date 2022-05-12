import  React, { useContext, useEffect, useState } from "react";
import { Button, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "../styles";
import { AuthContext } from "../context/contextProvider";
import PINInput from "../components/PinInput";
import login from "../functions/authUser";
import axios from "axios";

async function _auth(username: string, password: string)
{
    var u = null
    try{u = await login(username, password)}
    catch(e){alert(e)}
    if( u != null) {return true}
    return false
}

// 
async function debugfunc()
{
    let raw = await axios.get('http://192.168.1.112:8000/data/savings/11fbfa18-e885-4b0a-b589-160b2c72c7e4')
    let u = raw.data
    alert(u)
}

export default function LoginScreen({navigation}: any)
{
    const [user,setUser]: any = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const auth = async () =>
    {
        var u: any = {}
        try {u = await login(username, password)}
        catch(e) {alert(e + '***e')}
        if(u != null) {setUser(u);  return true}
        return false
    }

    return(
        <KeyboardAvoidingView >
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#000000', alignItems:'center', height:'60%' }}>
                        <Image style={{ resizeMode:'center', width:'100%' }} source={require('../assets/vetorpalaonly.png')} />
                    </View>
                    <View >
                        <TextInput autoCapitalize='words' style={{ textAlign: 'center' }} placeholder="Nome" onChangeText={setUsername} value={username} />
                        <PINInput placeholder="PIN" onChangeText={setPassword} value={password} />
                        <Button title="Login" onPress={() => auth()} />
                        <Button title="Cadastro" onPress={() => navigation.navigate('Sign Up')} />
                        <Button title='Debug' onPress={() => debugfunc()} />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

