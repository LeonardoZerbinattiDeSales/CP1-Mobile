import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Alert, TouchableOpacity, } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dadosEnviados, setDadosEnviados] = useState(null);

  useEffect(() => {
    console.log('Aplicativo iniciado com sucesso!');
  }, []);

  function enviarDados() {
    if (!nome || !curso || !disciplina || !descricao) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    setDadosEnviados({
      nome,
      curso,
      disciplina,
      descricao,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titulo}>Formulário de Cadastro</Text>
        <Text style={styles.textoTopo}>
          Preencha os campos abaixo e visualize os dados enviados.
        </Text>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Seus Dados</Text>

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

          <TouchableOpacity style={styles.botao} onPress={enviarDados}>
            <Text style={styles.textoBotao}>Enviar Cadastro</Text>
          </TouchableOpacity>
        </View>

        {dadosEnviados && (
          <View style={styles.cardResultado}>
            <Text style={styles.subtituloResultado}>Dados Enviados</Text>

            <Text style={styles.resultado}>
              <Text style={styles.negrito}>Nome:</Text> {dadosEnviados.nome}
            </Text>

            <Text style={styles.resultado}>
              <Text style={styles.negrito}>Curso:</Text> {dadosEnviados.curso}
            </Text>

            <Text style={styles.resultado}>
              <Text style={styles.negrito}>Disciplina:</Text> {dadosEnviados.disciplina}
            </Text>

            <Text style={styles.resultado}>
              <Text style={styles.negrito}>Descrição:</Text> {dadosEnviados.descricao}
            </Text>
          </View>
        )}
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
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: '#00F5FF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 14,
  },
  textoTopo: {
    fontSize: 15,
    textAlign: 'center',
    color: '#D1D5DB',
    marginBottom: 24,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#111111',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#07f7ff',
    shadowColor: '#00F5FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 14,
    textShadowColor: '#00F5FF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
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
  botao: {
    backgroundColor: '#00F5FF',
    marginTop: 22,
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#00F5FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  textoBotao: {
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardResultado: {
    backgroundColor: '#0A0A0A',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowColor: '#00F5FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  subtituloResultado: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 14,
    textShadowColor: '#00F5FF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  resultado: {
    fontSize: 16,
    color: '#E5E7EB',
    marginBottom: 10,
    lineHeight: 24,
  },
  negrito: {
    fontWeight: 'bold',
    color: '#08f4fc',
  },
});