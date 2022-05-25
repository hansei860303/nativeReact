import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return(
      <View style={styles.container}>
        <Text style={styles.black}>黒文字</Text>
        <Text style={styles.bigGray}>大きい灰色文字</Text>
        <Text style={[styles.bigGray,styles.black]}>大きい灰色文字に黒文字を上書き</Text>
        <Text style={[styles.black,styles.bigGray]}>大きい黒文字に灰色文字を上書き</Text>
      </View>
    )

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    black:{
      color:'#000000',
    },
    bigGray:{
      color:'#888888',
      fontSize: 24,
    }
  });