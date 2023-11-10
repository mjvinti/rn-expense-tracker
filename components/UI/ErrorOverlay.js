import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

const ErrorOverlay = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    justifyContent: 'center',
    padding: 24
  },
  text: { color: 'white', marginBottom: 8, textAlign: 'center' },
  title: { fontSize: 20, fontWeight: 'bold' }
});
