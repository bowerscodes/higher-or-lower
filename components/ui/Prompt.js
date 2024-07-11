// Global imports
import { StyleSheet, Text } from "react-native";

// Local imports
import Colors from '../../constants/colors';


const Prompt = ({ children, style }) => {
  return (
    <Text style={[styles.prompt, style]}>{children}</Text>
  );
};

export default Prompt;

const styles = StyleSheet.create({
  prompt: {
    color: Colors.primary800,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
