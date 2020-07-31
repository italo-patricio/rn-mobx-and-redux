import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DefaultState from './Default';
import Mobx from './Mobx';
import Redux from './Redux';
import {RouteDefaultState, RouteMobx, RouteRedux} from './shared/routenames';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName={RouteDefaultState}>
      <Tab.Screen
        name={RouteDefaultState}
        component={DefaultState}
        options={{
          title: '',
          tabBarIcon: ({color, size}) => (
            <Text style={{color, fontSize: size}}>State</Text>
          ),
        }}
      />
      <Tab.Screen
        name={RouteMobx}
        component={Mobx}
        options={{
          title: '',
          tabBarIcon: ({color, size}) => (
            <Text style={{color, fontSize: size}}>Mobx</Text>
          ),
        }}
      />
      <Tab.Screen
        name={RouteRedux}
        component={Redux}
        options={{
          title: '',
          tabBarIcon: ({color, size}) => (
            <Text style={{color, fontSize: size}}>Redux</Text>
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
