import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import Transparency from './pages/Transparency';
import Support from './pages/Support';


const Stack = createNativeStackNavigator();
function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Index} options={{ title: 'Accueil' }} />
          <Stack.Screen name="Transparency" component={Transparency} options={{ title: 'Transparency' }} />
          <Stack.Screen name="Support" component={Support} options={{ title: 'Support Duolib' }} />
          <Stack.Screen name="About" component={AboutUs} options={{ title: 'About Us' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};