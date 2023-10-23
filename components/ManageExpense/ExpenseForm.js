import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../UI/Button';
import Input from './Input';

const ExpenseForm = ({ onCanel, onSubmit, submitBtnLabel }) => {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: ''
  });

  const inputChangeHandler = (inputId, enteredValue) =>
    setInputValues((state) => ({
      ...state,
      [inputId]: enteredValue
    }));

  const submitHandler = () => {
    const data = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description
    };

    onSubmit(data);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label='Amount'
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues.amount
          }}
        />
        <Input
          label='Date'
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: 'default',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValues.date,
            placeholder: 'YYYY-MM-DD'
          }}
        />
      </View>
      <Input
        label='Description'
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description
        }}
      />
      <View style={styles.buttons}>
        <Button mode='flat' onPress={onCanel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitBtnLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  button: { marginHorizontal: 8, minWidth: 120 },
  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
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
