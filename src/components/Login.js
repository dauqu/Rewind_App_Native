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
const bg = require('../assets/videos/bg5.mp4');
const logo = require('../assets/images/r_logo.png');
const google_logo = require('../assets/images/glogo.png');
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}) => {
  // code for buffering and video error
  const onBuffer = data => {
    console.log('Buffering=>>>>>>>>>', data);
  };
  const videoError = data => {
    console.log('Video Error=>>>>>>>>>', data);
  };
  return (
    <>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.MainContainer}>
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
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <AntDesign name="arrowleft" size={25} color="#fff" />
          </TouchableOpacity>
          <View style={styles.headCont}>
            <Text style={styles.headText}>Log in</Text>
          </View>
        </View>
        <View style={styles.textCont}>
          <View style={styles.logoCont}></View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email address or Phone number"
              placeholderTextColor="#686868"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#686868"
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.googleText}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.linkView}
              onPress={() => navigation.navigate('login')}>
              <Text style={styles.remindText}>Forgot Password ? </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ORcontainer}>
            <View style={styles.lineView}></View>
            <View style={styles.secondaryOR}>
              <Text style={styles.Ortext}>OR</Text>
            </View>
            <View style={styles.lineView}></View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('options')}>
              <Image source={google_logo} style={styles.googlelogo} />
              <Text style={styles.googleText}> Login with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linkcont}></View>
          <View style={styles.emptyView}></View>
        </View>
      </View>
      {/* </ScrollView> */}
    </>
  );
};

export default Login;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    height: '100%',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 900,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
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
    marginBottom: 10,
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
    marginBottom: 60,
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
    paddingBottom: 90,
  },
  linkView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  remindText: {
    color: '#f5f5f5',
  },
  LogText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headCont: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  headText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
