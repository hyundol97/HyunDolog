'use client';

import { useState, useEffect } from 'react';
import { getWeatherIcon } from '@/lib/weatherIcons';

interface WeatherData {
    temperature: number;
    description: string;
    location: string;
}

export default function WeatherWidget() {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getWeather = async () => {
            try {
                // 브라우저 환경 체크
                if (typeof window === 'undefined' || !navigator.geolocation) {
                    throw new Error('위치 서비스를 사용할 수 없습니다');
                }

                const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, {
                        timeout: 10000,
                        enableHighAccuracy: false,
                    });
                });

                const { latitude, longitude } = position.coords;
                const response = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`);

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || '날씨 정보를 가져올 수 없습니다');
                }

                const weatherData = await response.json();
                setWeather(weatherData);
            } catch (error) {
                console.error('날씨 정보를 가져올 수 없습니다:', error);
            } finally {
                setIsLoading(false);
            }
        };

        getWeather();
    }, []);

    if (isLoading) {
        return <div className="text-sm text-gray-600 dark:text-gray-400">날씨 로딩중...</div>;
    }

    if (!weather) {
        return null;
    }

    return (
        <div className="fixed top-4 right-4 z-50 text-sm text-gray-700 dark:text-gray-300 text-right bg-gray-200/80 dark:bg-stone-900/80 backdrop-blur-sm rounded-xl px-3 py-2">
            <div className="font-medium">{weather.location}</div>
            <div className="flex items-center justify-end gap-1">
                <span>
                    {weather.temperature}°C · {getWeatherIcon(weather.description)}
                </span>
            </div>
        </div>
    );
}
