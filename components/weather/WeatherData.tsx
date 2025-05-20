import React, { useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { weatherData } from "./Data";

export default function WeatherData({
  setWeather,
  temp,
  name,
  condition,
}: {
  setWeather: (city: string) => Promise<void>;
  temp?: number;
  name?: string;
  condition: keyof typeof weatherData;
}) {
  const [query, setQuery] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={weatherData[condition]?.gradient}
          className="flex-1 justify-center items-center w-screen"
        >
          <StatusBar
            barStyle="light-content"
            backgroundColor={weatherData[condition]?.gradient[0]}
          />
          <View style={styles.container}>
            <MaterialCommunityIcons
              name={weatherData[condition]?.icon}
              size={100}
              color="white"
            />
            <View className="flex items-center justify-center">
              <Text style={styles.textStyle}>{temp} °C</Text>
              <Text style={styles.textStyle}>{name}</Text>
            </View>
          </View>
          <View style={{ ...styles.container, ...styles.textContainer }}>
            <Text style={styles.textStyle}>
              {weatherData[condition]?.title}
            </Text>
            <Text style={{ ...styles.textStyle, fontSize: 24 }}>
              {weatherData[condition]?.description}
            </Text>
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="City"
                style={styles.input}
                onChangeText={(text) => setQuery(text)}
              />
              <Button
                title="Search..."
                onPress={() => {
                  setWeather(query);
                  setQuery("");
                }}
              />
            </View>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    rowGap: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
  input: {
    width: "70%",
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0efef",
    borderRadius: 5,
    padding: 5,
  },
});
