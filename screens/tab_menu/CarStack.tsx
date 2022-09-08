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
import { doc,collection,collectionGroup, addDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore/lite";
import LineGraph from '@chartiful/react-native-line-graph';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { firebase_db } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";


const CarStack = (navigation: { navigate: (arg0: string) => void; })=>{


const [value_data, setvalue_data] = useState([
    {
      car_info: {
        car_type: "",
        is_resident: "",
        regi_num: "",
        visit_purpose: "",
      },
      ta_history: {
        is_facility_damage: "",
        is_people_damage: "",
        num_of_ta: "",
      },
      time_info: {
        departure_time: "",
        entrace_time: "",
      },
    },
  ]);
  const [carnum, setcarnum] = useState("")
  const addCollection =collection(firebase_db,'parking_system');
  
  const defalut_data =async () => {
      console.log(JSON.stringify(carnum))
    const q = await query(
    addCollection,
      where("car_info.regi_num", "==",carnum),
      //orderBy("risk", "desc"),
    
      //limit(1)
    );
    const getdata = await getDocs(q);
    const resultdata = getdata.docs.map(doc => ({ ...doc.data() }));
   
    setvalue_data(data => data =JSON.parse(JSON.stringify(resultdata)))
    //console.log(resultdata);
   // alert(resultdata)
  }
  const bootstrapAsync = async () => {
     
  
    try {
      let carnum_info = await AsyncStorage.getItem('carnum')+""
      setcarnum(data => data= carnum_info)
     // console.log(JSON.stringify(carnum_info))
    }catch(e){

    }
  }
  useEffect(() => {
   
    bootstrapAsync()
    defalut_data()
   
    return () => {
     
    }
  }, [])
    return (
  <ScrollView>
    <Text>{carnum}</Text>
  {value_data&&value_data.length !== 0 ? (<>
          {
          value_data.map((l, i) => (
            <>
      
            <ListItem  key={i} bottomDivider onPress={() => navigation.navigate("Listitems")}>
              <Avatar source={{uri: l.car_info.car_type}} />
              <ListItem.Content>
                <ListItem.Title>{l.car_info.car_type}</ListItem.Title>
                <ListItem.Subtitle>{l.car_info.regi_num}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem></>
          ))
        }</>):("")}
  </ScrollView>
    );
    }
  export default CarStack;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      textinfo:{
        margin:10, 
        textAlign: 'center',
        fontSize: 17,    
      },
    });
  