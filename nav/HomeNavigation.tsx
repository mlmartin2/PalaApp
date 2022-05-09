import { createDrawerNavigator } from "@react-navigation/drawer";
import type { DrawerNavigationProp } from "@react-navigation/drawer/lib/typescript/src/types";
import HomeScreen from "../Screens/HomeScreen";
import TaskScreen from "../Screens/TaskScreen";

const Drawer = createDrawerNavigator()

const screenOptions = {
    
}

export default function HomeNavigation()
{
    
    return (
        <Drawer.Navigator initialRouteName="Home" 
        screenOptions={{drawerStyle:{backgroundColor:'#1C1C1C', width:'49%'}, drawerActiveTintColor:'#ffffff', drawerInactiveTintColor:'#CACACA'}} >
            <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false, title:'Home' }} />
            <Drawer.Screen name="Task" component={TaskScreen} options={{ headerShown: false, title:'Tarefas' }} />
        </Drawer.Navigator>
    )
}