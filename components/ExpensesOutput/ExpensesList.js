import { FlatList } from 'react-native';

import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={({ id }) => id}
      renderItem={ExpenseItem}
    />
  );
};

export default ExpensesList;
