import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';


export default function CadastroScreen({ navigation }) {
    const [firstName, setFirstName] = useState('');  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleCadastro = async () => {
    if (!firstName || !email || !password) {
        Alert.alert('Erro', 'Todos os campos devem ser preenchidos.');
        return;
    }

    try {
        
        // const emailCheckResponse = await axios.get(`https://6414e8c38dade07073cb2a6a.mockapi.io/api/check-email?email=${email}`);
        
        // if (emailCheckResponse.data.exists) {
        //     Alert.alert('Erro', 'E-mail já cadastrado. Use outro e-mail.');
        //     return;
        // }

        const response = await axios.post('https://6414e8c38dade07073cb2a6a.mockapi.io/api/v1/users', {
            firstName,
            email, 
            password
        });
        Alert.alert('Sucesso', 'Usuário criado com sucesso!');
        navigation.navigate('Accept');  
    } catch (error) {
        Alert.alert('Erro', 'Falha ao criar usuário. Por favor, tente novamente.');
        console.error('Failed to create user:', error);
    }


};
    
  

  return (
    <View style={styles.container}>
        <View>
            <Image source={require("../src/logo.jpeg")} style={styles.image} />
        </View>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={firstName}
        onChangeText={setFirstName}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    
    
    alignSelf: 'center',
},
});
