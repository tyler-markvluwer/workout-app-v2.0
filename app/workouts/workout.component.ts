import {Component, OnInit, Input} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router'
import {Http} from 'angular2/http'
import {HTTP_PROVIDERS} from 'angular2/http'

import {SpinnerComponent} from '../shared/spinner.component'
import {WorkoutService} from './workout.service'
import {Workout, Exercise} from './workout'
import {WorkoutDetailComponent} from './workout-detail.component'
import {TimerComponent} from '../shared/timer.component'

@Component({
    templateUrl: '/app/workouts/workout.component.html',
    directives: [TimerComponent, WorkoutDetailComponent, ROUTER_DIRECTIVES, SpinnerComponent],
    providers: [WorkoutService, Http, HTTP_PROVIDERS]
})
export class WorkoutComponent implements OnInit {
    isLoading = true;
    workout: Workout;
    workoutName: string = decodeURIComponent(this._routeParams.get("name"));
    currExerciseName: string;
    currExercise: Exercise;
    setsRemaining: number;
    
    constructor(
        private _workoutService: WorkoutService,
        private _routeParams: RouteParams)
    {
        
    }
    
    ngOnInit() {
        if (this.workoutName) {
            this._workoutService.getWorkout(name)
                .subscribe(workout => {
                    // console.log(workout);
                    this.workout = workout;
                    this.setCurrExercise(workout.exercises[0].name);
                })
        }
    }
    
    setCurrExercise(excName: string) {
        console.log("setting exercis:", excName);
        this.currExerciseName = excName;
        this.currExercise = this.workout.exercises.filter(exercise => exercise.name == this.currExerciseName)[0];
        this.setsRemaining = this.currExercise.sets;
    }
    
    decSetsRemaining() {
        if (this.setsRemaining) {
            this.setsRemaining--;
        }
    }
}