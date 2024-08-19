import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AcceptScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à tela Accept!</Text>
      <Button title="Voltar ao Login" onPress={() => navigation.goBack()} />

      {/* https://rdsia-login-dev.mrpsolution.com.br/o/authorize/?response_type=code&code_challenge=XRi41b-5yHtTojvCpXFpsLUnmGFz6xR15c3vpPANAvM&code_challenge_method=S256&client_id=gt4qTpfj7jEfAuLyOweuMWwIwBiBSqaKnuZAEp7O&redirect_uri=https://pitangui.amazon.com/api/skill/link/M1PA4AB15YBXYL */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
});
