import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ManageExpense from './screens/ManageExpense';
import ExpenseOverview from './components/ExpenseOverview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={ExpenseOverview} name='ExpensesOverview' />
          <Stack.Screen component={ManageExpense} name='ManageExpense' />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
