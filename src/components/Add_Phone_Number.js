import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Add_Phone_Number = () => {
  return (
    <View style={styles.MainCont}>
      <View>
        <Text style={styles.head}>Phone Number</Text>
        <Text style={styles.header}>
          You'll be sent a code to confirm your number
        </Text>
        <TextInput placeholder="XXXXXXXXXX" style={styles.TextInp} />
        <View style={styles.btncont}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt}>Send Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Add_Phone_Number;

const styles = StyleSheet.create({
  MainCont: {
    padding: 20,
  },
  head: {
    fontSize: 20,
    fontWeight: '600',
  },
  TextInp: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#c2c2c2',
  },
  header: {
    fontSize: 15,
    marginTop: 4,
    marginBottom: 5,
  },
  btncont:{
    marginTop: 50,
  },
  btn:{
    backgroundColor: '#39acf7',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },
  btntxt:{
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    
  }
});
