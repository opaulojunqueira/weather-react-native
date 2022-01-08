import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
// Icons
import { Feather, EvilIcons, Ionicons, AntDesign } from '@expo/vector-icons';
// Components
import MainCard from './components/MainCard';
import InfoCard from './components/InfoCard';
// Api
import getConsultApi from './api/ConsultApi';

export default function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [Location, setLocation] = useState([])
  const [Hours, setHours] = useState([])

  const [Temperature, setTemperature] = useState([])
  const [TemperatureMin, setTemperatureMin] = useState([])
  const [TemperatureMax, setTemperatureMax] = useState([])
  const [TemperatureMorning, setTemperatureMorning] = useState([])
  const [TemperatureEvening, setTemperatureEvening] = useState([])
  const [TemperatureNight, setTemperatureNight] = useState([])
  const [Rain, setRain] = useState([])
  const [Humidity, setHumidity] = useState([])
  const [WeatherIcon, setWeatherIcon] = useState([])

  async function getData() {
    const data = await getConsultApi()

    // Country, City, Hours, Temperature, TemperatureMin, TemperatureMax, TemperatureMorning, TemperatureEvening, TemperatureNight, Rain, Wind
    setLocation(data[0] + ', ' + data[1])
    setHours(data[2])
    setTemperature(data[3])
    setTemperatureMin(data[4])
    setTemperatureMax(data[5])
    setTemperatureMorning(data[6])
    setTemperatureEvening(data[7])
    setTemperatureNight(data[8])
    setRain(data[9])
    setHumidity(data[10])
    setWeatherIcon(data[11])
  }

  useEffect(() => {
    getData()
  }, [])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode ? '#232634' : '#f2f2f2',
      alignItems: 'center',
    },
    temperature: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    temperatureText: {
      color: darkMode ? '#e0e0e0' : 'black',
      fontSize: 50,
    },
    refreshButton: {
      position: 'absolute',
      margin: 30,
      alignSelf: 'flex-start'
    },
    cardView: {
      color: darkMode ? 'black' : 'white',
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardInfo: {
      alignItems: 'center',
      backgroundColor: darkMode ? '#393e54' : '#8f8f8f',
      borderRadius: 20,
      width: 370,
      height: 230,
    },
    cardInfoText: {
      color: darkMode ? '#e0e0e0' : 'white',
      margin: 15,
      fontSize: 20,
      fontWeight: 'bold',
    },
    cardInfoView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    themeButton: {
      margin: 10,
      marginLeft: 300,
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    squareButton: {
      backgroundColor: darkMode ? '#f2f2f2' : '#8f8f8f',
      justifyContent: 'center',
      borderRadius: 20,
      marginRight: 20,
      width: 50,
      height: 25,
    },
    circleButton: {
      backgroundColor: darkMode ? '#232634' : '#f2f2f2',
      alignSelf: darkMode ? 'flex-end' : 'flex-start',
      margin: 5,
      width: 20,
      height: 20,
      borderRadius: 50,
    },
  });

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => getData()} style={styles.refreshButton}>
        <EvilIcons name="refresh" size={30} color={darkMode ? 'white' : 'black'} />
      </TouchableOpacity>

      <img src={WeatherIcon ? WeatherIcon : WeatherIcon} style={{ marginTop: 55 }} size={40} />
      {/* <Feather name="sun" style={{ marginTop: 55 }} size={40} color="orange" /> */}

      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{Temperature}</Text>
        <Text style={[styles.temperatureText, { fontSize: 14 }]}>°C</Text>
      </View>

      <Text style={[styles.temperatureText, { fontSize: 14 }]}> {Location} | {Hours}</Text>

      <View style={styles.cardView}>
        <MainCard title={'Manhã'} temperature={TemperatureMorning + '°C'} backgroundColor={darkMode ? '#ff873d' : '#cc6e30'} icon={'morning'}></MainCard>
        <MainCard title={'Tarde'} temperature={TemperatureEvening + '°C'} backgroundColor={darkMode ? '#d29600' : '#fcc63f'} icon={'afternoon'}></MainCard>
        <MainCard title={'Noite'} temperature={TemperatureNight + '°C'} backgroundColor={darkMode ? '#008081' : '#38b7b8'} icon={'night'}></MainCard>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardInfoText}>Informações adicionais</Text>

        <View style={styles.cardInfoView}>
          <InfoCard title={'Prob. de chuva'} value={Rain + '%'}></InfoCard>
          <InfoCard title={'Umidade'} value={Humidity + '%'}></InfoCard>
          <InfoCard title={'Temp. Mínima'} value={TemperatureMin + '°C'}></InfoCard>
          <InfoCard title={'Temp. Máxima'} value={TemperatureMax + '°C'}></InfoCard>
        </View>

      </View>

      <View style={styles.themeButton}>
        <View style={styles.squareButton}>
          <TouchableOpacity style={styles.circleButton} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)}>

          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}