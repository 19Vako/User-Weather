export function getWeatherIconAndLabel(weathercode: number) {
  const map: Record<number, { icon: string; label: string; video: string }> = {
    0: { icon: "☀️", video: "/weatherVideo/sunny.mp4", label: "Ясно" },
    1: { icon: "🌤️", video: "/weatherVideo/It's very clear.mp4", label: "Переважно ясно" },
    2: { icon: "⛅", video: "/weatherVideo/Minliv gloominess.mp4", label: "Частково хмарно" },
    3: { icon: "☁️", video: "/weatherVideo/gloomy.mp4", label: "Хмарно" },
    45: { icon: "🌫️", video: "/weatherVideo/fog.mp4", label: "Туман" },
    48: { icon: "🌫️", video: "/weatherVideo/fog.mp4", label: "Туман (із замерзанням)" },
    51: { icon: "🌦️", video: "/weatherVideo/light_rain.mp4", label: "Легкий дрібний дощ" },
    53: { icon: "🌦️", video: "/weatherVideo/rainy.mp4", label: "Помірний дрібний дощ" },
    55: { icon: "🌧️", video: "/weatherVideo/rainy.mp4", label: "Сильний дрібний дощ" },
    56: { icon: "🌧️", video: "/weatherVideo/rainy.mp4", label: "Легкий замерзаючий дрібний дощ" },
    57: { icon: "🌧️", video: "/weatherVideo/rainy.mp4", label: "Сильний замерзаючий дрібний дощ" },
    61: { icon: "🌧️", video: "/weatherVideo/rainy.mp4", label: "Легкий дощ" },
    63: { icon: "🌧️", video: "/weatherVideo/rainy.mp4", label: "Помірний дощ" },
    65: { icon: "🌧️", video: "/weatherVideo/rainy.mp4", label: "Сильний дощ" },
    66: { icon: "🌧️", video: "/weatherVideo/rainy.mp4", label: "Легкий замерзаючий дощ" },
    67: { icon: "🌧️", video: "/weatherVideo/rainy.mp4", label: "Сильний замерзаючий дощ" },
    71: { icon: "🌨️", video: "/weatherVideo/snow.mp4", label: "Легкий снігопад" },
    73: { icon: "🌨️", video: "/weatherVideo/snow.mp4", label: "Помірний снігопад" },
    75: { icon: "🌨️", video: "/weatherVideo/snow.mp4", label: "Сильний снігопад" },
    77: { icon: "❄️", video: "/weatherVideo/snow.mp4", label: "Снігові зерна" },
    80: { icon: "🌦️", video: "/weatherVideo/rainy.mp4", label: "Легкі дощові зливи" },
    81: { icon: "🌧️", video: "/weatherVideo/rainy.mp4", label: "Помірні дощові зливи" },
    82: { icon: "🌧️", video: "/weatherVideo/rainy.mp4", label: "Сильні дощові зливи" },
    85: { icon: "🌨️", video: "/weatherVideo/snow.mp4", label: "Легкий снігопад" },
    86: { icon: "🌨️", video: "/weatherVideo/snow.mp4", label: "Сильний снігопад" },
    95: { icon: "⛈️", video: "/weatherVideo/storm.mp4", label: "Гроза" },
    96: { icon: "⛈️", video: "/weatherVideo/spit.mp4", label: "Гроза з легким градом" },
    99: { icon: "⛈️", video: "/weatherVideo/spit.mp4", label: "Гроза з градом" },
  };

  return map[weathercode] || { icon: "❓", video: "", label: "Невідома погода" };
}
