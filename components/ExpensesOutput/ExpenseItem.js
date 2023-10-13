import { StyleSheet, Text, View } from 'react-native';

const ExpenseItem = ({ item: { description } }) => {
  return (
    <View>
      <Text>{description}</Text>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({});
