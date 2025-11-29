export function getManAge(birth: string) {
    const today = new Date();
    const [y, m, d] = birth.split('.').map(Number);

    let age = today.getFullYear() - y;

    const hasBirthdayPassed =
        today.getMonth() + 1 > m || (today.getMonth() + 1 === m && today.getDate() >= d);

    if (!hasBirthdayPassed) age--;

    return age;
}
