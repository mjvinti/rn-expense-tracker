import { StyleSheet, Text, View } from 'react-native';

import Input from './Input';

const ExpenseForm = () => {
  const amountChangeHandler = () => {};

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label='Amount'
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler
          }}
        />
        <Input
          label='Date'
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: 'default',
            maxLength: 10,
            onChangeText: () => {},
            placeholder: 'YYYY-MM-DD'
          }}
        />
      </View>
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

const styles = StyleSheet.create({
  form: { marginTop: 40 },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: { flex: 1 },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 24,
    textAlign: 'center'
  }
});
