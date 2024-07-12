// Global imports
import { StyleSheet, Image, ScrollView, Text, useWindowDimensions, View } from 'react-native';

// Local imports
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';


const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {

  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require('../assets/images/success.png')}/>
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
  highlight: {
    fontWeight: 'bold',
    color: Colors.primary600,
  }
});
