import {Component, Input, OnInit} from 'angular2/core'
import {Observable} from 'rxjs'

import {SpinnerComponent} from '../shared/spinner.component'

@Component({
    selector: 'timer',
    templateUrl: '/app/shared/timer.component.html'
})
export class TimerComponent implements OnInit {
    @Input('starting-time') startingTime: number; // seconds
    currentTime: number;
    isRunning: boolean = false;
    timerObservable: Observable<any>;
    interval;
    
    constructor() {
    }
    
    toggleTimer() {
        if (!this.isRunning) {
            this.interval = setInterval(() => {
                this.currentTime--
            }, 1000);
        }
        else {
            clearInterval(this.interval);
        }
        
        this.isRunning = !this.isRunning;
    }
    
    initTimer(time: number) {
        clearInterval(this.interval);
        this.isRunning = false;
        this.currentTime = time;
    }
    
    resetTimer() {
        this.initTimer(this.startingTime);
    }
    
    ngOnInit() {
        this.currentTime = this.startingTime;
        console.log(this.currentTime);
    }
}