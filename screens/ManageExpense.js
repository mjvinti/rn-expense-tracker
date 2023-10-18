import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import IconButton from '../components/UI/IconButton';

import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';

const ManageExpense = ({ navigation: { setOptions }, route: { params } }) => {
  const expenseId = params?.id;

  useLayoutEffect(() => {
    setOptions({ title: expenseId ? 'Edit Expense' : 'Add Expense' });
  }, [expenseId, setOptions]);

  const deleteExpenseHandler = () => {};

  const cancelHandler = () => {};

  const confirmHandler = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode='flat' onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {expenseId ? 'Update' : 'Add'}
        </Button>
      </View>
      {expenseId && (
        <View style={styles.deleteContainer}>
          <IconButton
            color={GlobalStyles.colors.error500}
            icon='trash'
            onPress={deleteExpenseHandler}
            size={36}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  button: { marginHorizontal: 8, minWidth: 120 },
  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: GlobalStyles.colors.primary800,
    flex: 1,
    padding: 24
  },
  deleteContainer: {
    alignItems: 'center',
    borderTopColor: GlobalStyles.colors.primary200,
    borderTopWidth: 2,
    marginTop: 16,
    paddingTop: 8
  }
});
