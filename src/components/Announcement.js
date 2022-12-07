import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Checkbox} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const Announcement = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [science, setScience] = useState(false);

  return (
    <>
      <View style={styles.Maincont}>
        <View style={styles.Container}>
          <Text style={styles.lefttext}>TO :</Text>
          <TextInput placeholder="Enter Here" style={styles.textinput} />
        </View>
        <View style={styles.MidContainer}>
          <TouchableOpacity
            style={styles.sendbtn}
            onPress={() => navigation.navigate('Compose_Announcement')}>
            <Text style={styles.btntxt}>Next</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.SecondaryCont}>
          <Text style={styles.Secondarytext}>Classes</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{padding: 10}}>
            <TouchableOpacity
              style={styles.cont}
              onPress={() => {
                setChecked(!checked);
              }}>
              <View style={styles.insideCont}>
                <View style={styles.rounded}>
                  <Entypo name="open-book" size={27} color="#1c8bde" />
                </View>
                <View>
                  <Text style={styles.Text}>Maths</Text>
                </View>
              </View>

              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Announcement;

const styles = StyleSheet.create({
  Maincont: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#e5e5e5',
  },
  lefttext: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  textinput: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    // padding:,
    // borderWidth: 1,
    // borderColor: '#c2c2c2',
    width: '85%',
    borderRadius: 5,
  },
  MidContainer: {
    padding: 10,
    // height: '100%',
    paddingBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#c2c2c2',
  },
  sendbtn: {
    borderWidth: 1,
    borderColor: 'green',
    width: '30%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btntxt: {
    fontSize: 18,
    fontWeight: '400',
    color: 'green',
  },
  SecondaryCont: {
    padding: 20,
  },
  Secondarytext: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    paddingBottom: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: '#c2c2c2',
  },
  insideCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rounded: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 18,
    color: '#3f3f3f',
    fontWeight: '500',
    marginLeft: 15,
  },
  cont: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c2c2c2',
  },
});
