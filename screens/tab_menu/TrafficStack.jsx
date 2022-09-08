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


const TrafficStack =({navigation})=>{

  const configforLine = {
    startAtZero: false,
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      prefix: "",
      offset: 0,
    },
  };
  const configforBar = {
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      position: 'left',
      prefix: ''
    }
  };
  const styles = StyleSheet.create({
    chartforLine: {
      marginBottom: 30,
      padding: 0,
      paddingTop: 0,
      borderRadius: 20,
      width: 375,
      backgroundColor: "white",
    },
    chartforBar: {
      marginBottom: 30,
      padding: 0,
      paddingTop: 0,
      borderRadius: 20,
      backgroundColor: 'white',
      width: 350
    }
  });
  return (
    <ScrollView>
      <Card
        containerStyle={{
          marginTop: 15,
          borderRadius: 20,
          paddingLeft: 0,
        }}
      >
        <Card.Title /*style={{ textAlign: "left" }}*/>
          <Text>시간대별 통계</Text>
        </Card.Title>
        <LineGraph
          data={[10, 15, 7, 20, 14, 12, 10, 20]}
          width={375}
          height={300}
          isBezier
          hasShadow
          
          baseConfig={configforLine}
          style={styles.chartforLine}
          lineColor="skyblue"
          dotColor="skyblue"
        />
      </Card>
      <Card
        containerStyle={{
          marginTop: 15,
          borderRadius: 20,
          paddingLeft: 0,
        }}
      >
        <Card.Title /*style={{ textAlign: "left" }}*/>
          <Text>요일별 통계</Text>
        </Card.Title>
        <View>
          <VerticalBarGraph
            data={[20, 45, 28, 80, 99, 43, 50]}
            labels={["Mon","Tue","Wed","Thr","Fri","Sat","Sun"]}
            width={350}
            height={300}
            barRadius={5}
            barWidthPercentage={0.65}
            baseConfig={configforBar}
            style={styles.chartforBar}
            barColor="skyblue"
          />
        </View>
      </Card>
    </ScrollView>
  );
  // return(<View><Text>hi</Text></View>);
  }
export default TrafficStack;