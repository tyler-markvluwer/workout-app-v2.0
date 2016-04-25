System.register(['angular2/core', 'angular2/router', 'angular2/http', '../shared/spinner.component', './workout.service', './workout-detail.component', '../shared/timer.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, http_2, spinner_component_1, workout_service_1, workout_detail_component_1, timer_component_1;
    var WorkoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (workout_service_1_1) {
                workout_service_1 = workout_service_1_1;
            },
            function (workout_detail_component_1_1) {
                workout_detail_component_1 = workout_detail_component_1_1;
            },
            function (timer_component_1_1) {
                timer_component_1 = timer_component_1_1;
            }],
        execute: function() {
            WorkoutComponent = (function () {
                function WorkoutComponent(_workoutService, _routeParams) {
                    this._workoutService = _workoutService;
                    this._routeParams = _routeParams;
                    this.isLoading = true;
                    this.workoutName = decodeURIComponent(this._routeParams.get("name"));
                    this.totalSetsCompleted = 0; // total sets for entire workout
                }
                WorkoutComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.workoutName) {
                        this._workoutService.getWorkout(this.workoutName)
                            .subscribe(function (workout) {
                            // console.log("getting workout:", this.workoutName);
                            // console.log(workout);
                            _this.workout = workout;
                            _this.setCurrExercise(workout.exercises[0].name);
                        });
                        this._workoutService.getTotalSetsForWorkout(this.workoutName)
                            .subscribe(function (sets) {
                            console.log("total sets:", sets);
                            _this.totalSets = sets;
                        });
                    }
                };
                WorkoutComponent.prototype.setCurrExercise = function (excName) {
                    var _this = this;
                    console.log("setting exercis:", excName);
                    this.currExerciseName = excName;
                    this.currExercise = this.workout.exercises.filter(function (exercise) { return exercise.name == _this.currExerciseName; })[0];
                    this.setsRemaining = this.currExercise.sets;
                };
                WorkoutComponent.prototype.decSetsRemaining = function () {
                    if (this.setsRemaining) {
                        this.setsRemaining--;
                        this.totalSetsCompleted++;
                    }
                };
                WorkoutComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/workouts/workout.component.html',
                        directives: [timer_component_1.TimerComponent, workout_detail_component_1.WorkoutDetailComponent, router_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent],
                        providers: [workout_service_1.WorkoutService, http_1.Http, http_2.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [workout_service_1.WorkoutService, router_1.RouteParams])
                ], WorkoutComponent);
                return WorkoutComponent;
            }());
            exports_1("WorkoutComponent", WorkoutComponent);
        }
    }
});
//# sourceMappingURL=workout.component.js.map