import React,{useState} from 'react';
import { View, Vibration, Text} from 'react-native';
import styles from './styles';
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import Button4 from './Button4';




export default function App() {

const [background1, setBackground1] = useState("red");
const [background2, setBackground2] = useState("red");
const [background3, setBackground3] = useState("red");
const [background4, setBackground4] = useState("red");

const selected = "red";


  const toggle1=(b)=>{
    if(background1 != selected)
    {
    setBackground1(selected);
    }
    else{
      setBackground1(b);
    }
    Vibration.vibrate()
  
  }
  const toggle2=(b)=>{
    if(background2 != selected)
    {
    setBackground2(selected);
    }
    else{
      setBackground2(b);
    }
    Vibration.vibrate()
  
  }
  const toggle3=(b)=>{
    if(background3 != selected)
    {
    setBackground3(selected);
    }
    else{
      setBackground3(b);
    }
    Vibration.vibrate()
  
  }
  const toggle4=(b)=>{
    if(background4 != selected)
    {
    setBackground4(selected);
    }
    else{
      setBackground4(b);
    }
    Vibration.vibrate()
  
  }


  return (
    
    
    <View style={styles.container}>
      <View style={styles.container1}>
       
       <Button1 name="Button1" click={() => toggle1("yellow")}/>
       <Button2 name="Button2" click={() =>toggle2("green")}/>
       <Button3 name="Button3" click={() =>toggle3("blue")}/>
       <Button4 name="Button4" click={() =>toggle4("orange")}/>
      
     </View> 
     <View style={styles.container2}>
     
     <View  style={{
        backgroundColor: background1,
        padding:15,
        alignItems:"center",
        width:"80%",
        alignSelf:"center",
        borderWidth:2,
        borderColor:"green",
        marginBottom:80,
        marginTop:40,
        height: 57 }}>
          <Text style={styles.boldText}>Box 1</Text>
            </View>
        

<View   style={{ 
        backgroundColor: background2,
        padding:15,
        alignItems:"center",
        width:"80%",
        alignSelf:"center",
        borderWidth:2,
        borderColor:"green",
        marginBottom:80,
        marginTop:40,
        height: 57 }}>
        <Text style={styles.boldText}>Box 2</Text>
          </View>
<View style={{ 
        backgroundColor: background3,
        padding:15,
        alignItems:"center",
        width:"80%",
        alignSelf:"center",
        borderWidth:2,
        borderColor:"green",
        marginBottom:80,
        marginTop:40,
        height: 57 }}>
        <Text style={styles.boldText}>Box 3</Text>
          </View>
<View style={{ 
        backgroundColor: background4,
        padding:15,
        alignItems:"center",
        width:"80%",
        alignSelf:"center",
        borderWidth:2,
        borderColor:"green",
        marginBottom:80,
        marginTop:40,
        height: 57 }}>
        <Text style={styles.boldText}>Box 4</Text>
          </View>
     </View>
    </View>

  );
}


