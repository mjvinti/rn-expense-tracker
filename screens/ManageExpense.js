import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ManageExpense = ({ navigation: { setOptions }, route: { params } }) => {
  const expenseId = params?.id;

  useLayoutEffect(() => {
    setOptions({ title: expenseId ? 'Edit Expense' : 'Add Expense' });
  }, [expenseId, setOptions]);

  return (
    <View>
      <Text>ManageExpense</Text>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({});
