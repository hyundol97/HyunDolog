export async function fetchVersion() {
    try {
        const res = await fetch('/api/version');
        if (!res.ok) {
            return 'v0.1.0';
        }
        const data = await res.json();
        return data.version || 'v0.1.0';
    } catch {
        return 'v0.1.0';
    }
}
