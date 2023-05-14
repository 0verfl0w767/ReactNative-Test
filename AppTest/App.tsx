import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import X1intro from './styles/x1intro/x1intro'
import X2home from './styles/x2home/x2home'
import X22sidebar from './styles/x2-2sidebar/x22sidebar'
import X7random from './styles/x7random/x7random'
import X8cart from './styles/x8cart/x8cart'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

// const HomeScreen = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{drawerPosition: 'right', headerShown: false}}>
//       <Drawer.Screen
//         name="P1"
//         options={{headerShown: false, drawerItemStyle: {display: 'none'}}}
//         component={X2home}
//       />
//       <Drawer.Screen
//         name="P2"
//         options={{headerShown: false}}
//         component={X22sidebar}
//       />
//     </Drawer.Navigator>
//   )
// }

// const HomeScreen = () => {
//   return (
//     <Tab.Navigator screenOptions={{headerShown: false}}>
//       <Tab.Screen name="Home" component={X2home} />
//       <Tab.Screen name="Expl" component={X2home} />
//       <Tab.Screen name="Cart" component={X2home} />
//       <Tab.Screen name="Profile" component={X2home} />
//     </Tab.Navigator>
//   )
// }

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Intro" component={X1intro} />
          <Stack.Screen name="Home" component={X2home} />
          <Stack.Screen name="Expl" component={X7random} />
          <Stack.Screen name="Cart" component={X8cart} />
          {/* <Stack.Screen name="Profile" component={X2home} /> */}
          <Stack.Screen name="Sidebar" component={X22sidebar} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
