import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import Button from '../UI/Button';
import Input from './Input';

import { getFormattedDate } from '../../util/date';
import { GlobalStyles } from '../../constants/styles';

const ExpenseForm = ({ defaultValues, onCanel, onSubmit, submitBtnLabel }) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true
    }
  });

  const inputChangeHandler = (inputId, enteredValue) =>
    setInputs((state) => ({
      ...state,
      [inputId]: { value: enteredValue, isValid: true }
    }));

  const submitHandler = () => {
    const data = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value
    };

    const isAmountValid = !isNaN(data.amount) && data.amount > 0,
      isDateValid = data.date.toString() !== 'Invalid Date',
      isDescriptionValid = data.description.trim().length > 0;

    if (!isAmountValid || !isDateValid || !isDescriptionValid) {
      // return Alert.alert('Invalid Input', 'Please check your input values');
      setInputs((state) => ({
        amount: { value: state.amount.value, isValid: isAmountValid },
        date: { value: state.date.value, isValid: isDateValid },
        description: {
          value: state.description.value,
          isValid: isDescriptionValid
        }
      }));
      return;
    }

    onSubmit(data);
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          invalid={!inputs.amount.isValid}
          label='Amount'
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputs.amount.value
          }}
        />
        <Input
          invalid={!inputs.date.isValid}
          label='Date'
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: 'default',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputs.date.value,
            placeholder: 'YYYY-MM-DD'
          }}
        />
      </View>
      <Input
        invalid={!inputs.description.isValid}
        label='Description'
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputs.description.value
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
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
  errorText: {
    color: GlobalStyles.colors.error500,
    margin: 8,
    textAlign: 'center'
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
