import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, SignWith, loginAdmin, loginStudents} from '../pages';

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
        name="loginAdmin"
        component={loginAdmin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="loginStudents"
        component={loginStudents}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
