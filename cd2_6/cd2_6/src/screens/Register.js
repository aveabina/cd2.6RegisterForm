import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'; 
import { AntDesign } from '@expo/vector-icons'; 

export default class Login extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Image source={require('../images/image.png')} style={styles.img}/>
        <Text style={styles.header}>
          Регистрация
        </Text>
        <Text style={styles.txt1}>
          Введите свои персональные данные
        </Text>
        <View style={styles.form}>
          <Icon name='mail' color='#FA8D62' size={24}/>
          <TextInput style={styles.input} placeholder="Эл.почта" />
        </View>
        <View style={styles.form}>
          <AntDesign name='lock' color='#FA8D62' size={24}/>
          <TextInput style={styles.input} placeholder="Пароль" secureTextEntry={true}/>
        </View>
        <View style={styles.form}>
          <AntDesign name='lock' color='#FA8D62' size={24}/>
          <TextInput style={styles.input} placeholder="Пароль еще раз" secureTextEntry={true}/>
        </View>
        <View style={styles.form2}>
          <Button color='#FA8D62' title="Зарегестрироваться" onPress={() => Alert.alert("Вы зарегестрировались")}/>
          <Text style={styles.txt2}>Уже есть регистрация?</Text>
          <Button color="#A57C65"
          title="Вход" 
          onPress={() => 
          {this.props.navigation.navigate('Login')}}
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  img: {
    alignSelf: 'center',
    marginTop:30,
    width:'67%',
    height: '33%'
  },
  header: {
    marginTop:20,
    fontSize:30,
    fontFamily:'SemiBold',
    alignSelf:'center'
  },
  txt1: {
    fontFamily:'Regular',
    marginHorizontal:55,
    textAlign:'center',
    marginTop:5,
    opacity:0.4
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:55,
    borderWidth:2, 
    marginTop:20,
    paddingHorizontal:10,
    borderColor:'#FA8D62',
    borderRadius:23,
    paddingVertical:2
  },
  input: {
    paddingHorizontal:10,
  },
  form2: {
    marginTop:20,
    marginHorizontal:55,
    alignItems:'center'
  },  
  txt2: {
    fontFamily:'Regular',
    marginTop:50,
    textAlign:'center',
    opacity:0.4
  },
})