// Global imports
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Local imports
import StartGameScreen from './screens/StartGame';
import GameScreen from './screens/Game';
import Colors from './constants/colors';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  const selectedNumberHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let screen = <StartGameScreen onSelectNumber={selectedNumberHandler}/>;
  
  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient 
      colors={[Colors.secondary500, Colors.primary500]} 
      style={styles.rootScreen}
    >
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
