import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
const Account_settings = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.body}>
            <View style={styles.bodycont}>
              <View style={styles.leftView}>
                <View style={styles.rounded}>
                  <MaterialCommunityIcons
                    name="card-account-details-outline"
                    size={27}
                    color="#1c8bde"
                  />
                </View>
              </View>
              <TouchableOpacity
                style={styles.infocont}
                onPress={() => navigation.navigate('User_Account_Settings')}>
                <View>
                  <View>
                    <Text style={styles.linkText}>Your account</Text>
                  </View>
                </View>
                <View style={styles.emptyview}></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodycont}>
              <View style={styles.leftView}>
                <View style={styles.rounded}>
                  <Ionicons
                    name="ios-notifications"
                    size={27}
                    color="#1c8bde"
                  />
                </View>
              </View>
              <TouchableOpacity
                style={styles.infocont}
                onPress={() => navigation.navigate('Notifiaction_Settings')}>
                <View>
                  <View>
                    <Text style={styles.linkText}>Your Notifications</Text>
                  </View>
                </View>
                <View style={styles.emptyview}></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodycont}>
              <View style={styles.leftView}>
                <View style={styles.rounded}>
                  <MaterialIcons
                    name="family-restroom"
                    size={27}
                    color="#1c8bde"
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.infocont}>
                <View>
                  <View>
                    <Text style={styles.linkText}>Family Members</Text>
                  </View>
                </View>
                <View style={styles.emptyview}></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodycont}>
              <View style={styles.leftView}>
                <View style={styles.rounded}>
                  <Fontisto name="locked" size={24} color="#1c8bde" />
                </View>
              </View>
              <TouchableOpacity style={styles.infocont} onPress={() => navigation.navigate('Terms_Conditions')}>
                <View>
                  <View>
                    <Text style={styles.linkText}>Data & Privacy</Text>
                  </View>
                </View>
                <View style={styles.emptyview}></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodycont}>
              <View style={styles.leftView}>
                <View style={styles.rounded}>
                  <SimpleLineIcons name="energy" size={30} color="#1c8bde" />
                </View>
              </View>
              <TouchableOpacity style={styles.infocont}>
                <View>
                  <View>
                    <Text style={styles.linkText}>App Integration</Text>
                  </View>
                </View>
                <View style={styles.emptyview}></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodycont}>
              <View style={styles.leftView}>
                <View style={styles.rounded}>
                  <Feather name="help-circle" size={27} color="#1c8bde" />
                </View>
              </View>
              <TouchableOpacity
                style={styles.infocont}
                onPress={() => navigation.navigate('Help')}>
                <View>
                  <View>
                    <Text style={styles.linkText}>Help</Text>
                  </View>
                </View>
                <View style={styles.emptyview}></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodycont}>
              <View style={styles.leftView}>
                <View style={styles.rounded}>
                  <Feather name="log-out" size={27} color="#1c8bde" />
                </View>
              </View>
              <TouchableOpacity style={styles.infocont}>
                <View>
                  <View>
                    <Text style={styles.linkText}>Logout</Text>
                  </View>
                </View>
                <View style={styles.emptyview}></View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account_settings;

const styles = StyleSheet.create({
  MainContainer:{
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 40,
  },
  iconcont: {
    width: 25,
  },
  txtcont: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 'auto',
  },
  headerText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#3f3f3f',
    fontWeight: '500',
  },
  body: {
    padding: 20,
  },
  bodycont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rounded: {
    backgroundColor: '#e6e6e6',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftView: {
    width: 80,
  },
  linkText: {
    fontSize: 19,
    fontWeight: '500',
    color: '#3f3f3f',
  },
  infocont: {
    width: '75%',
    padding: 5,
  },
  emptyview: {
    height: 20,
    borderBottomWidth: 0.8,
    width: '100%',
    borderBottomColor: '#bfbfbf',
  },
});
