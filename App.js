import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './src/Styles/StyleSheet.style.js'
import style from './src/Styles/Styles.style'
import Test from './Test'

export default function App() {
  return (
    <View style={styles.container}>
      <Test />
    </View>
  );
}
