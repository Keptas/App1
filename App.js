import React,{useState} from 'react';
import { View, Vibration, Text, ProgressViewIOSComponent} from 'react-native';
import styles from './styles';
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import Button4 from './Button4';




export default function App(props) {

const [background1, setBackground1] = useState("red");
const [background2, setBackground2] = useState("red");
const [background3, setBackground3] = useState("red");
const [background4, setBackground4] = useState("red");

const selected = "red";


  const toggle=(b, back, set)=>{
    if(back != selected)
    {
    set(selected);
    }
    else{
      set(b);
    }
    Vibration.vibrate()
  
  }
  
  return (
    
    
    <View style={styles.container}>
      <View style={styles.container1}>
       
       <Button1 name="Button1" click={() => toggle("yellow",background1,setBackground1)}/>
       <Button2 name="Button2" click={() =>toggle("green",background2,setBackground2)}/>
       <Button3 name="Button3" click={() =>toggle("blue",background3,setBackground3)}/>
       <Button4 name="Button4" click={() =>toggle("orange",background4,setBackground4)}/>
      
     </View> 
     <View style={styles.container2}>
     
      <View  style={
        [styles.box,
          {backgroundColor: background1}] }>
          <Text style={styles.boldText}>Box 1</Text>
            </View>
      <View style={
        [styles.box,
          {backgroundColor: background2}]
        }>
        <Text style={styles.boldText}>Box 2</Text>
          </View>
      <View style={
        [styles.box,
          {backgroundColor: background3}] 
        }>
        <Text style={styles.boldText}>Box 3</Text>
          </View>
      <View style={
        [styles.box,
        {backgroundColor: background4}]
        }>
        <Text style={styles.boldText}>Box 4</Text>
          </View>
      </View>
    </View>
  );
}


/*padding:15,
        alignItems:"center",
        width:"80%",
        alignSelf:"center",
        borderWidth:2,
        borderColor:"green",
        marginBottom:80,
        marginTop:40,
        height: 57*/ 