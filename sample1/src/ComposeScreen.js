import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { save } from './Store'

export const ComposeScreen = () => {

    const [ text, setText ] = useState('');

    const navigation = useNavigation();

    const onPressSave = async() => {
        await save(text,Date.now());
        navigation.navigate('Main');
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput style={styles.bottom}
            mode="outlined" 
            placeholder="メモを入力してください"
            multiline onChangeText={(text) => setText(text)}/>
            <Button
                mode="contained"
                onPress={onPressSave}>
            保存</Button>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottom:{
        marginBottom : 16,
    },
  });