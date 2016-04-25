System.register(['angular2/http', 'rxjs/add/operator/map', 'rxjs/add/observable/fromArray', 'angular2/core', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var http_1, core_1, Observable_1;
    var WorkoutService, workouts;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            WorkoutService = (function () {
                function WorkoutService(_http) {
                    this._http = _http;
                    this.mockData = workouts;
                }
                WorkoutService.prototype.getWorkouts = function () {
                    return Observable_1.Observable.fromArray(this.mockData);
                };
                WorkoutService.prototype.getWorkout = function (day) {
                    console.log("getting workout:", day);
                    var workoutForDay = this.mockData.filter(function (workout) { return workout.workout_name.indexOf(day) >= 0; });
                    return Observable_1.Observable.fromArray(workoutForDay);
                };
                WorkoutService.prototype.getTotalSetsForWorkout = function (day) {
                    var totalSets = 0;
                    var workoutForDay = this.mockData.filter(function (workout) { return workout.workout_name.indexOf(day) >= 0; });
                    var workout = workoutForDay[0];
                    var length = workout.exercises.length;
                    for (var i = 0; i < length; ++i) {
                        var exercise = workout.exercises[i];
                        totalSets += exercise.sets;
                    }
                    return Observable_1.Observable.fromArray([totalSets]);
                };
                WorkoutService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WorkoutService);
                return WorkoutService;
            }());
            exports_1("WorkoutService", WorkoutService);
            workouts = [
                {
                    "workout_name": "Day 30 - Back",
                    "exercises": [
                        {
                            "name": "Close-Grip Front Lat Pulldown",
                            "sets": 4,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 60
                        },
                        {
                            "name": "Lying T-Bar Row",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 60
                        },
                        {
                            "name": "One-Arm Dumbbell Row",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 60
                        },
                        {
                            "name": "Underhand Cable Pulldowns",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 60
                        },
                        {
                            "name": "Seated Cable Rows",
                            "sets": 7,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 30
                        }
                    ]
                },
                {
                    "workout_name": "Day 31 - Arms",
                    "exercises": [
                        {
                            "name": "Triceps Pushdown - Rope Attachment",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 60,
                            "warmup": true
                        },
                        {
                            "name": "Lying T-Bar Row",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 60
                        },
                        {
                            "name": "Close-Grip Barbell Bench Press",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 60
                        },
                        {
                            "name": "Dip Machine",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 60
                        },
                        {
                            "name": "Triceps Pushdown",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 60
                        },
                        {
                            "name": "Lying Triceps Press",
                            "sets": 7,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 30
                        },
                        {
                            "name": "EZ-Bar Curl",
                            "sets": 4,
                            "reps_min": 12,
                            "reps_max": 15,
                            "rest": 60
                        },
                        {
                            "name": "Dumbbell Alternate Bicep Curl",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 60
                        },
                        {
                            "name": "Spider Curl",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 10,
                            "rest": 60
                        },
                        {
                            "name": "Machine Preacher Curls",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 60
                        },
                        {
                            "name": "Reverse Barbell Curl",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 12,
                            "rest": 60
                        }
                    ]
                },
                {
                    "workout_name": "Day 32 - Rest",
                    "exercises": [
                        {
                            "name": "Rest",
                            "sets": 0,
                            "reps_min": 0,
                            "reps_max": 0,
                            "rest": 0
                        }
                    ]
                },
                {
                    "workout_name": "Day 33 - Legs",
                    "exercises": [
                        {
                            "name": "Leg Extensions",
                            "sets": 4,
                            "reps_min": 10,
                            "reps_max": 10,
                            "rest": 60
                        },
                        {
                            "name": "Leg Press",
                            "sets": 3,
                            "reps_min": 15,
                            "reps_max": 20,
                            "rest": 60
                        },
                        {
                            "name": "Hack Squat",
                            "sets": 3,
                            "reps_min": 8,
                            "reps_max": 10,
                            "rest": 60
                        },
                        {
                            "name": "Squat",
                            "sets": 4,
                            "reps_min": 8,
                            "reps_max": 10,
                            "rest": 60
                        },
                        {
                            "name": "Stationary Barbell Lunge",
                            "sets": 2,
                            "reps_min": 8,
                            "reps_max": 8,
                            "rest": 60
                        },
                        {
                            "name": "Lying Leg Curls",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 10,
                            "rest": 60
                        },
                        {
                            "name": "Seated Leg Curl",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 10,
                            "rest": 60
                        },
                        {
                            "name": "Standing Leg Curl",
                            "sets": 3,
                            "reps_min": 10,
                            "reps_max": 10,
                            "rest": 60
                        }
                    ]
                },
                {
                    "exercises": [
                        {
                            "sets_max": 4,
                            "name": "Smith Machine Overhead Shoulder Press",
                            "desc": "Smith Machine Overhead Shoulder Press 4 sets of 6-10 reps",
                            "sets": 4,
                            "sets_min": 4,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 6
                        },
                        {
                            "sets_max": 4,
                            "name": "Side Lateral Raise",
                            "desc": "Side Lateral Raise 4 sets of 10 reps",
                            "sets": 4,
                            "sets_min": 4,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 10
                        },
                        {
                            "sets_max": 3,
                            "name": "Standing Front Barbell Raise Over Head",
                            "desc": "Standing Front Barbell Raise Over Head 3 sets of 10 reps",
                            "sets": 3,
                            "sets_min": 3,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 10
                        },
                        {
                            "sets_max": 4,
                            "name": "Seated Bent-Over Rear Delt Raise",
                            "desc": "Seated Bent-Over Rear Delt Raise 4 sets of 10 reps",
                            "sets": 4,
                            "sets_min": 4,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 10
                        },
                        {
                            "sets_max": 4,
                            "name": "Cable Rear Delt Fly",
                            "desc": "Cable Rear Delt Fly 4 sets of 10 reps",
                            "sets": 4,
                            "sets_min": 4,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 10
                        },
                        {
                            "sets_max": 7,
                            "name": "Standing Low-Pulley Deltoid Raise",
                            "desc": "Standing Low-Pulley Deltoid Raise 7 sets of 10 reps, 30 seconds rest between sets",
                            "sets": 7,
                            "sets_min": 7,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 10
                        },
                        {
                            "sets_max": 5,
                            "name": "Barbell Shrug",
                            "desc": "Barbell Shrug 5 sets of 12 reps",
                            "sets": 5,
                            "sets_min": 5,
                            "reps_max": 12,
                            "rest": 60,
                            "reps_min": 12
                        }
                    ],
                    "workout_name": "Day 34: Shoulders"
                },
                {
                    "exercises": [{
                            "name": "Rest",
                            "sets": 0,
                            "reps_min": 0,
                            "reps_max": 0,
                            "rest": 0
                        }],
                    "workout_name": "Day 35: Rest"
                },
                {
                    "exercises": [
                        {
                            "sets_max": 4,
                            "name": "Incline Dumbbell Press",
                            "desc": "Incline Dumbbell Press 3-4 sets of 10-15 reps",
                            "sets": 4,
                            "sets_min": 3,
                            "reps_max": 15,
                            "rest": 60,
                            "reps_min": 10
                        },
                        {
                            "sets_max": 4,
                            "name": "Incline Dumbbell Flye",
                            "desc": "Incline Dumbbell Flye 3-4 sets of 10-15 reps",
                            "sets": 4,
                            "sets_min": 3,
                            "reps_max": 15,
                            "rest": 60,
                            "reps_min": 10
                        },
                        {
                            "sets_max": 3,
                            "name": "Leverage Chest Press",
                            "desc": "Leverage Chest Press 3 sets of 10-12 reps, plus 10 partial reps on last set",
                            "sets": 3,
                            "sets_min": 3,
                            "reps_max": 12,
                            "rest": 60,
                            "reps_min": 10
                        },
                        {
                            "sets_max": 7,
                            "name": "Cable Cross-Over",
                            "desc": "Cable Cross-Over 7 sets of 10-15 reps, 30 seconds rest between sets",
                            "sets": 7,
                            "sets_min": 7,
                            "reps_max": 15,
                            "rest": 60,
                            "reps_min": 10
                        }
                    ],
                    "workout_name": "Day 36: Chest"
                },
                {
                    "exercises": [
                        {
                            "sets_max": 4,
                            "name": "Underhand Cable Pull-Downs",
                            "desc": "Underhand Cable Pull-Downs 3-4 sets of 8-10 reps",
                            "sets": 4,
                            "sets_min": 3,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 8
                        },
                        {
                            "sets_max": 4,
                            "name": "Deadlift",
                            "desc": "Deadlift 4 sets of 8-10 reps",
                            "sets": 4,
                            "sets_min": 4,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 8
                        },
                        {
                            "sets_max": 3,
                            "name": "One-Arm Dumbbell Row",
                            "desc": "One-Arm Dumbbell Row 3 sets of 8-10 reps",
                            "sets": 3,
                            "sets_min": 3,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 8
                        },
                        {
                            "sets_max": 3,
                            "name": "Reverse Grip Bent-Over Rows",
                            "desc": "Reverse Grip Bent-Over Rows 3 sets of 8-10 reps",
                            "sets": 3,
                            "sets_min": 3,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 8
                        },
                        {
                            "sets_max": 3,
                            "name": "T-Bar Rows",
                            "desc": "T-Bar Rows 3 sets of 8-10 reps",
                            "sets": 3,
                            "sets_min": 3,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 8
                        },
                        {
                            "sets_max": 4,
                            "name": "Seated Cable Row with Rope",
                            "desc": "Seated Cable Row with Rope 4 sets of 8-10 reps",
                            "sets": 4,
                            "sets_min": 4,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 8
                        },
                        {
                            "sets_max": 4,
                            "name": "Back Extension",
                            "desc": "Back Extension 4 sets of 8-10 reps",
                            "sets": 4,
                            "sets_min": 4,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 8
                        },
                        {
                            "sets_max": 7,
                            "name": "Rope Straight-Arm Pulldown",
                            "desc": "Rope Straight-Arm Pulldown 7 sets of 8-10 reps, 30 seconds rest between sets",
                            "sets": 7,
                            "sets_min": 7,
                            "reps_max": 10,
                            "rest": 60,
                            "reps_min": 8
                        }
                    ],
                    "workout_name": "Day 37: Back"
                }
            ];
        }
    }
});
//# sourceMappingURL=workout.service.js.map