import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Animated, Easing } from 'react-native';

export default class AnimatedComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
         this.animateValue = new Animated.Value(1);
    }

    componentDidMount(){
        Animated.timing(this.animateValue, {
            toValue: .5,
            duration: 10000,
            easing: Easing.bounce
        }).start()
    }

  render() {
      const animatedStyle = {
          opacity: this.animateValue
      }
    return (
      <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyle]}/>
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
  box: {
      backgroundColor: '#345',
      width: 100,
      height: 100
  }
});
