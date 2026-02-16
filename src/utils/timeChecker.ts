export const isWorkHour = (): boolean => {
    const now = new Date();
    const day = now.getDay();
    console.log(`[DEBUG] Sistem Günü: ${day}`);
    const currentTime = now.getHours() + (now.getMinutes() / 60);

if (day === 0 || day === 6) return false;
        return currentTime >= 8.5 && currentTime < 17.5;
};

export const isMonday = (): boolean => {
    return new Date().getDay() === 1;
};

export const isHoliday = (): boolean => {
    const today = new Date().toISOString().split('T')[0];
    const holidays = ['2026-04-23', '2026-05-01', '2026-05-19']; 
    return holidays.includes(today);
};

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));