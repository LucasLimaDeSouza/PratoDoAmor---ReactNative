import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Login } from '../Screens/Login'
import { Initial } from '../Screens/Initial'
import { Register } from '../Screens/Register'
import { Members } from '../Screens/Members'
import { RegisterDay } from '../Screens/RegisterDay'
import { InsertValuesRegisterDay } from '../Screens/InsertValuesRegisterDay'
import { InformartionDay } from '../Screens/InformationDay'


const Tab = createBottomTabNavigator()

export default function TabRoutes() {

    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>

            <Tab.Screen
                name="início"
                component={Initial}
            />
            <Tab.Screen
                name="Cadastrar"
                component={Register}
            />
            <Tab.Screen
                name="Membros"
                component={Members}
            />
            <Tab.Screen
                name="home"
                component={InformartionDay}
            />


        </Tab.Navigator>
    )
}