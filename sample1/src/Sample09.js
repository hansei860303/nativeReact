import { StyleSheet, Text, View } from 'react-native';

export const Sample09 =() => {
    return(
        <View style={styles.container}>
        <Text>Test</Text>
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