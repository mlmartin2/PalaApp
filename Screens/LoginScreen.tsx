import  React, { useContext, useEffect, useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import { styles } from "../styles";
import { AuthContext } from "../context/contextProvider";
import PINInput from "../components/PinInput";
import login from "../functions/authUser";

async function _auth(username: string, password: string)
{
    var u = null
    try{u = await login(username, password)}
    catch(e){alert(e)}
    if( u != null) {return true}
    return false
}

export default function LoginScreen({navigation}: any)
{
    const [user,setUser]: any = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const auth = async () =>
    {
        var u = {}
        try {u = await login(username, password)}
        catch(e) {alert(e + '***e')}
        if(u != null) {setUser(u);  return true}
        return false
    }

    return(
        <View style={styles.root}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/vetorpalaonly.png')} />
            </View>
            <View style={styles.body}>
                <TextInput autoCapitalize='words' style={{textAlign:'center'}} placeholder="Nome" onChangeText={setUsername} value={username} />
                <PINInput placeholder="PIN" onChangeText={setPassword} value={password} />
                <Button title="Login" onPress={() => auth()} />
                <Button title="Cadastro" onPress={() => navigation.navigate('Sign Up')} />
            </View>
        </View>
    )
}

