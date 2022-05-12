import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/contextProvider";
import get_dataSet, { get_apiEntry, get_dataEntry } from "../functions/dbHandler";
import Expense_Class, { Expense } from "../models/expenseModel";

// Dados p/ mostrar
// Data, dia da semana
// Nome do usuário
// Tarefa diária/semanal ( completa/incompleta)

const checkbox_true = require('../assets/check.png')
const checkbox_false = require('../assets/checkfalse.png')
const money_icon = require('../assets/money.png')

const CheckBox = ({value, setValue}:any) =>
{
    return (
        <TouchableOpacity onPress={setValue}>
            <Image
                source={value == true ? checkbox_true : checkbox_false}
                style={{ maxHeight: 30, maxWidth: 30 }} />
        </TouchableOpacity>)
}

const ContributionList = ({contributions}: any) =>
{
    if(contributions == undefined) return (<Text>Loading...</Text>) 
    return (
        contributions.map((contribution: any) =>{
            let edited_cost = (contribution.cost).replace('.',',')
            return(
                <View style={{flexDirection:'row'}} key={contribution.id}>
                    <Image source={money_icon} style={{maxHeight:20, maxWidth:20}}/>
                    <Text>{contribution.description}: </Text>
                    <Text>R$ {edited_cost}</Text>
                </View>
            )
        })
    )
}

function string_to_currency(str: string)
{
    var currency_text = '0,00'
    if(str.length == 0) {}
    else if(str.length == 1) currency_text = '0,0' + str
    else if(str.length == 2) currency_text = '0,' + str
    else
    {
        currency_text = ''
        for(let i = 0; i < str.length; i++)
        {
            if(i == str.length - 2) 
            {
            currency_text += ','+ str[i] 
            continue
            }
            currency_text += str[i]
        }
    }
    return currency_text
}

const CurrencyInput = ({value}: any) =>
{
    const [moneyNumber, setMoneyNumber] = value
    const [text, setText] = useState('0,00')
    const [rawText, setRawText] = useState('')

    useEffect(() => {
        if(moneyNumber == 0) {setText('0,00'); setRawText('')}
    }, [moneyNumber])
     
    function onChangeText(e: any) {
        let raw_Text = rawText
        if (e.length < text.length) {
            let edit = e.replace(',','')
            raw_Text = edit
        }
        else {
            let charInput = e[e.length - 1] // caracter adicionado
            raw_Text += charInput
        }
        // remover 0s do inicio
        if(raw_Text != '0,00') raw_Text = raw_Text.replace(/^0+/, '')
        else return
        setRawText(raw_Text)
        let final_text = string_to_currency(raw_Text)
        setText(final_text)
        setMoneyNumber(final_text.replace(',','.'))
    }
    
    return (
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{paddingRight:4}}>R$</Text>
            <TextInput keyboardType='number-pad' onChangeText={onChangeText} value={text}  />
        </View>
    )
}

const InputExpense = ({userid, state}: any) =>
{
    const[description, setDescription] = useState('')
    const[value, setValue] = useState(0)
    const[contributions, setContributions] = state

    async function postExpense()
    {
        let expense: Expense = new Expense_Class(description, value, userid) 
        await axios.post('http://192.168.1.112:8000/api/caixinha/', expense
        ).then((resp) => setContributions([...contributions, resp.data]))
        setDescription('')
        setValue(0)
    }

    return (
        <View>
            <Text>Adicionar Gasto:</Text>
            <TextInput placeholder="descrição do gasto" onChangeText={setDescription} value={description} />
            <CurrencyInput value={[value, setValue]} />
            <Button title="Adicionar" onPress={() =>postExpense()} />
        </View>
    )
}

export default function HomeScreen({navigation}: any)
{
    const [userTask, setUserTask]: any = useState()
    const [user, setUser]:any = useContext(AuthContext)
    const [contributions, setContributions]: any = useState()

    useEffect(() => {
        let entry: any
        get_apiEntry('tarefas', 'assigned_user', user.id)
        .then((dataEntry) => setUserTask(dataEntry))
        get_dataEntry('savings', user.id)
        .then((dataraw: any) => setContributions(dataraw.data))
    },[])

    const toggle_task = () =>
    {
        if(userTask == undefined) return
        let _userTask = {...userTask}
        _userTask.complete = !_userTask.complete 
        setUserTask(_userTask)
    }

    return(
        <View style={{ flex: 1 }}>
            <View style={{ flex: 5 }}>
                <View style={{ flex: 1, alignItems:'center', paddingTop:25 }}>
                    <Text>Tarefa de hoje:</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={{fontSize:20}}>{userTask?.description}</Text>
                        <CheckBox value={userTask?.complete} setValue={toggle_task} />
                    </View>
                </View>
                <View style={{ flex: 4, paddingLeft:15 }}>
                    <Text>Gastos com a rep:</Text>
                    <ContributionList contributions={contributions} />
                    <View style={{paddingTop:20}}>
                        <InputExpense userid={user.id} state={[contributions, setContributions]} />
                    </View>
                </View>
            </View>
        </View>
    )
}

