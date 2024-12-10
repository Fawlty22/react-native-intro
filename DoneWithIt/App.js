import { StyleSheet, View, Text} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
export default function App() {
  
  return (
    <WelcomeScreen></WelcomeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
})

