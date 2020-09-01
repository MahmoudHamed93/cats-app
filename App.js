import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {store} from './store';
import {Provider} from 'react-redux';
import MainPage from './src/containers/MainPage';
import CatDetails from './src/containers/CatDetails';
import Profile from './src/containers/Profile';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainPage"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="CatDetails" component={CatDetails} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
