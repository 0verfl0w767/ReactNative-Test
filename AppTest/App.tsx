import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SafeAreaProvider} from 'react-native-safe-area-context'

const Stack = createStackNavigator()

import X1intro from './styles/x1intro/x1intro'
import X2home from './styles/x2home/x2home'
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Intro"
            component={X1intro}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={X2home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
