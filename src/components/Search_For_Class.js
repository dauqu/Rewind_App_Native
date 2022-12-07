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
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
const school = require('../assets/images/school.png');
const Search_For_Class = ({navigation}) => {
  return (
    <View style={styles.MainCont}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('joinclass')}>
          <AntDesign name="arrowleft" size={25} color="black" />
        </TouchableOpacity>
        <View style={styles.headCont}>
          <Text style={styles.headText}>Select your School</Text>
        </View>
      </View>

      <View style={styles.ipCont}>
        <Fontisto
          name="search"
          size={18}
          color="black"
          style={styles.searchicon}
        />
        <TextInput style={styles.input} placeholder="search for a school"  placeholderTextColor="#454545" />
      </View>
      <View style={styles.imgcont}>
        <Image source={school} style={styles.schoolimg} />
      </View>
    </View>
  );
};

export default Search_For_Class;
const styles = StyleSheet.create({
  MainCont: {
    padding: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
  },
  headCont: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  headText: {
    color: '#363636',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  Mainheader: {
    marginTop: 20,
    padding: 20,
    alignSelf: 'center',
  },

  ipCont: {
    borderWidth: 0.4,
    flexDirection: 'row',
    // padding: 5,
    alignItems: 'center',
  },
  searchicon: {
    width: 30,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  input: {
    // borderWidth: 0.3,
    fontSize: 17,
    padding: 10,
  },
  imgcont: {
    width: '80%',
    alignSelf: 'center',
  },
  schoolimg: {
    width: '100%',
    resizeMode: 'contain',
  },
});
