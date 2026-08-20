import moment from "moment";
import "moment/locale/km";
import { DATE_FORMAT } from "./formatDuration";
import { getLanguage } from '@/services/languageService';

/**
 * Set moment locale based on app language
 */
const setLocale = () => {
    const currentLanguage = getLanguage();
    switch (currentLanguage) {
        case "kh":
            moment.locale("km");
        break;

        case "en":
        default:
            moment.locale("en");
        break;
    }
};

/**
 * General format date
 */
export const formatDate = (date, format = DATE_FORMAT.DATE) => {
  if (!date) return "-";
  setLocale();
  return moment(date).format(format);
};

/**
 * Format Date Time
 */
export const formatDateTime = (date,format = DATE_FORMAT.DATE_TIME) => {
  if (!date) return "-";
  setLocale();
  return moment(date).format(format);
};

/**
 * Format Time Only
 */
export const formatTime = (date,format = DATE_FORMAT.TIME) => {
  if (!date) return "-";
  setLocale();
  return moment(date).format(format);
};

/**
 * Relative Time
 * Example:
 * 5 minutes ago
 */
export const formatFromNow = (date) => {
  if (!date) return "-";
  setLocale();
  return moment(date).fromNow();
};

/**
 * Calendar Format
 * Example:
 * Today at 10:00
 */
export const formatCalendar = (date) => {
  if (!date) return "-";
  setLocale();
  return moment(date).calendar();
};

/**
 * Convert for API
 * Example: 2026-06-16
 */
export const formatApiDate = (date,format = DATE_FORMAT.API_DATE) => {
  if (!date) return null;
  return moment(date).format(format);
};

/**
 * Validate Date
 */
export const isValidDate = (date) => {
  return moment(date).isValid();
};

/**
 * Compare Dates
 */
export const isBefore = (currentDate,compareDate) => {
  return moment(currentDate).isBefore(compareDate);
};

export const isAfter = (currentDate,compareDate) => {
  return moment(currentDate).isAfter(compareDate);
};

export const isSame = (currentDate,compareDate) => {
  return moment(currentDate).isSame(compareDate);
};

/**
 * Add Date
 */
export const addDate = (date,amount,unit = "days") => {
  return moment(date).add(amount, unit).toDate();
};

/**
 * Subtract Date
 */
export const subtractDate = (date,amount,unit = "days") => {
  return moment(date).subtract(amount, unit).toDate();
};

/**
 * Start / End Of
 */
export const startOf = (date,unit = "month") => {
  return moment(date).startOf(unit).toDate();
};

export const endOf = (date,unit = "month") => {
  return moment(date).endOf(unit).toDate();
};

/**
 * Difference Between Dates
 */
export const diffDate = (startDate,endDate,unit = "days") => {
    return moment(endDate).diff(moment(startDate), unit);
};

export const formatDynamicDate = (date) => {
  if (!date) return "-";

  setLocale();

  const m = moment(date);
  const days = moment().diff(m, "days");

  // More than 3 days -> show date
  if (days > 3) {
      return m.format("DD MMM YYYY");
  }

  // 0-3 days -> show relative time
  return m.fromNow();
};

export const formatDuration = (seconds) => {
  if (seconds == null || isNaN(seconds)) return "-";

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const parts = [];

  if (hrs > 0) parts.push(`${hrs}h`);
  if (mins > 0) parts.push(`${mins}min`);
  if (secs > 0 || parts.length === 0) parts.push(`${secs}s`);

  return parts.join(" ");
};


export default {
  formatDate,
  formatDateTime,
  formatTime,
  formatFromNow,
  formatDynamicDate,
  formatDuration
//   formatCalendar,
//   formatApiDate,
//   isValidDate,
//   isBefore,
//   isAfter,
//   isSame,
//   addDate,
//   subtractDate,
//   startOf,
//   endOf,
//   diffDate,
};