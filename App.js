import * as React from 'react';
import Icon from 'react-native-ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AllScreen from './screens/all';
import CompletedScreen from './screens/completed';
import NewScreen from './screens/new';
import {TodosContextProvider} from './hooks/use-todos';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TodosContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;

              if (route.name === 'All') {
                iconName = 'ios-list';
              } else if (route.name === 'Completed') {
                iconName = 'ios-checkbox';
              } else if (route.name === 'New') {
                iconName = 'ios-add';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="All" component={AllScreen} />
          <Tab.Screen name="Completed" component={CompletedScreen} />
          <Tab.Screen name="New" component={NewScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TodosContextProvider>
  );
}
