class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null; 
    }

    addClock(time, callback) {
        if (!callback || !time) {
            throw new Error('Отсутствуют обязательные аргументы')
        }

        if(this.alarmCollection.some(e => e.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        let canCall = true;
        const alarm = {callback, time, canCall}
        this.alarmCollection.push(alarm)
    }

    removeClock(time) {
        return this.alarmCollection = this.alarmCollection.filter( alarm => alarm.time !== time )
    }

    getCurrentFormattedTime() {
        const date = new Date()
        return date.toLocaleTimeString('ru-Ru', {hour: '2-digit', minute: '2-digit'});
    }

    start() {
        if (this.intervalId) {
            return
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((e) => {
                if (e.time === this.getCurrentFormattedTime() && e.canCall){
                    e.canCall = false;
                    e.callback()
                }
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(e => e.canCall = true)
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
