import { NextResponse } from 'next/server';

interface GitHubTag {
    name: string;
}

export async function getLatestTag(): Promise<string> {
    try {
        const response = await fetch('https://api.github.com/repos/hyundol97/HyunDolog/tags', {
            headers: {
                Accept: 'application/vnd.github.v3+json',
                ...(process.env.GITHUB_TOKEN && {
                    Authorization: `token ${process.env.GITHUB_TOKEN}`,
                }),
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            // GitHub API 에러 대비
            return 'v0.1.0';
        }

        const tags = (await response.json()) as GitHubTag[];

        return tags?.[0]?.name ?? 'v0.1.0';
    } catch {
        return 'v0.1.0';
    }
}

export async function GET() {
    const version = await getLatestTag();

    return NextResponse.json<{ version: string }>({
        version,
    });
}
