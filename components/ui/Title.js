// Global imports
import { StyleSheet, Text } from 'react-native';

// Local imports
import Colors from '../../constants/colors';

const Title = ({ children }) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: '80%'
  }
});
