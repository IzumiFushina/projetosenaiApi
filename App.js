//Importa as bibliotecas necessárias para o funcionamento da aplicação
import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import axios from 'axios';
import { styles } from './src/styles/styles';
import { Feather } from '@expo/vector-icons';

//Cria uma constante chamada App
const App = () => {
//Cria constantes de CEP e Endereço dentro de App
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

//Define uma constante assíncrona para buscar o endereço anterior
  const fetchAddress = async () => {
//Busca uma API que encontra o endereço de um CEP, num esquema de if/else
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
    } catch (error) {
      console.error('Error fetching address:', error);
      setAddress(null);
    }
  };

//Retorna tudo já criado para enfim realizar a aplicação
  return (
    <View style={styles.BackgroundColorView}>
    <View style={styles.container1}>
      <Feather name="map" size={35} color="#ff006a" top={15}/>
      <TextInput style={styles.TxtInput}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />
      <Pressable 
        style={styles.btn} 
        onPress={fetchAddress} 
      >
        <Text>Encontrar</Text> 
      </Pressable>
      </View>
      {address && (
        <View style={styles.container2}>
          <Text style={styles.txt}>CEP: {address.cep}</Text>
          <Text style={styles.txt}>Rua: {address.logradouro}</Text>
          <Text style={styles.txt}>Bairro: {address.bairro}</Text>
          <Text style={styles.txt}>Cidade: {address.localidade}</Text>
          <Text style={styles.txt}>Estado: {address.uf}</Text>
        </View>
      )}
    </View>
  );
};

export default App;