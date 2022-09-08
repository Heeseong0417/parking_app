import {styles} from "../../style/Styles"
import * as React from 'react';
import { Text, View ,StatusBar ,Button,ScrollView, Alert,TouchableOpacity,Image } from 'react-native';

import {  MaterialCommunityIcons } from "@expo/vector-icons";

import { Header , ListItem, Avatar,Card,LinearProgress  } from '@rneui/base';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const HomeStack =({navigation}:any)=>{

const [state, setstate] = useState("")
const [name, setename] = useState("")
useEffect(() => {
  // Storage에서 토큰 가져옴, 다른 화면으로 네비게이트
  const bootstrapAsync = async () => {
    let userToken:any;
    let userName:any;

    try {
      userToken = await AsyncStorage.getItem('uid')
      userName = await AsyncStorage.getItem('name')
      setstate(data => data = userToken)
      setename(data => data = userName)
    } catch (e) {
      // 토큰 가져오기 실패 FIXME: alert해주기
    }

    // FIXME: 토큰 유효한지 확인해주기

    // 스크린 언마운트됨, 버려짐
    dispatch({ type: 'RESTORE_TOKEN', token: userToken })
  }

  bootstrapAsync()
}, [])
return(    

<ScrollView>
    <Card
    containerStyle={{
        marginTop: 15,
        alignSelf: "auto",
        borderRadius: 20,
      }}
    >
<Text> {name}님 안녕하세요 ! </Text>
    </Card>
    <Card
      containerStyle={{
        marginTop: 15,
        alignSelf: "auto",
        borderRadius: 20,
      }}
    >
      <Card.Title /*style={{ textAlign: "left" }}*/>
            
          <TouchableOpacity
          
   
            style={{ justifyContent: "flex-end"  ,
            alignItems: "center"}}
            onPress={() => navigation.navigate("Traffic")}
          >
             <Text>  실시간 교통 위험도<MaterialCommunityIcons
              name={"chevron-right"}
              color={"black"}
              size={20}
            /> </Text>
           
          </TouchableOpacity>
        
      </Card.Title>
      {/* <Card.Divider /> */}
      <LinearProgress style={{ marginVertical: 10 }} />
      <Text style={styles.fonts}>65%</Text>
    </Card>
    <Card
      containerStyle={{
        marginTop: 15,
        alignSelf: "auto",
        borderRadius: 20,
      }}
    >
      <Card.Title>
     
        <TouchableOpacity onPress={() => navigation.navigate('CarLog')}>
           <Text> 차량정보 <MaterialCommunityIcons
            name={"chevron-right"}
            color={"fff"}
            size={20}
          /></Text>
        </TouchableOpacity>
      </Card.Title>
      {/* <Card.Divider /> */}
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate("Login")}
      >
        <ListItem.Content>
          <ListItem.Title>{"주민차량"}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate("Listitems")}
      >
        <ListItem.Content>
          <ListItem.Title>{"택배차량"}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate("Listitems")}
      >
        <ListItem.Content>
          <ListItem.Title>{"통학차량"}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate("Listitems")}
      >
        <ListItem.Content>
          <ListItem.Title>{"택시차량"}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate("Listitems")}
      >
        <ListItem.Content>
          <ListItem.Title>{"배달차량"}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </Card>
  </ScrollView>
)
}
export default HomeStack;

function dispatch(arg0: { type: string; token: any; }) {
  throw new Error("Function not implemented.");
}
