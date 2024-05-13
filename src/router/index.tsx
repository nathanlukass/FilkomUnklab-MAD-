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
  Points,
  SeatMap,
  StudentAtt,
  FillSurvey,
  StudentSurvey,
  Notifications,
} from '../pages';
import {Admin, AdminAtt, AdminSurvey, AdminPoints} from '../pagesAdmin/index';
import SignUp from '../pages/SignUp';

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
      <Stack.Screen
        name="Points"
        component={Points}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SeatMap"
        component={SeatMap}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FillSurvey"
        component={FillSurvey}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StudentAtt"
        component={StudentAtt}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StudentSurvey"
        component={StudentSurvey}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AdminAtt"
        component={AdminAtt}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AdminSurvey"
        component={AdminSurvey}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AdminPoints"
        component={AdminPoints}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
