import { StyleSheet, View } from 'react-native';

import Input from './Input';

const ExpenseForm = () => {
  const amountChangeHandler = () => {};

  return (
    <View>
      <Input
        label='Amount'
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangeHandler
        }}
      />
      <Input
        label='Date'
        textInputConfig={{
          keyboardType: 'default',
          maxLength: 10,
          onChangeText: () => {},
          placeholder: 'YYYY-MM-DD'
        }}
      />
      <Input
        label='Description'
        textInputConfig={{
          multiline: true
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({});
