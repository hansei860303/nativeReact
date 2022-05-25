import { useState } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
    const [count,setCount] = useState(10);

    return(
        <View style={styles.container}>
            <Button title="-1" onPress={() => setCount(count - 1)} />
            <Text>{count}</Text>
            <Button title="+1" onPress={() => setCount(count + 1)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });