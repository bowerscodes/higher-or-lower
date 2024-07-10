// Global imports
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

// Local imports
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';


const StarGameScreen = ({ onSelectNumber }) => {

  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number', 
        'Enter a number between 1 and 99.', 
        [{ text: 'OK', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }
    onSelectNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad' 
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StarGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary500,
    borderRadius: 8,

    // Android shadow:
    elevation: 4,
    // iOS shadow:
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32, 
    borderColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  }
});
