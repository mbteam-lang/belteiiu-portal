export const formatDuration = (seconds) => {
    const sec = Number(seconds);

    if (Number.isNaN(sec)) return '0:00';

    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = Math.floor(sec % 60);

    if (hrs > 0) {
        return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    return `${mins}:${String(secs).padStart(2, '0')}`;
};

export const DATE_FORMAT = {
    DATE: "DD/MM/YYYY",
    DATE_US: "MM/DD/YYYY",

    DATE_TIME: "DD/MM/YYYY HH:mm",
    DATE_TIME_SECOND: "DD/MM/YYYY HH:mm:ss",

    TIME: "HH:mm",
    TIME_12H: "hh:mm A",

    FULL_DATE: "dddd, DD MMMM YYYY",
    FULL_DATE_TIME: "dddd, DD MMMM YYYY HH:mm",

    API_DATE: "YYYY-MM-DD",
    API_DATE_TIME: "YYYY-MM-DD HH:mm:ss",
};