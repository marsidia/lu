export const getDisplayDuration = (duration) => {
    let totalSeconds = duration
    const hours = Math.floor( totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    return (hours>0 ? hours + " hr ": "") + (minutes > 0 ?  minutes + " min" : "")
}

export const getDisplayTime = (timeStr) => {
    console.log(timeStr);
    const t2 = "20230429T172000"

    // const t = timeStr.replace(/(\d{4})(\d{2})(\d{5})(\d{2})(\d{2})/, "$1-$2-$3:$4:$5")
    const t = timeStr.replace(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/, "$1-$2-$3T$4:$5:$6")
    

   console.log( t)
    const date = new Date(t)
    // console.log(date.toString());
   
    return date.getHours() + ":" + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes())
}