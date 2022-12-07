import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Compose_Announcement = ({navigation}) => {
  return (
    <View style={styles.MainCont}>
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.insideCont}>
            <View>
              <Text style={styles.lefthead}>To :</Text>
            </View>
            <View>
              <View style={styles.chipCont}>
                <Text style={styles.chiptxt}>Math</Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Announcement')}>
              <AntDesign name="pluscircleo" size={25} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Inpcont}>
          <TextInput placeholder="Type your message" style={styles.text} />
        </View>
        <View style={styles.btncont}>
          <TouchableOpacity style={styles.sendbtn}>
            <Text style={styles.btntxt}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Compose_Announcement;

const styles = StyleSheet.create({
  MainCont: {
    padding: 10,
    backgroundColor: '#fff',
    height: '100%',
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  insideCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lefthead: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    marginRight: 10,
  },
  chipCont: {
    backgroundColor: '#e5e5e5',
    padding: 10,
    borderRadius: 50,
    height: 'auto',
    width: 'auto',
  },
  chiptxt: {
    fontSize: 18,
    fontWeight: '700',
  },
  Inpcont: {
    marginTop: 10,
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  btncont: {
    marginTop: 40,
    padding: 10,
  },
  sendbtn: {
    width: '50%',
    alignSelf: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
  },
  btntxt: {
    fontSize: 18,
    fontWeight: '400',
    color: 'green',
    textAlign: 'center',
  },
});
