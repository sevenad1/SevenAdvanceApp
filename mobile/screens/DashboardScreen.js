
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import alunos from '../alunos.json';


export default function DashboardScreen({ route }) {
  const { codigo } = route.params;
  const [faltas, setFaltas] = useState(null);

  useEffect(() => {
    const aluno = alunos.find(a => a.codigo === codigo);
    setFaltas(aluno ? aluno.faltas : 'Não encontrado');
  }, [codigo]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard de Faltas</Text>
      <Text style={styles.label}>Código do aluno: <Text style={styles.codigo}>{codigo}</Text></Text>
      <Text style={styles.faltas}>Quantidade de faltas: <Text style={styles.qtd}>{faltas}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaf7ff',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
  },
  codigo: {
    fontWeight: 'bold',
    color: '#0077cc',
  },
  faltas: {
    fontSize: 20,
    marginBottom: 8,
  },
  qtd: {
    fontWeight: 'bold',
    color: '#d32f2f',
  },
});
