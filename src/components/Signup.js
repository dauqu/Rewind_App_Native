import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Video from 'react-native-video';
const bg = require('../assets/videos/bg3.mp4');
const logo = require('../assets/images/r_logo.png');
const google_logo = require('../assets/images/glogo.png');
const Signup = ({navigation}) => {
  const onBuffer = data => {
    console.log('Buffering=>>>>>>>>>', data);
  };
  const videoError = data => {
    console.log('Video Error=>>>>>>>>>', data);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Video
          source={bg}
          style={styles.backgroundVideo}
          onBuffer={onBuffer}
          onError={videoError}
          repeat={true}
          // fullscreen={true}
          resizeMode="cover"
          disableFocus={true}
          maxBitRate={800000000}
        />
        <View style={styles.textCont}>
          <View style={styles.logoCont}>
            <Image style={styles.Image} source={logo} />
          </View>
          <View style={styles.emptyView}></View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email address or Phone number" placeholderTextColor="#686868" 
            />
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#686868" />
            <View style={styles.SignupBtnContainer}>
              <TouchableOpacity style={styles.button}>
                {/* <Image source={google_logo} style={styles.googlelogo} /> */}
                <Text style={styles.googleText}> Signup </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ORcontainer}>
            <View style={styles.lineView}></View>
            <View style={styles.secondaryOR}>
              <Text style={styles.Ortext}>OR</Text>
            </View>
            <View style={styles.lineView}></View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button}>
              <Image source={google_logo} style={styles.googlelogo} />
              <Text style={styles.googleText}> Signup with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linkcont}>
            <TouchableOpacity
              style={styles.linkView}
              onPress={() => navigation.navigate('login')}>
              <Text style={styles.remindText}>Already on Remind? </Text>
              <Text style={styles.LogText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 900,
  },
  textCont: {
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  logoCont: {
    alignSelf: 'center',
    padding: 20,
  },
  emptyView: {
    height: 410,
  },
  input: {
    // height: 40,
    // margin: 12,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 15,
    marginTop: 10,
  },
  SignupBtnContainer: {
    marginTop: 10,
  },
  ORcontainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  lineView: {
    height: 1,
    borderWidth: 0.9,
    borderColor: 'white',
    width: '40%',
  },
  secondaryOR: {
    width: '20%',
  },
  Ortext: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  btnContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
  },
  googlelogo: {
    width: 20,
    height: 20,
  },
  googleText: {
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    color: 'gray',
    fontWeight: '600',
  },
  linkcont: {
    // paddingBottom: 90,
  },
  linkView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  remindText: {
    color: '#f5f5f5',
  },
  LogText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
