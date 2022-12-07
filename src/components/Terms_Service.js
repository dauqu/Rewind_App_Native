import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Terms_Service = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.Maincontainer}>
      <TouchableOpacity style={styles.Container}>
        <View>
          <Text style={styles.txt}>Terms of services</Text>
        </View>
        <View>
          <AntDesign name="right" size={22} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Container}>
        <View>
          <Text style={styles.txt}>Privacy Policy</Text>
        </View>
        <View>
          <AntDesign name="right" size={22} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Container}>
        <View>
          <Text style={styles.txt}>Legal</Text>
        </View>
        <View>
          <AntDesign name="right" size={22} />
        </View>
      </TouchableOpacity>
      <View style={styles.midcont}>
        <Text style={styles.Midtext}>
          By tapping "Agree and continue", you agree to the WhatsApp Terms of
          Service and Privacy Policy.
        </Text>
      </View>
      <View style={styles.Lowcont}>
        <Text style={styles.lowertxt}>I accept this term</Text>
        <View>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
};

export default Terms_Service;

const styles = StyleSheet.create({
  Maincontainer:{
    height:'100%',
    backgroundColor:'#fff',
    
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  txt: {
    fontSize: 20,
    color: '#3f3f3f',
    fontWeight: '500',
  },
  midcont: {
    padding: 20,
    marginTop: 50,
  },
  Midtext: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
  Lowcont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    padding: 20,
  },
  lowertxt: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
});
