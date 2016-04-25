export interface Exercise {
    name: string,
    sets: number,
    reps_min: number,
    reps_max: number,
    rest: number
}

export class Workout {
    currIndex: number = 0;
    workout_name: string;
    exercises: Array<Exercise>;
    
    constructor(workoutJson: any) {
        this.workout_name = workoutJson.workout_name;
        this.exercises = workoutJson.exercises;
    }
    
    getCurrentExercise() {
        return this.exercises[this.currIndex];
    }
    
    setCurrentExerciseByName(exerciseName: string) {
        //
    }
    
    nextExercise() {
        this.currIndex++;
    }
}