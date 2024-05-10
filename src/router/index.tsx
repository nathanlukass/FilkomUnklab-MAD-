import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SplashScreen,
  SignWith,
  Home,
  Profile,
  Statistics,
  LoginAdmin,
  LoginStudents,
} from '../pages';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignWith"
        component={SignWith}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginAdmin"
        component={LoginAdmin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginStudents"
        component={LoginStudents}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Statistics"
        component={Statistics}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
