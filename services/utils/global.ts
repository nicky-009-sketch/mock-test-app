export class globalModel {

  convertMillisecondsToTime = (milliseconds: number) => {
    if (milliseconds < 0) return "Invalid input";

    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    if (hours > 0) {
      return `${hours} Hour${hours > 1 ? 's' : ''}`;
    } else if (minutes > 0) {
      return `${minutes} Minte${minutes > 1 ? 's' : ''}`;
    } else {
      return '0 Minte';
    }
  };

}