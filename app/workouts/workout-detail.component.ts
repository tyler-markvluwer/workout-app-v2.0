import {Component, OnInit, Input} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {Http} from 'angular2/http'
import {HTTP_PROVIDERS} from 'angular2/http'

import {SpinnerComponent} from '../shared/spinner.component'
import {WorkoutService} from './workout.service'
import {Workout} from './workout'

@Component({
    selector: 'workout-detail',
    templateUrl: '/app/workouts/workout-detail.component.html',
    directives: [ROUTER_DIRECTIVES, SpinnerComponent],
    providers: [WorkoutService, Http, HTTP_PROVIDERS]
})
export class WorkoutDetailComponent implements OnInit {
    isLoading = true;
    @Input('workout-name') workoutName: string;
    workout: Workout;
    
    
    constructor(private _workoutService: WorkoutService) {}
    
    ngOnInit() {
        this._workoutService.getWorkout(this.workoutName)
            .subscribe(workouts => {
                // console.log(workouts);
                this.workout = workouts;
            })
    }
}