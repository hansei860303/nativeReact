import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [date, setDate] = useState(()=>new Date());
    
    useEffect(() => {
        const timerID = setInterval(()=> {
            setDate(new Date());
        },1000);

        return () => {
            clearInterval(timerID);
        };
    },[]);

    return(
        <View style={styles.container}>
            <Text>現在時刻</Text>
            <Text style={{textDecorationLine: 'underline'}}>{date.toLocaleTimeString()}</Text>
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