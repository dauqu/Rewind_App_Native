import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

const Chatting = () => {
  // const [currentDate, setCurrentDate] = useState('');

  // useEffect(() => {
  //   var date = new Date().getDate(); //Current Date
  //   var month = new Date().getMonth() + 1; //Current Month
  //   var year = new Date().getFullYear(); //Current Year

  //   setCurrentDate(date + '/' + month + '/' + year + ' ');
  // }, []);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={styles.MainCont}>
      <View style={styles.Cont}>
        <Text style={styles.heading}>Welcome !</Text>
        <Text style={styles.subheading}>
          This is the beginning of your conversation
        </Text>
      </View>
      {/* <View style={styles.DateContainer}>
        {<Text style={styles.time}>{currentDate}</Text>}
      </View> */}
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  MainCont: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    height: '100%',
  },

  Cont: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  subheading: {
    fontSize: 15,
    color: '#3c3c3c',
  },
  DateContainer: {
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  time: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3c3c3c',
    letterSpacing: 7,
  },
});
