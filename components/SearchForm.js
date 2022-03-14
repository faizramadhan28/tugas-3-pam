/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const SearchForm = ({navigation}) => {

  const [textLokasi, onChangeLokasi] = React.useState('');
  const [textTujuan, onChangeTujuan] = React.useState('');
  const [textTanggal, onChangeTanggal] = React.useState('');


  const register = () =>{
    navigation.navigate('Result',{
        lokasi : textLokasi,
        tujuan : textTujuan,
        tanggal: textTanggal,
    });
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hilling.id</Text>
        <View style={styles.garis} />

        {/* Isi  */}
        <View style={styles.isi}>
          <View style={styles.wrapperInput}>
            <Text>Lokasi Keberangkatan </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukkan lokasi keberangkatan"
              value={textLokasi}
              onChangeText= {(text) => onChangeLokasi(text)}
            />
          </View>

          <View style={styles.wrapperInput}>
            <Text>Lokasi Tujuan </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukkan lokasi tujuan"
              value={textTujuan}
              onChangeText= {(text) => onChangeTujuan(text)}
            />
          </View>

          <View style={styles.wrapperInput}>
            <Text>Tanggal Keberangkatan </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukkan tanggal keberangkatan"
              value={textTanggal}
              onChangeText= {(text) => onChangeTanggal(text)}
            />
          </View>

          <TouchableOpacity style={styles.button}
            onPress={register}>
            <Text style={styles.textButton}>Cari</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.copyright}>
              <Text style={styles.textcopyright}>Copyright Muhammad Faiz Ramadhan-119140115</Text>
          </View>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#3c8d0d',
    borderRadius: 20,
    bottom: 20,
    },
  title: {
    padding: 40,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  isi: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    top: '20%',
    left: '10%',
    shadowColor: '#000',
    elevation: 5,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    borderRadius: 5,
    height: 40,
    fontSize: 13,
  },
  wrapperInput: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  copyright: {
    padding: 10,
  },
  textcopyright: {
    top: '700%',
    textAlign: 'center',

  },
});

export default SearchForm;
