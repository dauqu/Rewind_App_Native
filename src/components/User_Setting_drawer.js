import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const cartoon = require('../assets/images/catoon.png');

const User_Setting_drawer = () => {
  const [photo, setPhoto] = useState(null);

  return (
    <View style={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.roundedView}>
            <Image
              source={cartoon}
              resizeMode="contain"
              style={styles.roundImage}
            />
          </View>
          <View style={styles.txtcont}>
            <TouchableOpacity>
              <Text style={styles.txt}>Change Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.midView}>
          <View>
            <Text style={styles.midHead}>First Name</Text>
          </View>
          <View>
            <TextInput style={styles.txtinput} placeholder="First Name" />
          </View>
        </View>
        <View style={styles.midView}>
          <View>
            <Text style={styles.midHead}>Last Name</Text>
          </View>
          <View>
            <TextInput style={styles.txtinput} placeholder="Last Name" />
          </View>
        </View>
        <View style={styles.midView}>
          <View>
            <Text style={styles.midHead}>Old-Password</Text>
          </View>
          <View>
            <TextInput style={styles.txtinput} placeholder="Old-Password" />
          </View>
        </View>
        <View style={styles.midView}>
          <View>
            <Text style={styles.midHead}>New-Password</Text>
          </View>
          <View>
            <TextInput style={styles.txtinput} placeholder="New-Password" />
          </View>
        </View>
        <View style={styles.updatebuttoncontainer}>
          <View>
            <TouchableOpacity style={styles.updatebutton}>
              <Text style={styles.updatebtntxt}>Update Account</Text>
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
        <View style={styles.buttoncontainer}>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btntxt}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default User_Setting_drawer;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  roundedView: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#c2c2c2',
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundImage: {
    width: 90,
    height: 90,
    alignItems: 'center',
  },
  container: {
    padding: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  txtcont: {
    marginTop: 20,
  },
  txt: {
    fontSize: 17,
    color: '#39acf7',
    fontWeight: '500',
  },
  midView: {
    padding: 20,
    marginTop: 20,
  },
  midHead: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
  },
  txtinput: {
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
    padding: 10,
    fontSize: 17,
    borderColor: '#c2c2c2',
  },
  updatebuttoncontainer: {
    marginTop: 40,
    padding: 20,
  },
  updatebutton: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    borderColor: 'green',
    textAlign: 'center',
    justifyContent: 'center',
  },
  updatebtntxt: {
    fontSize: 17,
    color: 'green',
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttoncontainer: {
    marginTop: 30,
    padding: 20,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    borderColor: 'red',
    textAlign: 'center',
    justifyContent: 'center',
  },
  btntxt: {
    fontSize: 17,
    color: 'red',
    textAlign: 'center',
    justifyContent: 'center',
  },
  ORcontainer: {
    padding: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  lineView: {
    height: 1,
    borderWidth: 0.9,
    borderColor: '#c2c2c2',
    width: '40%',
  },
  secondaryOR: {
    width: '20%',
  },
  Ortext: {
    textAlign: 'center',
    color: '#c2c2c2',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
