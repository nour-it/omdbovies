

export function heure(timestamp) {
    const date = new Date(timestamp);

    // Extract and format hour and minute
    const hours = date.getHours().toString().padStart(2, '0'); // Formats hour to 'HH' format
    const minutes = date.getMinutes().toString().padStart(2, '0'); //
    return `${hours}:${minutes}`
}