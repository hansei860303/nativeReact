import React from 'react';
import {StyleSheet,View,FlatList} from 'react-native';
import { List,FAB } from 'react-native-paper';
import format from 'date-fns/format';
import { useNavigation } from '@react-navigation/native';

const memos = [
    {
        text:"メモメモメモ",
        createdAt: 1585574700000,
    },
    {   
        text:"メモメモメモ",
        createdAt: 1585574700000,
    },
    {   
        text:"メモメモメモ",
        createdAt: 1585574700000,
    },
    {   
        text:"メモメモメモ",
        createdAt: 1585574700000,
    },
];

export const MainScreen = () => {

    const navigation = useNavigation();

    const onPressAdd = () => {
        navigation.navigate('Compose');
    };

    return (
        <View style={styles.container}>
            <FlatList style={styles.list} data={memos}
             renderItem={({item}) => (
                 <List.Item 
                 title={item.text} 
                 description={`${format(item.createdAt,'yyyy.MM.dd HH:MM')}`}
                 />
             )}/>
            <FAB style={{
                position: 'absolute',
                right: 16,
                bottom: 16,
            }}
            icon="plus"
            onPress={onPressAdd}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    list:{
        flex: 1,
    },
});