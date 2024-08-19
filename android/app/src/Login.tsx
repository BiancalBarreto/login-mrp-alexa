import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable, Alert } from 'react-native';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
  }

  try {
      const response = await axios.get('api-login');
      const users = response.data;

      const user = users.find((user: { email: string; password: string }) => user.email === email && user.password === password);

      if (user) {
          Alert.alert('Sucesso', 'Login realizado com sucesso!');
          navigation.navigate('Accept');
      } else {
          Alert.alert('Erro', 'Email ou senha incorretos.');
      }
  } catch (error) {
      Alert.alert('Erro', 'Falha ao fazer login. Por favor, tente novamente.');
      console.error('Falha ao fazer login:', error);
  }
};

  return (
    <View style={styles.container}>
        <View>
            <Image source={require("../src/logo.jpeg")} style={styles.image} />
        </View>
      <Text style={styles.title}>Login</Text>
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
      <Button title="Entrar" onPress={handleLogin} />

      {/* <Pressable onPress={() => navigation.navigate('Cadastro')}> */}
          {/* <Text>Não possui cadastro? <Text style={styles.linkText}>Cadastrar</Text></Text> */}
        {/* </Pressable> */}
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
linkText: {
  color: '#d17b38',
  textDecorationLine: 'underline',
},

});
