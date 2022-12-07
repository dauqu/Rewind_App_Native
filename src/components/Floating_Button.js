import {
  Animated,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {Component} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Floating_Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  animtion = new Animated.Value(0);
  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;
    Animated.spring(this.animtion, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    this.open = !this.open;
  };

  render() {
    const pinStyle = {
      transform: [
        {
          scale: this.animtion,
        },
        {
          translateY: this.animtion.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -90],
          }),
        },
      ],
    };
    const singleuserStyle = {
      transform: [
        {
          scale: this.animtion,
        },
        {
          translateY: this.animtion.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -150],
          }),
        },
      ],
    };
    const groupStyle = {
      transform: [
        {
          scale: this.animtion,
        },
        {
          translateY: this.animtion.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -210],
          }),
        },
      ],
    };
    const rotation = {
      transform: [
        {
          rotate: this.animtion.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    };
    return (
      <View style={[styles.container]}>
        <TouchableOpacity>
          <Animated.View
            style={[styles.button, styles.secondary, singleuserStyle]}>
            <FontAwesome name="users" size={20} color="#ff5fa1" />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Animated.View style={[styles.button, styles.secondary, pinStyle]}>
            <FontAwesome name="user" size={20} color="#3893ff" />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Animated.View style={[styles.button, styles.secondary, groupStyle]}>
            <AntDesign name="notification" size={20} color="#e56e0f" />
          </Animated.View>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <AntDesign name="plus" size={25} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    textAlign: 'center',
    bottom: 70,
    right: 60,
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#FFF',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
  },
  menu: {
    backgroundColor: '#F02A4B',
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
