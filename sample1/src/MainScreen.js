import React, { useEffect, useState } from 'react';
import {StyleSheet,View,FlatList} from 'react-native';
import { List,FAB } from 'react-native-paper';
import format from 'date-fns/format';
import { useNavigation } from '@react-navigation/native';
import { loadAll } from './Store';

export const MainScreen = () => {

    const navigation = useNavigation();

    const [memos,setMemos] = useState([]);

    useEffect(() =>{
        const initialize = async () => {

            const newMemos = await loadAll();

            setMemos(newMemos);

        };

        const unsubscribe = navigation.addListener('focus',initialize)

    },[navigation]);

    const onPressAdd = () => {
        navigation.navigate('Compose');
    };

    return (
        <View style={styles.container}>
            <FlatList style={styles.list} data={memos}
             renderItem={({item}) => (
                 <List.Item 
                 title={item.text} 
                 description={`${format(item.createdAt,'yyyy.MM.dd HH:MM:SS')}`}
                 //description={item.createdAt}
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