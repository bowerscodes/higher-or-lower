// Global imports
import { useState } from 'react';
import { 
  Alert, 
  KeyboardAvoidingView, 
  ScrollView,
  StyleSheet, 
  TextInput, 
  useWindowDimensions, 
  View 
} from 'react-native';

// Local imports
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Prompt from '../components/ui/Prompt';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';


const StarGameScreen = ({ onSelectNumber }) => {

  const [enteredNumber, setEnteredNumber] = useState('');

  const { width, height } = useWindowDimensions();

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

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Higher or Lower?</Title>
          <Card>
            <Prompt>Enter a number:</Prompt>
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StarGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
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
