import { createDrawerNavigator } from "@react-navigation/drawer";
import type { DrawerNavigationProp } from "@react-navigation/drawer/lib/typescript/src/types";
import HomeScreen from "../Screens/HomeScreen";
import TaskScreen from "../Screens/TaskScreen";

const Drawer = createDrawerNavigator()

export default function HomeNavigation()
{
    
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Task" component={TaskScreen} />
        </Drawer.Navigator>
    )
}