import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AllExpenses from '../../screens/AllExpenses';
import RecentExpenses from '../../screens/RecentExpenses';

import { GlobalStyles } from '../../constants/styles';

const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 }
      }}
    >
      <BottomTabs.Screen
        component={RecentExpenses}
        name='RecentExpenses'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} name='hourglass' size={size} />
          ),
          tabBarLabel: 'Recent',
          title: 'Recent Expenses'
        }}
      />
      <BottomTabs.Screen
        component={AllExpenses}
        name='AllExpenses'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} name='calendar' size={size} />
          ),
          tabBarLabel: 'All Expenses',
          title: 'All Expenses'
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default ExpenseOverview;

const styles = StyleSheet.create({});
