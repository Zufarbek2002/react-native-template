export const weatherData = {
  Clear: {
    icon: "weather-sunny",
    gradient: ["#f7b733", "#fc4a1a"] as const,
    title: "Clear Sky",
    description: "Perfect day to be outside.",
  },
  Thunderstorm: {
    icon: "weather-lightning",
    gradient: ["#373B44", "#4286f4"] as const,
    title: "Thunderstorm",
    description: "Stay indoors and stay safe.",
  },
  Drizzle: {
    icon: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"] as const,
    title: "Light Rain",
    description: "A little wet outside.",
  },
  Rain: {
    icon: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"] as const,
    title: "Rainy Day",
    description: "Don't forget your umbrella.",
  },
  Snow: {
    icon: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"] as const,
    title: "Snowy Weather",
    description: "Time to build a snowman!",
  },
  Mist: {
    icon: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"] as const,
    title: "Misty",
    description: "Visibility is low, be careful.",
  },
  Smoke: {
    icon: "weather-fog",
    gradient: ["#56CCF2", "#2F80ED"] as const,
    title: "Smoky Air",
    description: "Avoid staying outside too long.",
  },
  Haze: {
    icon: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"] as const,
    title: "Hazy",
    description: "Air is not very clean today.",
  },
  Dust: {
    icon: "weather-windy",
    gradient: ["#B79891", "#94716B"] as const,
    title: "Dusty",
    description: "Cover your nose and eyes.",
  },
  Tornado: {
    icon: "weather-tornado",
    gradient: ["#283E51", "#485563"] as const,
    title: "Tornado Alert",
    description: "Take shelter immediately!",
  },
  Clouds: {
    icon: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"] as const,
    title: "Cloudy",
    description: "Gloomy but calm.",
  },
} as const;
