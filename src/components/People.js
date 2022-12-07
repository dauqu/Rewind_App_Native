import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MenuProvider} from 'react-native-popup-menu';

const People = ({navigation}) => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainCont}>
          <View style={styles.headCont}>
            <Text style={styles.heading}>Ways to add people</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.Container}>
              <View style={styles.infoContainer}>
                <View>
                  <View style={styles.roundeddiv}>
                    <AntDesign name="adduser" size={27} />
                  </View>
                </View>
                <View style={styles.rightview}>
                  <Text style={styles.mainText}>Add People</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Container}>
              <View style={styles.infoContainer}>
                <View>
                  <View style={styles.roundeddivtwo}>
                    <Entypo name="link" size={27} />
                  </View>
                </View>
                <View style={styles.rightview}>
                  <Text style={styles.mainText}>Share a join link</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.midContainer}>
            <View>
              <Text style={styles.midName}>First name</Text>
            </View>
            <View style={styles.leftmidcont}>
              <AntDesign name="user" size={15} color="black" />
              <Text style={styles.midName}>1</Text>
            </View>
          </View>
          {/* <View style={styles.Container}>
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.roundeddivtwothree}>
                  <FontAwesome name="user" size={27} />
                </View>
              </View>
              <View style={styles.rightview}>
                <Text style={styles.mainText}>Username</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.roundeddivtwothree}>
                  <FontAwesome name="user" size={27} />
                </View>
              </View>
              <View style={styles.rightview}>
                <Text style={styles.mainText}>Username</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.roundeddivtwothree}>
                  <FontAwesome name="user" size={27} />
                </View>
              </View>
              <View style={styles.rightview}>
                <Text style={styles.mainText}>Username</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.roundeddivtwothree}>
                  <FontAwesome name="user" size={27} />
                </View>
              </View>
              <View style={styles.rightview}>
                <Text style={styles.mainText}>Username</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.roundeddivtwothree}>
                  <FontAwesome name="user" size={27} />
                </View>
              </View>
              <View style={styles.rightview}>
                <Text style={styles.mainText}>Username</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.roundeddivtwothree}>
                  <FontAwesome name="user" size={27} />
                </View>
              </View>
              <View style={styles.rightview}>
                <Text style={styles.mainText}>Username</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.roundeddivtwothree}>
                  <FontAwesome name="user" size={27} />
                </View>
              </View>
              <View style={styles.rightview}>
                <Text style={styles.mainText}>Username</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.roundeddivtwothree}>
                  <FontAwesome name="user" size={27} />
                </View>
              </View>
              <View style={styles.rightview}>
                <Text style={styles.mainText}>Username</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.roundeddivtwothree}>
                  <FontAwesome name="user" size={27} />
                </View>
              </View>
              <View style={styles.rightview}>
                <Text style={styles.mainText}>Username</Text>
              </View>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </>
  );
};

export default People;

const styles = StyleSheet.create({
  mainCont: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  headCont: {
    padding: 10,
    borderBottomWidth: 0.2,
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
  midContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 0.2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftmidcont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  midName: {
    fontSize: 18,
    color: '#3f3f3f',
    fontWeight: '500',
  },
});
