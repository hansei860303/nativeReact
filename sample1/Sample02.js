import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count:0,
        }
    }

    onPressMinsOne = () => {
        this.setState({count:this.state.count-1});
    };

    onPressPlusOne = () => {
        this.setState({count:this.state.count + 1});
    }

    render(){
        
        return(
            <View style={styles.container}>
                <Button title = "-1" onPress={this.onPressMinsOne} />
                <Text>{this.state.count}</Text>
                <Button title = "+1" onPress={this.onPressPlusOne} />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });