/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lokasi: '',
      tujuan: '',
      tanggal: '',
    };
  }

  const register = () =>{
    navigation.navigate('Result',{
        lokasi : textKeberangkatan,
        tujuan : textTujuan,
        tanggal: textWaktu,
    })
  }

  render() {
    const {lokasi, tujuan, tanggal} = this.state;
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
              value={lokasi}
              onChangeText={lokasi => this.setState({lokasi})}
            />
          </View>

          <View style={styles.wrapperInput}>
            <Text>Lokasi Tujuan </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukkan lokasi tujuan"
              value={tujuan}
              onChangeText={tujuan => this.setState({tujuan})}
            />
          </View>

          <View style={styles.wrapperInput}>
            <Text>Tanggal Keberangkatan </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukkan tanggal keberangkatan"
              value={tanggal}
              onChangeText={tanggal => this.setState({tanggal})}
            />
          </View>

          <TouchableOpacity style={styles.button} 
            onPress={this.register}>
            <Text style={styles.textButton}>Cari</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.copyright}>
              <Text style={styles.textcopyright}>Copyright Muhammad Faiz Ramadhan-119140115</Text>
          </View>
      </View>
    );
  }
}

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
