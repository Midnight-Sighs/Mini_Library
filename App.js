import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './src/Styles/StyleSheet.style.js'
import style from './src/Styles/Styles.style'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={style.fontCenter}>This is how you make an App</Text>
      <StatusBar style="auto" />
    </View>
  );
}
