export const getWeatherIcon = (description: string): string => {
    const weatherMap: { [key: string]: string } = {
        // 맑음/구름
        맑음: '☀️',
        구름조금: '🌤️',
        구름많음: '⛅',
        흐림: '☁️',
        온흐림: '☁️',

        // 비
        실비: '🌦️',
        비: '🌧️',
        강한비: '⛈️',
        소나기: '🌦️',
        뇌우: '⛈️',

        // 눈
        눈: '❄️',
        실눈: '🌨️',
        강한눈: '❄️',
        진눈깨비: '🌨️',

        // 안개/연무
        박무: '🌫️',
        안개: '🌫️',
        연무: '🌫️',
        연기: '💨',

        // 바람/기타
        모래: '💨',
        먼지: '💨',
        돌풍: '💨',
    };

    return weatherMap[description] || '🌤️';
};
