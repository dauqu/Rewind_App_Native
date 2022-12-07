import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const Individual_Message = ({navigation}) => {
  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.midCont}>
          <View>
            <Text style={styles.midtxt}>User's</Text>
          </View>
          <View style={styles.emptyview}></View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Real_Chat')} >
          <View style={styles.infoContainer}>
            <View>
              <View style={styles.roundeddivtwothree}>
                <FontAwesome name="user" size={27} color="green"  />
              </View>
            </View>
            <View style={styles.rightview}>
              <Text style={styles.mainText}>Username</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.midCont}>
          <View>
            <Text style={styles.midtxt}>Other's Classes</Text>
          </View>
          <View style={styles.emptyview}></View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Real_Chat')}>
          <View style={styles.infoContainer}>
            <View>
              <View style={styles.roundeddivtwothree}>
                <Entypo name="book" size={27} color="red" />
              </View>
            </View>
            <View style={styles.rightview}>
              <Text style={styles.mainText}>Math's</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Real_Chat')}>
          <View style={styles.infoContainer}>
            <View>
              <View style={styles.roundeddivtwothree}>
                <Entypo name="book" size={27} color="red" />
              </View>
            </View>
            <View style={styles.rightview}>
              <Text style={styles.mainText}>Science</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Individual_Message;

const styles = StyleSheet.create({
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
    borderWidth: 0.4,
    width: '85%',
    padding: 10,
    borderRadius: 5,
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
    height: 0.7,
    backgroundColor: '#c2c2c2',
    marginTop: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
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
    backgroundColor: '#c1c4c7',
    width: '90%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
