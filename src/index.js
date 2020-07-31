import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DefaultState from './Default';
import Mobx from './Mobx';
import Redux from './Redux';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="DefaultState">
      <Stack.Screen
        name="DefaultState"
        component={DefaultState}
        options={{title: 'Modo padrão com State'}}
      />
      <Stack.Screen name="Mobx" component={Mobx} />
      <Stack.Screen name="Redux" component={Redux} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
