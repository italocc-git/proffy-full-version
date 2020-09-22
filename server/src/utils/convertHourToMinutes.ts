export default function convertHourToMinutes(time: string){
   // 8:00(hour,minuts)

    /* First position receive hour and the second position receive minutes */
    const [hour,minutes] = time.split(':').map(Number) //convert to integer
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}