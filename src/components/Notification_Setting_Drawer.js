import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';
import Modal from 'react-native-modal';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Notification_Setting_Drawer = ({navigation}) => {
  const [mute, setMute] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <MenuProvider>
      <View style={styles.MainOutercontainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.MainCont}>
            <Text style={styles.HeadText}>
              Set your notifications and preferences and manage this devicve on
              your account
            </Text>
          </View>
          <View style={styles.midview}>
            <Text style={styles.midtext}>Your notifications</Text>
            <View style={styles.emptyview}></View>
          </View>
          <View>
            <View style={styles.cont}>
              {mute ? (
                <TouchableOpacity
                  style={styles.rounded}
                  onPress={() => setMute(!mute)}>
                  <Ionicons
                    name="notifications-off"
                    size={27}
                    color="#1c8bde"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.rounded}
                  onPress={() => setMute(!mute)}>
                  <Ionicons
                    name="notifications-sharp"
                    size={27}
                    color="#1c8bde"
                  />
                </TouchableOpacity>
              )}
              <View style={styles.insideCont}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.Text}>User@gmail.com</Text>
                  <Text style={styles.Textlower}>App Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Entypo
                    name="dots-three-vertical"
                    size={20}
                    color="#1c8bde"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.ModalContainer}>
              <TouchableOpacity onPress={() => toggleModal()}>
                <Text style={styles.modalbtntext}>Add another email</Text>
              </TouchableOpacity>
              <Modal isVisible={isModalVisible}>
                <View style={styles.Modal}>
                  <View style={styles.ModalView}>
                    <View>
                      <Text style={styles.ModalHead}>Add New Device</Text>
                    </View>
                    <TouchableOpacity onPress={toggleModal}>
                      <Entypo
                        name="circle-with-cross"
                        size={27}
                        color="#1c8bde"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={styles.Iconcont}
                      onPress={() => navigation.navigate('Add_Number')}>
                      <View style={styles.rounded}>
                        <Ionicons
                          name="call-outline"
                          size={27}
                          color="#1c8bde"
                        />
                      </View>
                      <View>
                        <Text style={styles.Text}>Phone Number</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.Iconcont}
                      onPress={() => navigation.navigate('Add_Email')}>
                      <View style={styles.rounded}>
                        <Fontisto name="email" size={27} color="#1c8bde" />
                      </View>
                      <View>
                        <Text style={styles.Text}>Email</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </ScrollView>
      </View>
    </MenuProvider>
  );
};

export default Notification_Setting_Drawer;

const styles = StyleSheet.create({
  MainOutercontainer:{
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  MainCont: {
    padding: 20,
    marginBottom: 20,
  },
  HeadText: {
    fontSize: 20,
    // fontWeight : 'bold',
    color: '#3f3f3f',
    textAlign: 'justify',
  },
  midview: {
    padding: 20,
    paddingBottom: 10,
  },
  emptyview: {
    height: 1,
    backgroundColor: '#c2c2c2',
  },
  midtext: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 10,
  },

  Iconcont: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginLeft: 20,
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
  Textlower: {
    fontSize: 13,
    color: '#3f3f3f',
    marginLeft: 15,
    marginTop: 5,
  },
  cont: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  insideCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    width: '80%',
  },
  LowerCont: {
    padding: 20,
    marginTop: 20,
  },
  lowertext: {
    fontSize: 17,
    color: '#1c8bde',
  },
  ModalContainer: {
    marginTop: 20,
    padding: 20,
  },
  Modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    height: 250,
  },
  modalbtntext: {
    fontSize: 17,
    color: '#1c8bde',
    fontWeight: '500',
  },
  ModalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ModalHead: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c8bde',
  },
});
