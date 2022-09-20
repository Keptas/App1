import React,{useState} from 'react';
import { View, Vibration, Text, ProgressViewIOSComponent} from 'react-native';
import styles from './styles';
import Button1 from './Button1';





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
       
       <Button1 name="Button1" color="yellow" click={() => toggle("yellow",background1,setBackground1)}/>
       <Button1 name="Button2" color="green" click={() =>toggle("green",background2,setBackground2)}/>
       <Button1 name="Button3" color="blue" click={() =>toggle("blue",background3,setBackground3)}/>
       <Button1 name="Button4" color="orange" click={() =>toggle("orange",background4,setBackground4)}/>
      
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
