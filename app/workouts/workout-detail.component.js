System.register(['angular2/core', 'angular2/router', 'angular2/http', '../shared/spinner.component', './workout.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, http_2, spinner_component_1, workout_service_1;
    var WorkoutDetailComponent;
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
            }],
        execute: function() {
            WorkoutDetailComponent = (function () {
                function WorkoutDetailComponent(_workoutService) {
                    this._workoutService = _workoutService;
                    this.isLoading = true;
                }
                WorkoutDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._workoutService.getWorkout(this.workoutName)
                        .subscribe(function (workouts) {
                        // console.log(workouts);
                        _this.workout = workouts;
                    });
                };
                __decorate([
                    core_1.Input('workout-name'), 
                    __metadata('design:type', String)
                ], WorkoutDetailComponent.prototype, "workoutName", void 0);
                WorkoutDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'workout-detail',
                        templateUrl: '/app/workouts/workout-detail.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent],
                        providers: [workout_service_1.WorkoutService, http_1.Http, http_2.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [workout_service_1.WorkoutService])
                ], WorkoutDetailComponent);
                return WorkoutDetailComponent;
            }());
            exports_1("WorkoutDetailComponent", WorkoutDetailComponent);
        }
    }
});
//# sourceMappingURL=workout-detail.component.js.map