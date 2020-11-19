import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#f5f5f5'},
    }}>
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="Dashboard" component={Dashboard} />
  </Auth.Navigator>
);

export default AuthRoutes;
