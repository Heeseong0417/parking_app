import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import * as React from 'react';
import { StyleSheet, Text, View ,StatusBar ,Button,ScrollView, Alert,TouchableOpacity,Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { Header , ListItem, Avatar,Card,LinearProgress  } from '@rneui/base';
import {firebase_db} from '../firebase';
import { useEffect, useState } from 'react';
import { doc,collection, addDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore/lite";
import LineGraph from '@chartiful/react-native-line-graph';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';

import Login from './auth/Login'
import HomeStack from "./tab_menu/HomeStack"
import CarStack from "./tab_menu/CarStack";
import AccountStack from "./tab_menu/AccountStack";
import TrafficStack from "./tab_menu/TrafficStack";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function makeIconRender(name,color) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}

function MyButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.jumpTo("Account")}>
      <MaterialCommunityIcons name={"account"} color={"white"} size={30} />
    </TouchableOpacity>
  );
}





export default function Main(){
  const [state, setstate] = useState("")
const [email, setemail] = useState("")
const [key, setkey] = useState(0)

const state_function =(state)=>{
console.log("state_function 실행 ~ ")
  setstate(data => data = state)
  console.log("state 상태 : "+state)
}

  const getitem =  () => {
    try {
       setstate( data => data = AsyncStorage.getItem('uid'))
       setemail(data => data = AsyncStorage.getItem('email'))
    } catch (e) {
      // 오류 예외 처리
    }
  }


const bootstrapAsync = async () => {
  let userToken;
  let userEmail;

  try {
    userToken = await AsyncStorage.getItem('uid')
    userEmail = await AsyncStorage.getItem('email')
    setstate(data => data = userToken)
    setemail(data => data = userEmail)
  } catch (e) {
    console.log(e);
    Alert.alert(e);
    // 토큰 가져오기 실패 FIXME: alert해주기
  }

  // FIXME: 토큰 유효한지 확인해주기

  // 스크린 언마운트됨, 버려짐
 // dispatch({ type: 'RESTORE_TOKEN', token: userToken })
}

useEffect(() => {
  // Storage에서 토큰 가져옴, 다른 화면으로 네비게이트
  const bootstrapAsync = async () => {
    let userToken;
    let userEmail;

    try {
      userToken = await AsyncStorage.getItem('uid')
      userEmail = await AsyncStorage.getItem('email')
      if(typeof userToken !== 'undefined' || typeof userToken !== 'null'){

        setstate(data => data = userToken)
      setemail(data => data = userEmail) 
      }
      
    } catch (e) {
      console.log(e);
      Alert.alert(e);
      // 토큰 가져오기 실패 FIXME: alert해주기
    }

    // FIXME: 토큰 유효한지 확인해주기

    // 스크린 언마운트됨, 버려짐
   // dispatch({ type: 'RESTORE_TOKEN', token: userToken })
  }

  bootstrapAsync()
return ()=>{
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('uid');
      await AsyncStorage.removeItem('email');
    } catch (e) {
      console.error(e.message);
    }
  };
  removeData()
}
  
}, [key])
  
    return (

      <NavigationContainer>
        {state === undefined ||state === null || state ===""? (
          <Login state={state_function}></Login>


        ):(
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#308FFF",
            },
            headerTintColor: "white",
            headerBackTitle: "",
            tabBarStyle: [{ backgroundColor: "#308FFF",color:"white"}],
          }}
          tabBarOptions={{
            activeTintColor: 'blue', // 탭 활성
            inactiveTintColor: 'white', // 탭 비활성
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: makeIconRender("home", "#FFFFFF"),
              headerRight: () => (<MyButton></MyButton>
              ),
            }}
          ></Tab.Screen>
           
          <Tab.Screen
            name="Traffic"
            component={TrafficStack}
            options={{ tabBarIcon: makeIconRender("poll", "#FFFFFF") }}
          ></Tab.Screen>
       
          <Tab.Screen
            name="Safety"
            component={SafetyStack}
            options={{ tabBarIcon: makeIconRender("shield-car", "#FFFFFF") }}
          >
            
          </Tab.Screen>
          <Tab.Screen
            name="CarLog"
            component={CarStack}
            options={{
              tabBarIcon: makeIconRender("car-arrow-right", "#FFFFFF"),
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="Account"
            
            options={{
              tabBarIcon: makeIconRender("account", "#FFFFFF"),
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('CarLog')}>
                  <MaterialCommunityIcons name={"account-cog"} color={"white"} size={30} />
                </TouchableOpacity>
              ),
            }}
          >

{(props) => <AccountStack state_function={state_function} />}
          </Tab.Screen>
        </Tab.Navigator>)}
      </NavigationContainer>
    )
}




function SafetyStack() {
    return (
<View><Text>Hello</Text></View>
    );
  }

