export function getWeatherIconAndLabel(weathercode: number) {
  const map: Record<number, { icon: string; label: string; video: string }> = {
    0: { icon: "☀️", video: "/weatherVideo/sunny.mp4", label: "Ясно" },
    1: {
      icon: "🌤️",
      video: "/weatherVideo/it's very clear.mp4",
      label: "Переважно ясно",
    },
    2: {
      icon: "⛅",
      video: "/weatherVideo/Minliv gloominess.mp4",
      label: "Мінлива хмарність",
    },
    3: { icon: "☁️", video: "/weatherVideo/gloomy.mp4", label: "Хмарно" },
    45: { icon: "🌫️", video: "/weatherVideo/fog.mp4", label: "Туман" },
    48: {
      icon: "🌫️",
      video: "/weatherVideo/fog.mp4",
      label: "Туман із замерзанням",
    },
    51: {
      icon: "🌦️",
      video: "/weatherVideo/Light rain.mp4",
      label: "Легкий дощ",
    },
    61: { icon: "🌧️", video: "/weatherVideo/rainy.mp4", label: "Дощ" },
    71: { icon: "🌨️", video: "/weatherVideo/snow.mp4", label: "Сніг" },
    80: { icon: "🌦️", video: "/weatherVideo/spit.mp4", label: "Зливи" },
    95: { icon: "⛈️", video: "/weatherVideo/storm.mp4", label: "Гроза" },
    99: {
      icon: "⛈️",
      video: "/weatherVideo/hail.mp4",
      label: "Гроза з градом",
    },
  };

  return map[weathercode];
}
