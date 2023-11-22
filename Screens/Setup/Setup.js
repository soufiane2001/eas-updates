import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button, FlatList, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import {auth,db} from "../../Firebase/FirebaseConfig"
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithCredential } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { collection,addDoc, where, getDocs, query } from 'firebase/firestore';
import { Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';

import DateTimePicker from '@react-native-community/datetimepicker';
import ModalSelector from 'react-native-modal-selector';
import { Calendar } from 'react-native-calendars';









function Setup({navigation ,route}) {



    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nom, setNom] = React.useState('');  
   const [enabled, setEnabled] = useState(true);
    const [prenom, setPrenom] = React.useState('');
    const [ville, setVille] = React.useState('');
    const [city, setCity] = React.useState('');
    const [fonction, setFonction] = React.useState('');
    const [secteur, setSecteur] = React.useState('');
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [screenWidth, setScreenWidth] = React.useState(Dimensions.get('window').width);
    const [componentWidth, setComponentWidth] = useState(0);
    const [showAlert, setshowalert] = React.useState(false);
    const [Alertmsg, setalertmsg] = React.useState("");
    const [Calendrier, setCal] = React.useState("");
    const [datehelp, setDatehelp] = React.useState(null);
    const [complete, setComplet] = React.useState(0);
    const [bg, setBg] = React.useState("white");
    const [Color, setColor] = React.useState("black");
    const toggleCalendar = () => {setCalendarVisible(!isCalendarVisible);};
   
   
    const age = [
        { key: '18', label: 18 },
        { key: '19', label: 19 },
        { key: '20', label: 20 },
        { key: '21', label: 21 },
        { key: '22', label: 22 },
        { key: '23', label: 23 },
        { key: '24', label: 24 },
        { key: '25', label: 25 },
        { key: '26', label: 26 },
        { key: '27', label: 27 },
        { key: '28', label: 28 },
        { key: '29', label: 29 },
        { key: '30', label: 30 },
        { key: '31', label: 31 },
        { key: '32', label: 32 },
        { key: '33', label: 33 },
        { key: '34', label: 34 },
        { key: '35', label: 35 },
        { key: '36', label: 36 },
        { key: '37', label: 37 },
        { key: '38', label: 38 },
        { key: '39', label: 39 },
        { key: '40', label: 40 },
        { key: '41', label: 41 },
        { key: '42', label: 42 },
        { key: '43', label: 43 },
        { key: '44', label: 44 },
        { key: '45', label: 45 },
        { key: '46', label: 46 },
        { key: '47', label: 47 },
        { key: '48', label: 48 },
        { key: '49', label: 49 },
        { key: '50', label: 50 },
      ];


    














    
  
   





    


    const villes = [
        { key: 1, label: 'Agadir' },
        { key: 2, label: 'Ahfir' },
        { key: 3, label: 'Ain Harrouda' },
        { key: 4, label: 'Al Hoceima' },
        { key: 5, label: 'Asilah' },
        { key: 6, label: 'Azrou' },
        { key: 7, label: 'Beni Ansar' },
        { key: 8, label: 'Beni Mellal' },
        { key: 9, label: 'Benslimane' },
        { key: 10, label: 'Berkane' },
        { key: 11, label: 'Berrechid' },
        { key: 12, label: 'Casablanca' },
        { key: 13, label: 'Dar Bouazza' },
        { key: 14, label: 'Dakhla' },
        { key: 15, label: 'El Jadida' },
        { key: 16, label: 'Fes' },
        { key: 17, label: 'Inezgane' },
        { key: 18, label: 'Kasba Tadla' },
        { key: 19, label: 'Kenitra' },
        { key: 20, label: 'Laayoune' },
        { key: 21, label: 'Marrakech' },
        { key: 22, label: 'Meknes' },
        { key: 23, label: 'Mohammedia' },
        { key: 24, label: 'Nador' },
        { key: 25, label: 'Ouarzazate' },
        { key: 26, label: 'Oujda' },
        { key: 27, label: 'Rabat' },
        { key: 28, label: 'Sale' },
        { key: 29, label: 'Settat' },
        { key: 30, label: 'Sidi Bennour' },
        { key: 31, label: 'Sidi Ifni' },
        { key: 32, label: 'Sidi Kacem' },
        { key: 33, label: 'Sidi Slimane' },
        { key: 34, label: 'Skhirat' },
        { key: 35, label: 'Souk El Arbaa' },
        { key: 36, label: 'Tahala' },
        { key: 37, label: 'Tangier' },
        { key: 38, label: 'Taza' },
        { key: 39, label: 'Temara' },
        { key: 40, label: 'Tetouan' },
        { key: 41, label: 'Tiznit' },
        { key: 42, label: 'Touarga' },
        { key: 43, label: 'Touissit' },
        { key: 44, label: 'Taza' },
        { key: 45, label: 'Tifelt' },
        { key: 46, label: 'Tinghir' },
        { key: 47, label: 'Tifelt' },
        { key: 48, label: 'Youssoufia' },
        { key: 49, label: 'Zagora' },

      ];


         

      const secteurs = [
        { key: 1, label: 'Prive' },
        { key: 2, label: 'Public' },

      ]

  
      
      const fonctions = [
        { key: 1, label: 'Ingénieur logiciel' },
        { key: 2, label: 'Médecin' },
        { key: 3, label: 'Enseignant' },
        { key: 4, label: 'Infirmier/infirmière' },
        { key: 5, label: 'Avocat/avocate' },
        { key: 6, label: 'Designer graphique' },
        { key: 7, label: 'Comptable' },
        { key: 8, label: 'Électricien/électricienne' },
        { key: 9, label: 'Plombier' },
        { key: 10, label: 'Cuisinier/cuisinière' },
        { key: 11, label: 'Architecte' },
        { key: 12, label: 'Consultant en gestion' },
        { key: 13, label: 'Chef de projet' },
        { key: 14, label: 'Journaliste' },
        { key: 15, label: 'Traducteur/traductrice' },
        { key: 16, label: 'Marketing Manager' },
        { key: 17, label: 'Technicien informatique' },
        { key: 18, label: 'Infirmier/infirmière' },
        { key: 19, label: 'Pharmacien/pharmacienne' },
        { key: 20, label: 'Analyste financier' },
        { key: 21, label: 'Ingénieur civil' },
        { key: 22, label: 'Chirurgien/chirurgienne' },
        { key: 23, label: 'Professeur d université' },
        { key: 24, label: 'Psychologue' },
        { key: 25, label: 'Responsable des ressources humaines' },
        { key: 26, label: 'Développeur web' },
        { key: 27, label: 'Analyste de données' },
        { key: 28, label: 'Archiviste' },
        { key: 29, label: 'Photographe' },
        { key: 30, label: 'Pilote d avion' },

      ];
      




   











 
    const getResponsiveFontSize = (size) => {
      const standardScreenWidth = 375; 
      const scaleFactor = componentWidth / standardScreenWidth;
      const newSize = size * scaleFactor;
      return newSize;
    };
  
  







    const onLayout = event => {
        const { width } = event.nativeEvent.layout;
        setComponentWidth(width);
      };







    const handleOptionChange = (option) => {
        setVille(option.label);
      };


      const handleOptionChange2 = (option) => {
        setFonction(option.label);
      };

      const handleOptionChange3 = (option) => {
        setSecteur(option.label);
      };




      const handleOptions = (option) => {
        
       

        navigation.navigate('Setupbudget', {id:route.params.id,nom:nom,prenom:prenom,nom:nom,ville:city,secteur:secteur,fonction:fonction,daten:Calendrier});
      
      };



















React.useEffect(()=>{

var count=0;
setComplet(0);

if(nom.length>3){

  count+=16;
}
if(prenom.length>3){

  count+=16;
}
if(city.length>2){

count+=16;
}
if(secteur.length>4){

  count+=16;
}
if(fonction.length>4){

  count+=16;
}
if(Calendrier.length>4){
 
  count+=16;
}

if(count>95){
  count=100;

}


if(count>0 && count<100){
  setBg("blue")
  setColor("#C3C1C1")
}
if(count>=100){
  setEnabled(prevEnabled => !prevEnabled);
  setBg("#32F517")
  setColor("black")
}


setComplet(count);

},[nom,prenom,ville,secteur,fonction,Calendrier])

















const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setCalendarVisible(Platform.OS === 'ios');
  setCal(currentDate.toLocaleDateString());
  setDatehelp(currentDate)
};









  return (
    <LinearGradient  onLayout={onLayout} style={{backgroundColor:'white',flex:1,paddingHorizontal:"0%"}}
      colors={['#FF5733', '#FFC300', '#36A2EB']}
     >





         <View style={{height:'20%',display:'flex',justifyContent:'space-around',alignItems: 'center'}}>

             <Text style={{fontSize:getResponsiveFontSize(21),fontFamily:'PoppinsBold',color:'white'}}>Completer vos donnees</Text>

         </View>



         <View style={{backgroundColor:'white',height:'80%',paddingTop:'10%',borderTopLeftRadius: getResponsiveFontSize(55),borderTopRightRadius:getResponsiveFontSize(55)}}>


<ScrollView style={{height:"92.2%"}}>


               <Text style={{fontSize:getResponsiveFontSize(15),fontFamily:'PoppinsSemiBold',color:'black',textAlign:'center'}}>Svp Entrez vos donnees personnel</Text>




              <TextInput 
                onChangeText={setNom}
                value={nom}
                style={{width:'90%',padding:"0%", borderColor:'#F0F0F0',paddingVertical:'2.5%',paddingLeft:'5%',borderRadius:15,marginTop:'7%',backgroundColor:'#F3F3FC',marginLeft:'5%',fontSize:getResponsiveFontSize(14),fontFamily:"PoppinsRegular",color:'#484948', }}
                placeholder="Nom"
                placeholderTextColor="#BCBCBC" 
                />



               <TextInput 
                  onChangeText={setPrenom}
                  value={prenom}
                  style={{width:'90%',padding:"0%", borderColor:'#F0F0F0',paddingVertical:'2.4%',paddingLeft:'5%',borderRadius:15,marginTop:'7%',backgroundColor:'#F3F3FC',marginLeft:'5%',fontSize:getResponsiveFontSize(14),fontFamily:"PoppinsRegular",color:'#484948',    }}
                  placeholder="Prenom"
                  placeholderTextColor="#BCBCBC" 
                  />


<TextInput 
                  onChangeText={setCity}
                  value={city}
                  style={{width:'90%',padding:"0%", borderColor:'#F0F0F0',paddingVertical:'2.4%',paddingLeft:'5%',borderRadius:15,marginTop:'7%',backgroundColor:'#F3F3FC',marginLeft:'5%',fontSize:getResponsiveFontSize(14),fontFamily:"PoppinsRegular",color:'#484948',    }}
                  placeholder="Ville"
                  placeholderTextColor="#BCBCBC" 
                  />






               <ModalSelector
                   data={secteurs}
                   initValue="Select Genre"
                   onChange={handleOptionChange3}
                   style={{marginTop:'7%',backgroundColor:'#F3F3FC',width:'90%',paddingVertical:'2.4%',paddingLeft:'5%',marginTop:"5%",marginLeft:'5%',borderWidth:1,borderColor:'#F7F7F7',borderRadius:30}}
                 >
      
      
                  <TouchableOpacity>
                      <Text style={{fontSize:getResponsiveFontSize(14),fontFamily:"PoppinsRegular",color:'#BCBCBC'}} >{secteur || 'Secteur d’activité' }</Text>
                  </TouchableOpacity>
     
     
                </ModalSelector>








              <ModalSelector
                 data={fonctions}
                 initValue="Select Genre"
                 onChange={handleOptionChange2}
                 style={{marginTop:'7%',backgroundColor:'#F3F3FC',width:'90%',paddingVertical:'2.4%',paddingLeft:'5%',marginTop:"5%",marginLeft:'5%',borderWidth:1,borderColor:'#F7F7F7',borderRadius:30}}
                >
       
                  <TouchableOpacity>
                    <Text style={{fontSize:getResponsiveFontSize(14),fontFamily:"PoppinsRegular",color:'#BCBCBC'}} >{fonction || 'Fonction' }</Text>
                  </TouchableOpacity>
     
               </ModalSelector>







          <TouchableOpacity onPress={()=>{toggleCalendar()}}>
               <View style={{position:'relative',zIndex:4564,display:'flex',flexDirection:'row',alignItems:'center',marginTop:'7%',backgroundColor:'#F3F3FC',width:'90%',paddingVertical:'2.4%',paddingLeft:'5%',marginTop:"5%",marginLeft:'5%',borderWidth:1,borderColor:'#F7F7F7',borderRadius:30}}>
                    <Text style={{fontSize:getResponsiveFontSize(14),fontFamily:"PoppinsRegular",color:'#BCBCBC'}}>{Calendrier || 'Datenaissance'}</Text>
     
                  <Icon name="calendar" size={24} color="black" style={{marginLeft:'40%'}}/>
    
              <View style={{position:'absolute',left:'7%',backgroundColor:'#DFDFDF',top:'-945%',width:'90%'}}>
                  
                  {isCalendarVisible && (
                
                       <DateTimePicker
                       testID="dateTimePicker"
                       value={Calendrier.length<1 ? new Date() : datehelp}
                       mode="date" // "date" for a date picker, "time" for a time picker
                       is24Hour={true}
                       display="spinner" // "default" or "spinner"
                       onChange={onChange}
          
                     />
                    )
                    
                    
                    
                    
                    
                    }
      
      
              </View>
             </View>


           </TouchableOpacity>














    




          <TouchableOpacity disabled={complete==100 ?false :true}  onPress={()=>{handleOptions()}}  style={{width:"25%",marginTop:'7%',marginLeft:'70%',backgroundColor:'#4A83FE',paddingHorizontal:'1%',paddingVertical:'2%',borderRadius:25}}>
              <Text style={{fontSize:getResponsiveFontSize(13),textAlign:'center',color:'white',fontFamily:'PoppinsRegular'}}>SUIVANT</Text>
          </TouchableOpacity>

        
</ScrollView>





         <View style={{height:'7%',display:'flex',justifyContent:'center',paddingHorizontal:'0%',borderTopColor:'#EAEAEA',borderTopWidth:1}}>
              <Text style={{marginLeft:'2%',fontSize:getResponsiveFontSize(15),fontFamily:"PoppinsRegular",color:Color}}>Profiter Completer  {complete}%</Text>
              <View  style={{backgroundColor:bg,position:"absolute",top:0,height:'95%',width:`${complete}%`,opacity:0.6}}>
                     <Text>.</Text>
             </View>
          </View>




          </View>




</LinearGradient>

)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Setup

