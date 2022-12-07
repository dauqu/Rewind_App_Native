import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Avatar,
  Text,
  Caption,
  Drawer,
  Paragraph,
  Title,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawercontent = props => {
  const [active, setActive] = useState(false);
  const [activeClass, setActiveClass] = useState(false);
  return (
    <View style={{padding: 10}}>
      <View style={styles.TopHead}>
        <View style={styles.lefthead}>
          <Drawer.Section style={styles.drawerSection}>
            <Text style={styles.topText}>User name</Text>
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons name="md-home" size={20} color={color} />
              )}
              label="home"
              onPress={() => {
                props.navigation.navigate('Conversation');
              }}></DrawerItem>
          </Drawer.Section>
        </View>
        <View style={styles.righthead}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <AntDesign name="setting" size={20} color={color} />
              )}
              label="Account Settings"
              onPress={() => {
                props.navigation.navigate('Accountsettings');
              }}
            />
          </Drawer.Section>
        </View>
      </View>
      <View style={styles.itemscont}>
        <Drawer.Section>
          <View style={styles.linkContent}>
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome name="edit" size={22} color="black" />
              )}
              label="profile"
              style={styles.drawerItem}
            />
            <TouchableOpacity
              onPress={() => setActive(!active)}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.drawerstyle}>New Message </Text>
              <AntDesign name="caretdown" size={12} color="black" />
            </TouchableOpacity>
          </View>
          {active ? (
            <View style={styles.activeView}>
              <TouchableOpacity
                style={styles.newBtn}
                onPress={() => props.navigation.navigate('Individual-Message')}>
                <AntDesign name="message1" size={15} color="black" />
                <Text style={styles.newbtn}>Individual message</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.newBtn}
                onPress={() => props.navigation.navigate('Groupconversation')}>
                <MaterialCommunityIcons
                  name="account-group"
                  size={15}
                  color="black"
                />
                <Text style={styles.newbtn}>Group Conversation</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.newBtn}
                onPress={() => props.navigation.navigate('Announcement')}>
                <AntDesign name="notification" size={15} color="black" />
                <Text style={styles.newbtn}>Announcement</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={styles.linkContent}>
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons name="add-circle-outline" size={24} color="black" />
              )}
              label="addclass"
              style={styles.drawerItem}
            />
            <TouchableOpacity
              onPress={() => setActiveClass(!activeClass)}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.drawerstyle}>Add Class</Text>
              <AntDesign
                name="caretdown"
                size={12}
                color="black"
                style={{marginLeft: 40}}
              />
            </TouchableOpacity>
          </View>
          {activeClass ? (
            <View style={styles.activeView}>
              <TouchableOpacity
                style={styles.newBtn}
                onPress={() => 
                  props.navigation.navigate('Create_Class')}>
                <AntDesign name="pluscircleo" size={15} color="black" />
                <Text style={styles.newbtn}>Create new class</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.newBtn}
                onPress={() => 
                  props.navigation.navigate('Join_Class')}>
                <AntDesign name="arrowright" size={15} color="black" />
                <Text style={styles.newbtn}>Join existing class</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={styles.infoHead}>
            <Text style={styles.infoText}>Class Owned</Text>
          </View>
          <View style={styles.linkContent}>
            <View style={styles.roundedBG}>
              <DrawerItem
                style={styles.drawerItem}
                icon={({color, size}) => (
                  <FontAwesome
                    name="book"
                    size={20}
                    color="black"
                    style={{alignSelf: 'center', textAlign: 'center'}}
                  />
                )}
                label="addclass"
                onPress={() => {
                  props.navigation.navigate('profile');
                }}
              />
            </View>

            <TouchableRipple
              onPress={() => props.navigation.navigate('Real_Chat')}>
              <Text style={styles.drawerstyletext}>Maths</Text>
            </TouchableRipple>
          </View>
          <View style={styles.infoHead}>
            <Text style={styles.infoText}>Class Joined</Text>
          </View>
          <View style={styles.linkContent}>
            <View style={styles.roundedBG}>
              <DrawerItem
                style={styles.drawerItem}
                icon={({color, size}) => (
                  <FontAwesome
                    name="book"
                    size={20}
                    color="black"
                    style={{alignSelf: 'center', textAlign: 'center'}}
                  />
                )}
                label="addclass"
                onPress={() => {
                  props.navigation.navigate('profile');
                }}
              />
            </View>

            <TouchableRipple
              onPress={() => props.navigation.navigate('Conversation')}>
              <Text style={styles.drawerstyletext}>All Conversation</Text>
            </TouchableRipple>
          </View>
        </Drawer.Section>
      </View>
    </View>
  );
};

export default Drawercontent;

const styles = StyleSheet.create({
  TopHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  topText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#646464',
  },
  lefthead: {
    width: '70%',
  },
  righthead: {
    width: '10%',
    alignItems: 'center',
  },
  drawerSection: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  drawerItem: {
    width: 40,
  },
  drawerstyle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#646464',
  },
  drawerstyletext: {
    fontSize: 19,
    fontWeight: '600',
    color: '#646464',
    marginLeft: 10,
  },
  linkContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoHead: {
    padding: 10,
    marginTop: 40,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#312f2f',
  },
  roundedBG: {
    backgroundColor: '#98e6a9',
    borderRadius: 50,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  activeView: {
    padding: 10,
    alignItems: 'flex-start',
    marginLeft: 35,
  },
  newBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  newbtn: {
    fontSize: 15,
    fontWeight: '600',
    color: '#646464',
    marginLeft: 10,
    textAlign: 'left',
  },
});
