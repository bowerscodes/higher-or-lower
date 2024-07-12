// Global imports
import { Dimensions, StyleSheet, View } from "react-native";

// Local imports
import Colors from '../../constants/colors';

const Card = ({ children }) => {

  return (
    <View style={styles.card}>{children}</View>
  )
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
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
});
