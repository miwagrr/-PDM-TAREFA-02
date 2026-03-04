import { StyleSheet, Text, FlatList, ScrollView, View, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Card, Title, Paragraph } from 'react-native-paper';

const ALBUNS = [
  {nome: 'Mans Best Friend', artista: 'Sabrina Carpenter', ano: '2025', capa: 'https://s2-gshow.glbimg.com/d0d9mfdU7DDXZiM5c1VUUOEKSVs=/0x0:980x978/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2025/A/B/ydZt8BSNu2kzfkmDVBqg/sabrina-carpenter-capa.avif'},
  {nome: 'Short n Sweet', artista: 'Sabrina Carpenter', ano: '2024', capa: 'https://whs.dmmserver.com/media/640/06024750/0602475027799.jpg'},
  {nome: 'Short n Sweet (Deluxe)', artista: 'Sabrina Carpenter', ano: '2025', capa: 'https://goodtasterecords.com/cdn/shop/files/sabrina-carpenter-short-n-sweet-deluxe-edition-bright-azure-color-vinyl-lp-602475656999-island-good-taste-records-117897.png?v=1738833237'},
  {nome: 'Three Cheers for Sweet Revenge', artista: 'My Chemical Romance', ano: '2004', capa: 'https://m.media-amazon.com/images/I/81hYuA+Gh6L._UF1000,1000_QL80_.jpg'},
  {nome: 'The Black Parade', artista: 'My Chemical Romance', ano: '2006', capa: 'https://saportareport.com/wp-content/uploads/2026/01/black-paradeimage-1.jpg'},
]


export default function App() {

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Card style={{ margin: 20}}>
        <Card.Cover source={{uri: item.capa}}/>
          <Card.Content>
          <Title>{item.nome}</Title>
          <Paragraph>{item.artista}</Paragraph>
        <Text>{item.ano}</Text>
        </Card.Content>
        <View style={styles.favorito}>
        </View>
     </Card>
  </View>
  );

  return (
    <SafeAreaProvider>
    <ImageBackground source={{uri: 'https://img.freepik.com/free-photo/white-wood-textured-mobile-wallpaper_53876-160559.jpg'}} style={styles.bg}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}> Catálogo de itens</Text>
            <FlatList
              data={ALBUNS}
              renderItem={renderItem}
              keyExtractor={(item) => item.nome}
              style={styles.list}/>

          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  favorito: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 20,
  },

  list: {
    marginTop: 10,
  },

  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
    container: {
    flex: 1,
    padding: 8,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },

});
