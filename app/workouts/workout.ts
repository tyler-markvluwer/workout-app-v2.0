export interface Exercise {
    name: string,
    sets: number,
    reps_min: number,
    reps_max: number,
    rest: number
}

export interface Workout {
    workout_name: string,
    exercises: Array<Exercise>;
}