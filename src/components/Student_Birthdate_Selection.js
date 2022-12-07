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
const cake = require('../assets/images/cake_img.png');
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
          <View>
            <Image source={cake} style={styles.cake} />
          </View>
          <View style={styles.NameCont}>
            <Text style={styles.nameHead}>Name</Text>
            <TextInput placeholder="Enter Name" style={styles.txtinput} />
          </View>
          <View style={styles.NameCont}>
            <Text style={styles.nameHead}>Age</Text>
            <TextInput placeholder="Enter Age" style={styles.txtinput} />
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
    // backgroundColor: '#f6f6f6',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
  },
  NameCont: {
    padding: 20,
  },
  nameHead: {
    fontSize: 20,
    fontWeight: 'bold',
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
