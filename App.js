import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, } from 'react-native';


export default function App() {
  return (
    
    <View style={styles.container}>
       <MapView style={styles.map} />

      <Text style={styles.text1}>Good Morning </Text>
      <Text style={styles.text2} >Name</Text>

      <View style={styles.line}>
          <Text style={styles.date}>15 February 2022   </Text>
          <View style={styles.verticleLine}></View>
          <Text style={styles.date}> 09:00 AM</Text>
        </View>
        <View style={styles.attend}>
          <Text style={styles.arrive}>09:00 AM  </Text>
          <View style={styles.verticleLine2}></View>
          <Text style={styles.arrive}> 05:00 PM  </Text>
        </View>

        <View style={styles.attend2}>
          <Text style={styles.leave}>Arrive </Text>
          <Text style={styles.leave}> Leave </Text>
        </View>
        
       
      <StatusBar style="auto" /> 
    </View> 
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  // button:{
  //   fontWeight:"400",
  //   marginTop:90,
  // },
  map: {
    width: Dimensions.get('window').width,
    height: 500,
    marginTop:-300,
    marginBottom:20,
    
  },
  text1: {
    fontWeight:'500',
    fontSize:20,
    alignItems: 'center',
    marginBottom:5
  },
  text2:{
    fontWeight:'600',
    fontSize:20,
  },
  line: {
    marginTop:15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
    marginBottom:30,
  },
  date: {
    fontSize: 15,
    alignItems: 'center',
   
  },
  verticleLine:{
    height: '80%',
    width: 1,
    marginLeft:5,
    marginRight:10,
    backgroundColor: '#909090',
  },


  attend: {
    paddingTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
   marginBottom:-20,
  },
  arrive: {
    fontSize: 20,
    alignItems: 'center',
    fontWeight:"500",
  },
  verticleLine2:{
    marginTop:30,
    height: '170%',
    width: 1,
    marginLeft:5,
    marginRight:10,
    backgroundColor: '#909090',
  },

  leave:{
    fontSize: 20,
    alignItems: 'center',
fontWeight:"300",
    marginTop:15,
  },
  attend2:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  
  }

});
