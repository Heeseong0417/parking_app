import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import * as React from 'react';
import { StyleSheet, Text, View ,StatusBar ,Button,ScrollView, Alert,TouchableOpacity,Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { Header , ListItem, Avatar,Card,LinearProgress  } from '@rneui/base';

import { useEffect, useState } from 'react';
import { doc,collection, addDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore/lite";
import LineGraph from '@chartiful/react-native-line-graph';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { firebase_db } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles_account} from "../../style/Styles"
const AccountStack = ({navigation, state_function}:any)=>{



  const [state, setstate] = useState("")
  const [info, seteinfo] = useState({
uid:"",
name:"",
email:"",
carnum:""

  })
  const removeData = async () => {
    try {
      await AsyncStorage.clear();
  
      
      state_function("")
    } catch (e) {
      console.log(e+"");
    }
  };
  useEffect(() => {
    // Storage에서 토큰 가져옴, 다른 화면으로 네비게이트
    const bootstrapAsync = async () => {
     
  
      try {
  
        info.uid = await AsyncStorage.getItem('uid')+""
        info.name = await AsyncStorage.getItem('name')+""
        info.email = await AsyncStorage.getItem('email')+""
        info.carnum = await AsyncStorage.getItem('carnum')+""

        setstate(data => data = info.uid)
       
        seteinfo(data => data = info)

      } catch (e) {
        // 토큰 가져오기 실패 FIXME: alert해주기
      }
  
      // FIXME: 토큰 유효한지 확인해주기
  
      // 스크린 언마운트됨, 버려짐
   
    }
  
    bootstrapAsync()
  }, [])

return (
    <Card
      containerStyle={{ marginTop: 15, alignSelf: "auto", borderRadius: 20 }}
    >
      <Card.Title style={{ textAlign: "left" }}>회원정보</Card.Title>
      <Card.Divider />
      <View style={{ flexDirection: "row" }}>
        <Avatar
          source={{ uri: "https://randomuser.me/api/portraits/men/4.jpg" }}
          size={100}
          containerStyle={{marginRight:50}}/>
        <View>
          <Text>
            <MaterialCommunityIcons
              name={"account"}
              color={"fff"}
              size={30}
            />
          이름 : {info.name}
          </Text>
          <Text>
            <MaterialCommunityIcons name={"home"} color={"fff"} size={30} />
            이메일 : {info.email}
          </Text>
          <Text>
            <MaterialCommunityIcons name={"home"} color={"fff"} size={30} />
            차량 번호 : {info.carnum}
          </Text>
          <Text>
            <MaterialCommunityIcons name={"home"} color={"fff"} size={30} />
            토큰 : {state}
          </Text>
          <TouchableOpacity
        style= {styles_account.submitButton}
        onPress = {
         removeData
         
        }>
          <Text style = {styles_account.submitButtonText}>로그아웃</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
}

export default AccountStack;

function dispatch(arg0: { type: string; token: any; }) {
  throw new Error("Function not implemented.");
}
