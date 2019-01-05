import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedComponent from './components/Animated';

export default class App extends React.Component {
  render() {
    return (
      <AnimatedComponent/>
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
