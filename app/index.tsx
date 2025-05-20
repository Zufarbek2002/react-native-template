import {
  View,
  Text,
  Pressable,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import * as Location from "expo-location";
import axios from "axios";
import WeatherData from "@/components/weather/WeatherData";
import { WeatherResponse } from "@/types/weather";
import { weatherData } from "@/components/weather/Data";

const API_KEY = "56d07c559cd539cde8ec3537fcb4f72a";

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<WeatherResponse | null>(null);

  const onRefresh = () => {
    setRefreshing(true);
    setLoading(true);
    setTimeout(() => {
      setRefreshing(false);
      setLoading(false);
    }, 2000);
  };

  const getWeather = async (latitude: number, longitude: number) => {
    try {
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      setLocation(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const setWeather = async (city: string) => {
    setLoading(true);
    try {
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setLocation(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      getWeather(latitude, longitude);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ minHeight: "100%" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <Loading />
        </View>
      ) : (
        <View className="flex-1 w-screen">
          <WeatherData
            setWeather={setWeather}
            name={location?.name}
            temp={location?.main?.temp}
            condition={location?.weather[0]?.main as keyof typeof weatherData}
          />
        </View>
      )}
    </ScrollView>
  );
}
