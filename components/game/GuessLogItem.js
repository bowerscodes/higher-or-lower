// Global imports
import { StyleSheet, Text, View } from 'react-native';

// Local imports
import Colors from '../../constants/colors';

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    color: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.secondary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

    // Android shadow:
    elevation: 4,

    // iOS shadow:
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.2,
  },
  itemText: {
    color: Colors.primary800,
    fontSize: 16,
  },
});
