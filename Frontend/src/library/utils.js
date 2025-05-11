// Formats a given date into a 24-hour time string (HH:mm) using the en-US locale
export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
