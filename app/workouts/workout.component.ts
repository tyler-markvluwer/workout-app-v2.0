import {Component, OnInit, Input} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router'
import {Http} from 'angular2/http'
import {HTTP_PROVIDERS} from 'angular2/http'

import {SpinnerComponent} from '../shared/spinner.component'
import {WorkoutService} from './workout.service'
import {Workout, Exercise} from './workout'
import {WorkoutDetailComponent} from './workout-detail.component'
import {TimerComponent} from '../shared/timer.component'
import {AppModel} from '../model/app.model'

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
    setsRemaining: number; // sets remaining for current exercise
    totalSetsCompleted: number = 0; // total sets for entire workout
    totalSets: number;
    
    constructor(
        private _workoutService: WorkoutService,
        private _routeParams: RouteParams)
    {
        
    }
    
    ngOnInit() {
        if (this.workoutName) {
            this._workoutService.getWorkout(this.workoutName)
                .subscribe(workout => {
                    // console.log("getting workout:", this.workoutName);
                    // console.log(workout);
                    
                    this.workout = workout;
                    this.setCurrExercise(workout.exercises[0].name);
                })
            this._workoutService.getTotalSetsForWorkout(this.workoutName)
                .subscribe(sets => {
                    console.log("total sets:", sets);
                    this.totalSets = sets;
                })
        }
    }
    
    setCurrExercise(excName: string) {
        console.log("setting exercis:", excName);
        this.currExerciseName = excName;
        this.currExercise = this.workout.exercises.filter(exercise => exercise.name == this.currExerciseName)[0];
        this.setsRemaining = this.currExercise.sets;
    }

    setToNextExercise() {
        var currIndex: number = this.getCurrExerciseIndex();
        if (currIndex < this.workout.exercises.length - 1) { // second to last
            var nextExercise: Exercise = this.workout.exercises[currIndex + 1];
            this.setCurrExercise(nextExercise.name);
        }
    }

    getCurrExerciseIndex() {
        for (var i = 0; i < this.workout.exercises.length; ++i) {
            var exercise: Exercise = this.workout.exercises[i];
            if (exercise.name == this.currExercise.name) {
                return i;
            }
        }

        return null;
    }
    
    decSetsRemaining() {
        console.log(this.totalSets, this.totalSetsCompleted);
        if (this.setsRemaining) {
            this.setsRemaining--;
            this.totalSetsCompleted++;
        }
    }
}