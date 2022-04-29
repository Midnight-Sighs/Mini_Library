import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './src/Styles/StyleSheet.style.js'
import style from './src/Styles/Styles.style'

export default function Test() {

//Test is where I keep random things and try random things out
//It's also where I can keep notes

//For the stylesheets, I had to import each one for them to work.  The second did not inherently load like React seems to do

  return (
    <View style={styles.container}>
      <Text style={style.fontCenter}>This is how you make an App</Text>
      <StatusBar style="auto" />
    </View>
  );
}
