/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import {useRoute} from '@react-navigation/native';
import {Maskapai, Bandara, Jadwal} from './data';

const Result = ({navigation}) => {
  const route = useRoute();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.row}>
          <Icon
            name="arrow-back"
            size={50}
            onPress={() => navigation.goBack()}
          />
          <Icon name="account-circle" size={50} />
        </View>
        <View style={styles.upper}>
          <Text style={styles.textTitle}>Hiling.id</Text>
          <Text style={styles.textSubtittle}>Hasil Pencarian Penerbangan</Text>
          <Text style={styles.textSubtittle}>(Tanggal Keberangkatan)</Text>
        </View>
        <View style={styles.marginMain}>
          <FindData />
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  function NoHaveData() {
    return (
      <Card>
        <View style={styles.viewCard}>
          <Text style={styles.textSubtittle}>
            Maaf Hasil Pencarian Tidak Ditemukan
          </Text>
        </View>
      </Card>
    );
  }

  function DataGet(hasil) {
    return (
      <FlatList
        data={hasil}
        renderItem={({item}) => (
          <Card>
            <View style={styles.viewCard}>
              <View style={styles.viewImage}>
                <Text>
                  {
                    Bandara.find(
                      sub => sub.bandara_id === item.bandara_id_keberangkatan,
                    ).bandara_nama
                  }
                </Text>
              </View>
              <Text>
                {
                  Bandara.find(
                    sub => sub.bandara_id === item.bandara_id_kedatangan,
                  ).bandara_nama
                }
              </Text>
            </View>
            <View style={styles.viewCard}>
              <View style={styles.viewImage}>
                <Image
                  source={
                    Maskapai.find(sub => sub.maskapai_id === item.maskapai_id)
                      .maskapai_logo
                  }
                  style={{width: 40, height: 40}}
                />
              </View>
              <Text>
                {
                  Maskapai.find(sub => sub.maskapai_id === item.maskapai_id)
                    .maskapai_nama
                }
              </Text>
            </View>
          </Card>
        )}
        keyExtractor={item => item.jadwal_id}
      />
    );
  }

  function FindData() {
    if (
      route.params.keberangkatan === '' ||
      route.params.tujuan === '' ||
      route.params.waktu === ''
    ) {
      return NoHaveData();
    } else {
      const keberangkatanID = Bandara.find(
        id =>
          id.bandara_nama.toLowerCase() ===
          route.params.keberangkatan.toLowerCase(),
      ).bandara_id;
      const tujuanID = Bandara.find(
        id =>
          id.bandara_nama.toLowerCase() === route.params.tujuan.toLowerCase(),
      ).bandara_id;
      const hasil = Jadwal.filter(
        id =>
          id.bandara_id_keberangkatan.toLowerCase() ===
            keberangkatanID.toLowerCase() &&
          id.bandara_id_kedatangan.toLowerCase() === tujuanID.toLowerCase() &&
          id.tanggal === route.params.waktu.toLowerCase(),
      );

      let findAll = hasil.length >= 1 ? DataGet(hasil) : NoHaveData();

      return findAll;
    }
  }
};
const styles = StyleSheet.create({
  row:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'powderblue',
  },
  upper:{
      alignItems:'center',
      //justifyContent:'center',
      backgroundColor: 'powderblue',
      height: 150,
  },
  textSubtittle:{
      fontFamily: 'Cochin',
      fontSize: 16,
      fontWeight: 'bold',
  },
  textTitle:{
      fontFamily: 'Cochin',
      fontSize: 32,
      fontWeight: 'bold',
  },
  marginMain:{
      marginVertical: 20,
      marginHorizontal: 10,
  },
  viewCard:{
      flexDirection: 'row',
      padding: 10,
  },
  viewImage:{
      flex: 1,
  },
});

export default Result;
