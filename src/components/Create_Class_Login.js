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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Create_Class_Login = ({navigation}) => {
  return (
    <View style={styles.MainCont}>
      <View style={styles.Mainheader}>
        <View style={styles.icondiv}>
          <Fontisto name="person" size={25} color="green" style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Create your first class</Text>
        </View>
      </View>
      <View style={styles.ipCont}>
        <TextInput
          style={styles.input}
          placeholder="e.g Math 101, Soccer Team"
          placeholderTextColor="#454545"
        />
      </View>
      <View style={styles.NewButton}>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.btntxt}>Create</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linkView}>
        <Text>Looking for a class ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Join_Class')}>
          <Text style={styles.Linktext}>Join Existing class</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Create_Class_Login;

const styles = StyleSheet.create({
  MainCont: {
    padding: 5,
    backgroundColor: '#fff',
    height: '100%',
  },
  Mainheader: {
    marginTop: 20,
    padding: 20,
    alignSelf: 'center',
  },
  icondiv: {
    backgroundColor: '#efa423',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textContainer: {
    marginTop: 14,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1,
  },
  ipCont: {
    marginTop: 40,
  },
  input: {
    borderWidth: 0.8,
    fontSize: 17,
    padding: 10,
    borderRadius: 5,
    borderColor: '#c2c2c2',
  },
  NewButton: {
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  Btn: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  btntxt: {
    color: 'green',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
  linkView: {
    marginTop: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Linktext: {
    color: '#2a6fcb',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
