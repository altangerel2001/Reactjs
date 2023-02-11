import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, SafeAreaView, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={{marginTop: 55}}>

      <Pressable onPress={()=>alert('та нийтлэл бичих үүу?')} onLongPress={()=>alert('та өөрт таалагдсан нийтлэлээ бичихдээ нийтлэл хэсэгт нэг удаа дарна уу')}>
      <Text style={{textAlignVertical: "center",textAlign: "center",}} >Та өөрт таалагдсан зүйлээ нийтлээрэй</Text>
      </Pressable>

      <TextInput 
        style={styles.input}
        />

      <Button
      onPress={()=>alert('та нийтлэл бичих үү')}
      title="нийтлэл"
      color="black"
      style={{width:30}}
      />
      
      <Pressable 
      onPress={()=>alert("та зурган дээрээ удаан дарж зургаа солино уу?")} 
      onLongPress={()=>alert("та зургаа солих уу?")}>
      <Image source={require("./assets/as.jpg")} style={{height:250, width:'100%'}}></Image>
      </Pressable>
      
      <Button
      onPress={()=>alert('та товчийг дарсан байна!')}
      title="BUTTON"
      color="black"
      style={{width:300}}

      />
    

      <Image source={require("./assets/e84ac7e579f3bca5def4193d2c00398a.jpg")} style={{height:1000, width:400}}></Image>
      
    

      <StatusBar style="auto" />
    </View>
     </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent:'center',

  },
  text: {
    fontSize: 42,
  },
  input:{
    height:40,
    margin:25,
    borderWidth:1,
    padding:10,
    borderColor:'red',
  },
});