import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Checkbox} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
const GroupConversation = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.MainConatiner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.text}>TO:</Text>
          <TextInput style={styles.input} placeholder="Select " />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Msg:</Text>
          <TextInput style={styles.input} placeholder="Enter message here " />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.sendbutton}>
            <Text style={styles.googleText}> Send</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.midCont}>
          <View>
            <Text style={styles.midtxt}>Subject</Text>
          </View>
          <View style={styles.emptyview}></View>
        </View>
        <TouchableOpacity>
          <View style={styles.infoContainer}>
            <View style={styles.leftInfoCont}>
              <View>
                <View style={styles.roundeddivtwothree}>
                  <Entypo name="book" size={27} color="red" />
                </View>
              </View>
              <View style={styles.rightview}>
                <Text style={styles.mainText}>Math's</Text>
              </View>
            </View>
            <View style={styles.rightinfoCont}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.midCont}>
          <View>
            <Text style={styles.midtxt}>Other's</Text>
          </View>
          <View style={styles.emptyview}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GroupConversation;

const styles = StyleSheet.create({
  MainConatiner: {
    backgroundColor: '#fff',
    height: '100%',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    width: '15%',
    color: '#646464',
  },
  input: {
    fontSize: 18,
    fontWeight: '600',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    borderRadius: 5,
    borderColor: '#c2c2c2',
  },
  midCont: {
    padding: 10,
    marginTop: 10,
  },
  midtxt: {
    fontSize: 18,
    fontWeight: '600',
    color: '#646464',
  },
  emptyview: {
    height: 0.8,
    backgroundColor: '#646464',
    marginTop: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  leftInfoCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightinfoCont: {},
  roundeddiv: {
    backgroundColor: '#3aeb61',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundeddivtwo: {
    backgroundColor: '#f77',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundeddivtwothree: {
    backgroundColor: '#d9d9d9',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightview: {
    marginLeft: 15,
  },
  mainText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#3f3f3f',
  },
  btncont: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  btntxt: {
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnContainer: {
    padding: 40,
    marginTop: 10,
    marginBottom: 60,
  },
  sendbutton: {
    borderWidth: 1,
    borderColor: 'green',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignSelf: 'center',
  },
  googlelogo: {
    width: 20,
    height: 20,
  },
  googleText: {
    fontSize: 17,
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    color: 'green',
    fontWeight: '500',
  },
});
