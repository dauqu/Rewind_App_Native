import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Body from './Body';
import Profile from './Profile';
import Drawercontent from './Drawercontent';
import Login from './Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './Signup';
import Options from './Options';
import Create_Teacher_Class from './Create_Teacher_Class';
import Join_Class from './Join_Class';
import Search_For_Class from './Search_For_Class';
import Account_settings from './Account_settings';
import GroupConversation from './GroupConversation';
import Individual_Message from './Individual_Message';
import Student_Birthdate_Selection from './Student_Birthdate_Selection';
import User_Setting_drawer from './User_Setting_drawer';
import Notification_Setting_Drawer from './Notification_Setting_Drawer';
import Help from './Help';
import Add_Phone_Number from './Add_Phone_Number';
import Add_email from './Add_email';
import Terms_Service from './Terms_Service';
import Chatting from './Chatting';
import Announcement from './Announcement';
import Compose_Announcement from './Compose_Announcement';
import Real_Chat from './Real_Chat';
import Create_Class_Login from './Create_Class_Login';
import Join_Exsit_Class_login from './Join_Exsit_Class_login';
const stack = createNativeStackNavigator();
const Drawerr = createDrawerNavigator();
const Drawer = () => {
  const [islogin, setIslogin] = useState(false);
  return (
    <NavigationContainer>
      {islogin ? (
        <Drawerr.Navigator
          initialRouteName="body"
          drawerContent={props => <Drawercontent {...props} />}>
          <Drawerr.Screen name="Conversation" component={Body} />
          <Drawerr.Screen name="profile" component={Profile} />

          <Drawerr.Screen name="Accountsettings" component={Account_settings} />
          <Drawerr.Screen
            name="Groupconversation"
            component={GroupConversation}
          />
          <Drawerr.Screen
            name="Individual-Message"
            component={Individual_Message}
          />
          <Drawerr.Screen
            name="User_Account_Settings"
            component={User_Setting_drawer}
          />
          <Drawerr.Screen
            name="Notifiaction_Settings"
            component={Notification_Setting_Drawer}
          />
          <Drawerr.Screen name="Help" component={Help} />
          <Drawerr.Screen name="Add_Number" component={Add_Phone_Number} />
          <Drawerr.Screen name="Add_Email" component={Add_email} />
          <Drawerr.Screen name="Terms_Conditions" component={Terms_Service} />
          <Drawerr.Screen name="Chatting" component={Chatting} />
          <Drawerr.Screen name="Announcement" component={Announcement} />
          <Drawerr.Screen
            name="Compose_Announcement"
            component={Compose_Announcement}
          />
          <Drawerr.Screen name="Real_Chat" component={Real_Chat} />
          <Drawerr.Screen name="Create_Class" component={Create_Class_Login} />
          <Drawerr.Screen
            name="Join_Class"
            component={Join_Exsit_Class_login}
          />
        </Drawerr.Navigator>
      ) : (
        <stack.Navigator
          initialRouteName="signup"
          screenOptions={{
            headerShown: false,
          }}>
          <stack.Screen name="login" component={Login} />
          <stack.Screen name="signup" component={Signup} />
          <stack.Screen name="options" component={Options} />
          <stack.Screen
            name="teachercreateclass"
            component={Create_Teacher_Class}
          />
          <stack.Screen name="joinclass" component={Join_Class} />
          <stack.Screen name="classSearch" component={Search_For_Class} />
          <stack.Screen
            name="Student_Info"
            component={Student_Birthdate_Selection}
          />
        </stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
