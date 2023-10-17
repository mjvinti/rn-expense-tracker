import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ManageExpense from './screens/ManageExpense';
import ExpenseOverview from './components/Navigation/ExpenseOverview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={ExpenseOverview}
            name='ExpensesOverview'
            options={{ headerShown: false }}
          />
          <Stack.Screen component={ManageExpense} name='ManageExpense' />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
