import { NextResponse } from 'next/server';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const s3 = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

const CDN = 'https://d3pm7uvxl6riza.cloudfront.net';

const categoryMap: Record<string, string> = {
    travel: '여행',
    sports: '운동',
    reading: '독서',
};

export async function GET() {
    const command = new ListObjectsV2Command({
        Bucket: 'hyundolog',
        Prefix: 'interest/',
    });

    const data = await s3.send(command);

    const items = (data.Contents ?? [])
        .filter(obj => obj.Key && obj.Key !== 'interest/')
        .map((obj, index) => {
            const filename = obj.Key!.replace('interest/', '');
            const prefix = filename.split('_')[0];
            return {
                id: index + 1,
                category: categoryMap[prefix] ?? '기타',
                image: `${CDN}/interest/${filename}`,
            };
        });

    return NextResponse.json(items);
}
