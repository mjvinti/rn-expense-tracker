import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../components/UI/Button';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import IconButton from '../components/UI/IconButton';
import { ExpensesContext } from '../store/expensesContext';
import { GlobalStyles } from '../constants/styles';

const ManageExpense = ({
  navigation: { goBack, setOptions },
  route: { params }
}) => {
  const { addExpense, deleteExpense, updateExpense } =
    useContext(ExpensesContext);

  const expenseId = params?.id;

  useLayoutEffect(() => {
    setOptions({ title: expenseId ? 'Edit Expense' : 'Add Expense' });
  }, [expenseId, setOptions]);

  const deleteExpenseHandler = () => {
    deleteExpense(expenseId);
    goBack();
  };

  const cancelHandler = () => goBack();

  const confirmHandler = () => {
    expenseId
      ? updateExpense(expenseId, {
          amount: 29.99,
          date: new Date(),
          description: 'update test'
        })
      : addExpense({ amount: 19.99, date: new Date(), description: 'test' });
    goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCanel={cancelHandler}
        submitBtnLabel={expenseId ? 'Update' : 'Add'}
      />
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
