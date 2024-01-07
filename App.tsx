// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Login } from './src/Screens/Login';
import { ThemeProvider } from 'styled-components';
import {theme} from './src/Global/theme';
import { AuthProvider } from './src/Components/Contexto/Auth';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  );
}

