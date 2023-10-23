import { StyleSheet, Text, TextInput, View } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

const Input = ({ label, textInputConfig }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={
          textInputConfig && textInputConfig.multiline
            ? [styles.input, styles.inputMultiline]
            : styles.input
        }
        {...textInputConfig}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    borderRadius: 6,
    fontSize: 18,
    padding: 6
  },
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 12,
    marginBottom: 4
  }
});
