import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ErrorOverlay from '../components/UI/ErrorOverlay';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import IconButton from '../components/UI/IconButton';
import LoadingOverlay from '../components/UI/LoadingOverlay';

import { ExpensesContext } from '../store/expensesContext';
import { GlobalStyles } from '../constants/styles';
import {
  storeExpense,
  updateExpense as updateExpenseReq,
  deleteExpense as deleteExpenseReq
} from '../util/http';

const ManageExpense = ({
  navigation: { goBack, setOptions },
  route: { params }
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const { addExpense, deleteExpense, expenses, updateExpense } =
    useContext(ExpensesContext);

  const expenseId = params?.id;

  const selectedExpense = expenses.find((expense) => expense.id === expenseId);

  useLayoutEffect(() => {
    setOptions({ title: expenseId ? 'Edit Expense' : 'Add Expense' });
  }, [expenseId, setOptions]);

  const deleteExpenseHandler = async () => {
    setIsSubmitting(true);

    try {
      await deleteExpenseReq(expenseId);
      deleteExpense(expenseId);
      goBack();
    } catch (err) {
      setError('Could not delete expense - please try again later.');
      setIsSubmitting(false);
    }
  };

  const cancelHandler = () => goBack();

  const confirmHandler = async (data) => {
    setIsSubmitting(true);
    try {
      if (expenseId) {
        updateExpense(expenseId, data);
        await updateExpenseReq(expenseId, data);
      } else {
        const id = await storeExpense(data);
        addExpense({ ...data, id });
      }
      goBack();
    } catch (err) {
      setError('Could not save data - please try again later.');
      setIsSubmitting(false);
    }
  };

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultValues={selectedExpense}
        onCanel={cancelHandler}
        onSubmit={confirmHandler}
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
