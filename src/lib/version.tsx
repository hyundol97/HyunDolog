export async function getVersion() {
    try {
        const { execSync } = await import('child_process');
        const version = execSync('git describe --tags --abbrev=0', { encoding: 'utf8' }).trim();
        return version;
    } catch {
        return 'v0.1.0';
    }
}
