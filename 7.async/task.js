class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback, id) {
        
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        this.alarmCollection.push({ time, callback, canCall: true });

        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
            return;
        }

    }

    removeClock(time) {
        const initialLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
        return this.alarmCollection.length !== initialLength;
    }
    
   
    getCurrentFormattedTime() {
        const now = new Date();
        return now.toTimeString().slice(0, 5);
    }

    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
