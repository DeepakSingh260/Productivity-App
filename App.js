// Install required dependencies:
// npm install @react-navigation/native @react-navigation/drawer react-native-reanimated react-native-gesture-handler

import * as React from 'react';
import { View, Text, TouchableOpacity , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Pages/home';
import Task from './Pages/task';
import Colors from './accessories/colors';




const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Add Tasks">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Add Tasks" component={Task} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};



export default App;


