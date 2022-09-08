
import { StyleSheet ,ScrollView, Text,TextInput,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';
import EditScreenInfo from '../components/EditScreenInfo';
import {  View } from '../components/Themed';
import { NavigationContainer } from "@react-navigation/native";
import { ListItem, Avatar,Button  } from '@rneui/themed'
import { doc,collection, addDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore/lite";
import { VictoryPie,VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import  firebase from 'firebase/firestore';
import {firebase_db} from '../firebase';
import { useEffect, useState } from 'react';
import {} from'../navigation/index'
import LI from './list_items/List_item'

export default function TabTwoScreen({navigation}:any) {
 type dataProps =
 { car_info?: { 
  car_type: string; is_resident: string; regi_num: string; visit_purpose: string; }; 
  ta_history?: { is_facility_damage: string; is_people_damage: string; num_of_ta: string; }; 
  time_info?: { departure_time: string; entrace_time: string; }; name?: any; subtitle?: any; avatar_url?: any; }

  const pie =[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]
  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
  ];
  const Stack = createStackNavigator();
 
  const [addName, setAddName] = useState('');
  const [addAge, setAddAge] = useState('');
  const [value_data, setvalue_data] = useState([
    {
      car_info: {
        car_type: "스타리아",
        is_resident: "N",
        regi_num: "85나2353",
        visit_purpose: "방문",
      },
      ta_history: {
        is_facility_damage: "0",
        is_people_damage: "0",
        num_of_ta: "0",
      },
      time_info: {
        departure_time: "2022-08-02-19:34",
        entrace_time: "2022-08-22T15:12:00.000Z",
      },
    },
  ]);
  const addCollection =collection(firebase_db,'parking_system');
 const list_click=(e:dataProps )=>{
    
    //alert("이름 : "+e.car_info?.car_type+" 서브 타이틀 : "+e.+" 사진 경로 : "+e.avatar_url)
  }

  
  const addText = async () => {
    try {
      alert("나이 : "+addAge+"이름 : "+addName)
      await addDoc(addCollection,{
        risk: addName,
        trafic: addAge
      });
      setAddName('');
      setAddAge('');
      console.log('Create Complete!');
    } catch (error:any) {
      alert(error.message);
    }
  };
    
  const defalut_data =async () => {
    
    const q = await query(
      addCollection,
      //where("risk", "!=", "dd"),
      //orderBy("risk", "desc"),
    
      //limit(1)
    );
    const getdata = await getDocs(q);
    const resultdata = getdata.docs.map(doc => ({ ...doc.data() }));
   
    setvalue_data(data => data =JSON.parse(JSON.stringify(resultdata)))
    //console.log(resultdata);
   // alert(resultdata)
  }
  useEffect(() => {
    defalut_data()
   
    return () => {
     
    }
  }, [])
 
  const Home=(navigation:any)=> {
    return (
      <>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Listitems')}
      />
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
    </>);
  }
  return (

<>    
    <ScrollView >
    <View>
      <Text>{JSON.stringify(value_data)}</Text>
      {/* ... */}
      <TextInput
        placeholder="name"
        value={addName}
        onChange={e => setAddName(e.nativeEvent.text) 
        
        }
      />
      <TextInput
        placeholder="age"
        value={addAge}
        onChange={e => setAddAge(e.nativeEvent.text)}
      />
      <Button title="Add Text" onPress={addText} />
      <Button title="디폴트" onPress={defalut_data} />
    </View>
    <View>

      <VictoryChart width={300} height={200} theme={VictoryTheme.material}>
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
          style={{data: {fill: '#c43a31'}}}
        />
      </VictoryChart>
      <VictoryPie 
      colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
      data={pie}
      
      padAngle={5}
      innerRadius={100}
     
      />

     
          </View>

  <Button title={"gdgd"}></Button>

  {value_data&&value_data.length !== 0 ? (<>
        {
        value_data.map((l, i) => (
          <>
    
          <ListItem  key={i} bottomDivider onPress={() => {navigation.navigate("Listitems"),value_data[i]}

          }>
            <Avatar source={{uri: l.car_info.car_type}} />
            <ListItem.Content>
              <ListItem.Title>{l.car_info.car_type}</ListItem.Title>
              <ListItem.Subtitle>{l.car_info.regi_num}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem></>
        ))
      }</>):("")}
      
  <Stack.Navigator>
      <Stack.Screen name="Root" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={Home} options={{ title: 'Oops!' }} />
 </Stack.Navigator> 

</ScrollView>


     

                
      
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
