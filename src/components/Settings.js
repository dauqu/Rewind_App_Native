import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <ScrollView>
        <View style={styles.maincont}>
          <View style={styles.rounded}>
            <Entypo name="laptop" size={27} color="white" />
          </View>
          <View style={styles.midCont}>
            <View>
              <Text style={styles.midtext}>Class name</Text>
              <TextInput placeholder="Maths" style={styles.input} />
            </View>
            <View style={styles.inputCont}>
              <Text style={styles.midtext}>Class code</Text>
              <TextInput placeholder=" @     Maths" style={styles.input} />
            </View>
            <View style={styles.infoCont}>
              <Text style={styles.toptext}>Require approval to join</Text>
              <Text style={styles.lowtext}>
                Student will get approval from submitted task or assignment to
                join the class and chat with other students.
              </Text>
            </View>
            <View style={styles.infoCont}>
              <View style={styles.Switchbtn}>
                <Text style={styles.toptext}>Require approval to join</Text>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <Text style={styles.lowtext}>
                Student will get approval from submitted task
              </Text>
            </View>
            <View style={styles.infoCont}>
              <View style={styles.btnCont}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btntxt}>Archive Class</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  maincont: {
    padding: 10,
  },
  rounded: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#44b508',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  midCont: {
    padding: 10,
    marginTop: 20,
  },
  midtext: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  input: {
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    fontSize: 18,
    padding: 10,
    borderColor: '#c4c4c4',
  },
  inputCont: {
    marginTop: 40,
  },
  infoCont: {
    marginTop: 40,
  },
  toptext: {
    fontSize: 22,
    fontWeight: '500',
    color: '#3f333f',
  },
  lowtext: {
    fontSize: 15,
    fontWeight: '500',
    color: 'gray',
    marginTop: 10,
  },
  btnCont: {
    padding: 10,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
  },
  btntxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  Switchbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
