import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import Logout from '../pages/Logout';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#f5f5f5'},
    }}>
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="Logout" component={Logout} />
  </Auth.Navigator>
);

export default AuthRoutes;
