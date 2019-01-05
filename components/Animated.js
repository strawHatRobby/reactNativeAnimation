import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Animated, Easing, TouchableWithoutFeedback } from 'react-native';

export default class AnimatedComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
    }

    handlePressIn(){
        Animated.spring(this.animateValue, {
            toValue: 150
        }).start()
    }

    handlePressOut(){
        Animated.spring(this.animateValue, {
          toValue: 100,
          friction: 3,
          tension: 40  
        }).start()
    }

    componentWillMount(){
         this.animateValue = new Animated.Value(1);
    }

    componentDidMount(){
        Animated.timing(this.animateValue, {
            toValue: 100,
            duration: 2000,
            easing: Easing.bounce
        }).start()
    }

  render() {
      const animatedStyle = {
          height: this.animateValue
      }
    return (
      <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn = {this.handlePressIn}
        onPressOut = { this.handlePressOut}
      >
            <Animated.View style={[styles.box, animatedStyle]}>
                <Text style={ {color: '#fff', textAlign: 'center'}}>
                    Its a scroll
                </Text>
            </Animated.View>
    </TouchableWithoutFeedback>
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
      borderTopWidth: 5,
      borderBottomWidth: 5,
      borderColor: 'red',
      borderRadius: 1,
      backgroundColor: '#345',
      width: 100,
      height: 100,
      justifyContent: "center", 
      alignItems: "center"     
  }
});
