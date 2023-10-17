import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ManageExpense from './screens/ManageExpense';
import ExpenseOverview from './components/Navigation/ExpenseOverview';
import { GlobalStyles } from './constants/styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white'
          }}
        >
          <Stack.Screen
            component={ExpenseOverview}
            name='ExpensesOverview'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={ManageExpense}
            name='ManageExpense'
            options={{ presentation: 'modal' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
