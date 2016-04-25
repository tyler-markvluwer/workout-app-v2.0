System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Workout;
    return {
        setters:[],
        execute: function() {
            Workout = (function () {
                function Workout(workoutJson) {
                    this.currIndex = 0;
                    this.workout_name = workoutJson.workout_name;
                    this.exercises = workoutJson.exercises;
                }
                Workout.prototype.getCurrentExercise = function () {
                    return this.exercises[this.currIndex];
                };
                Workout.prototype.setCurrentExerciseByName = function (exerciseName) {
                    //
                };
                Workout.prototype.nextExercise = function () {
                    this.currIndex++;
                };
                return Workout;
            }());
            exports_1("Workout", Workout);
        }
    }
});
//# sourceMappingURL=workout.js.map