import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const cake = require('../assets/images/bgcake.png');
import DatePicker from 'react-native-neat-date-picker';

const Student_Birthdate_Selection = ({navigation}) => {
  const [showDatePickerSingle, setShowDatePickerSingle] = useState(false);
  const [showDatePickerRange, setShowDatePickerRange] = useState(false);

  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const openDatePickerSingle = () => setShowDatePickerSingle(true);
  const openDatePickerRange = () => setShowDatePickerRange(true);

  const onCancelSingle = () => {
    // You should close the modal in here
    setShowDatePickerSingle(false);
  };

  const onConfirmSingle = output => {
    // You should close the modal in here
    setShowDatePickerSingle(false);

    // The parameter 'output' is an object containing date and dateString (for single mode).
    // For range mode, the output contains startDate, startDateString, endDate, and EndDateString
    console.log(output);
    setDate(output.dateString);
  };

  return (
    <View style={styles.MainCont}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('options')}
            style={{paddingTop: 10}}>
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.imgCont}>
            <Image source={cake} style={styles.cake} />
          </View>
          <View style={styles.infocont}>
            <Text style={styles.infotext}>When is your birthday</Text>
            <Text style={styles.infotextlower}>
              No one else will see this information
            </Text>
          </View>
          <View style={styles.NameCont}>
            <Text style={styles.nameHead}>Name</Text>
            <TextInput placeholder="Enter Name" placeholderTextColor="#454545" style={styles.txtinput} />
          </View>

          <View style={styles.NameCont}>
            <View style={styles.CalendarCont}>
              <Text style={styles.nameHead}>D.O.B</Text>
              <View>
                <TouchableOpacity onPress={openDatePickerSingle}>
                  <AntDesign name="calendar" size={25} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.txtinput}>
              <Text style={styles.nameHead}>{date}</Text>
            </View>
          </View>
          <View style={styles.btnCont}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>
          </View>
          <DatePicker
            isVisible={showDatePickerSingle}
            mode={'single'}
            onCancel={onCancelSingle}
            onConfirm={onConfirmSingle}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Student_Birthdate_Selection;

const styles = StyleSheet.create({
  MainCont: {
    backgroundColor: '#fff',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
  },
  imgCont: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    height: 220,
  },
  cake: {
    width: 150,
    height: 150,
  },
  infocont: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  infotext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1,
  },
  infotextlower: {
    fontSize: 16,
    color: 'gray',
    letterSpacing: 1,
    paddingBottom: 10,
    fontWeight: 'bold',
    marginTop: 10,
  },
  NameCont: {
    padding: 20,
  },
  nameHead: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#454545',
  },
  CalendarCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtinput: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#c2c2c2',
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  btnCont: {
    alignItems: 'center',
    padding: 20,
  },
  btn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: 'green',
    width: '50%',
  },
  btntxt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});
