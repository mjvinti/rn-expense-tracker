import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getFormattedDate } from '../../util/date';
import { GlobalStyles } from '../../constants/styles';

const ExpenseItem = ({ amount, date, description, id }) => {
  const { navigate } = useNavigation();
  const expensePressHandler = () => {
    navigate('ManageExpense', { id });
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  amount: { color: GlobalStyles.colors.primary500, fontWeight: 'bold' },
  amountContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    minWidth: 80,
    paddingHorizontal: 12,
    paddingVertical: 4
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  expenseItem: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 12,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4
  },
  pressed: { opacity: 0.75 },
  textBase: { color: GlobalStyles.colors.primary50 }
});
