import { NextResponse } from 'next/server';

interface GitHubTag {
    name: string;
}

export async function getLatestTag(): Promise<string> {
    try {
        const response = await fetch('https://api.github.com/repos/hyundol97/hyundolog/tags', {
            headers: {
                Accept: 'application/vnd.github.v3+json',
                ...(process.env.GITHUB_TOKEN && {
                    Authorization: `token ${process.env.GITHUB_TOKEN}`,
                }),
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            console.error('GitHub API Error:', response.status, response.statusText);
            const errorText = await response.text();
            console.error('Error details:', errorText);
            return 'v0.1.0';
        }

        const tags = (await response.json()) as GitHubTag[];
        console.log('GitHub API success, latest tag:', tags?.[0]?.name);

        return tags?.[0]?.name ?? 'v0.1.0';
    } catch (error) {
        console.error('Fetch error:', error);
        return 'v0.1.0';
    }
}

export async function GET() {
    const version = await getLatestTag();

    return NextResponse.json<{ version: string }>({
        version,
    });
}
