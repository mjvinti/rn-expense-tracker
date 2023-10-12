import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllExpenses from '../screens/AllExpenses';
import RecentExpenses from '../screens/RecentExpenses';

const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen component={RecentExpenses} name='RecentExpenses' />
      <BottomTabs.Screen component={AllExpenses} name='AllExpenses' />
    </BottomTabs.Navigator>
  );
};

export default ExpenseOverview;

const styles = StyleSheet.create({});
