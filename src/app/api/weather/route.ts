import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    if (!lat || !lon) {
        return NextResponse.json({ error: '위도와 경도가 필요합니다' }, { status: 400 });
    }

    try {
        const API_KEY = process.env.WEATHER_API_KEY;

        if (!API_KEY) {
            console.error('WEATHER_API_KEY가 설정되지 않았습니다');
            return NextResponse.json({ error: 'API 키가 설정되지 않았습니다' }, { status: 500 });
        }

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error('OpenWeatherMap API 에러:', response.status, errorData);
            return NextResponse.json(
                {
                    error: `날씨 API 에러: ${errorData.message || response.statusText}`,
                },
                { status: response.status }
            );
        }

        const data = await response.json();
        
        // 더 정확한 위치 정보를 위해 Reverse Geocoding 시도
        let locationName = data.name;
        try {
            const geoResponse = await fetch(
                `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
            );
            if (geoResponse.ok) {
                const geoData = await geoResponse.json();
                if (geoData[0]?.local_names?.ko) {
                    locationName = geoData[0].local_names.ko;
                } else if (geoData[0]?.name) {
                    locationName = geoData[0].name;
                }
            }
        } catch (geoError) {
            console.log('Reverse geocoding 실패, 기본 위치 사용');
        }

        return NextResponse.json({
            temperature: Math.round(data.main.temp),
            description: data.weather[0].description,
            location: locationName,
        });
    } catch (error) {
        console.error('날씨 API 에러:', error);
        return NextResponse.json({ error: '날씨 정보를 가져올 수 없습니다' }, { status: 500 });
    }
}
