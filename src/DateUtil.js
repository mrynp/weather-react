export default class DateUtil {
  constructor(date) {
    this.date = date;
  }

  day(short = false) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (short) {
      return days[this.date.getDay()].substring(0, 3);
    } else {
      return days[this.date.getDay()];
    }
  }

  time() {
    let minutes = this.date.getMinutes();
    if (minutes < 10) minutes = `${0}minutes`;

    return `${this.date.getHours()}:${minutes}`;
  }

  currentTime() {
    return `${this.time()}`;
  }

  currentHour() {
    let hour = this.date.getHours();

    // if (hour > 12) {
    //   hour = hour - 12;
    //   return hour;
    // } else {
    //   return hour;
    // }

    return hour;
  }

  currentMinute() {
    let hour = this.date.getHours();
    let minutes = this.date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;

    // if (hour > 12) {
    //   return `${minutes} PM`;
    // } else {
    //   return `${minutes} AM`;
    // }
    return minutes;
  }

  currentDay() {
    return `${this.day()}`;
  }
}
