import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import Button from '../UI/Button';
import Input from './Input';

import { getFormattedDate } from '../../util/date';

const ExpenseForm = ({ defaultValues, onCanel, onSubmit, submitBtnLabel }) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? getFormattedDate(defaultValues.date) : '',
    description: defaultValues ? defaultValues.description : ''
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

    const isAmountValid = !isNaN(data.amount) && data.amount > 0,
      isDateValid = data.date.toString() !== 'Invalid Date',
      isDescriptionValid = data.description.trim().length > 0;

    if (!isAmountValid || !isDateValid || !isDescriptionValid) {
      return Alert.alert('Invalid Input', 'Please check your input values');
    }

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
