import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "Bob",
    };
  }

  render() {
    const name=this.state.name;

    return (
      <View style={styles.container}>
        <Welcome name={name} />
      </View>
    );

  }

}

function Welcome(props) {
  return <Text>Hello,{props.name}</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
