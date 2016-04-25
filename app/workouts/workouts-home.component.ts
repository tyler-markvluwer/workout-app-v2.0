import {Component, OnInit} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {Http} from 'angular2/http'
import {HTTP_PROVIDERS} from 'angular2/http'
import {Observable} from 'rxjs/Observable';

import {SpinnerComponent} from '../shared/spinner.component'
import {PaginationComponent} from '../shared/pagination.component'
import {WorkoutService} from './workout.service'
import {WorkoutDetailComponent} from './workout-detail.component'

@Component({
    templateUrl: 'app/workouts/workouts-home.component.html',
    directives: [WorkoutDetailComponent, ROUTER_DIRECTIVES, SpinnerComponent, PaginationComponent],
    providers: [WorkoutService, Http, HTTP_PROVIDERS],
    styles: []
})

export class WorkoutsHomeComponent implements OnInit{
    workouts: Array<any> = [];
    
    constructor(private _workoutService: WorkoutService) {}
    
    ngOnInit() {
        this._workoutService.getWorkouts()
            .subscribe(workouts => {
                // console.log("here");
                // console.log(workouts);
                this.workouts.push(workouts);
            });
    }
}