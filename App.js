import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet,T ext, TextInput, View, ScrollView, Alert, TouchableOpacity, } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dadosEnviados, setDadosEnviados] = useState(null);

  useEffect(() => {
    console.log('Aplicativo iniciado com sucesso!');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Formulário de Cadastro</Text>
          <Text style={styles.textoTopo}>
            Preencha os campos abaixo.
          </Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#9CA3AF"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Curso</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu curso"
            placeholderTextColor="#9CA3AF"
            value={curso}
            onChangeText={setCurso}
          />

          <Text style={styles.label}>Disciplina</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua disciplina"
            placeholderTextColor="#9CA3AF"
            value={disciplina}
            onChangeText={setDisciplina}
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.inputDescricao}
            placeholder="Fale um pouco sobre você"
            placeholderTextColor="#9CA3AF"
            value={descricao}
            onChangeText={setDescricao}
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContainer: {
    padding: 22,
    paddingTop: 45,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#111111',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#00F5FF',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    textShadowColor: '#00F5FF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 14,
    marginBottom: 8,
  },
  textoTopo: {
    fontSize: 15,
    textAlign: 'center',
    color: '#D1D5DB',
    marginBottom: 24,
    lineHeight: 22,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#00F5FF',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#FFFFFF',
  },
  inputDescricao: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#00F5FF',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#FFFFFF',
    height: 110,
    textAlignVertical: 'top',
  },
});