import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [codigo, setCodigo] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    if (codigo.trim() === '') {
      setErro('Digite o código do aluno.');
      return;
    }
    // Simulação: sempre aceita o código
    navigation.navigate('Dashboard', { codigo });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informe o código do aluno</Text>
      <TextInput
        style={styles.input}
        placeholder="Código do aluno"
        value={codigo}
        onChangeText={setCodigo}
      />
      {erro ? <Text style={styles.error}>{erro}</Text> : null}
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});
