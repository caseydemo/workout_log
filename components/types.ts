export interface Exercise {
    exercise_id: number;
    name: string;
    description: string;
    affected_area_1: string;
    affected_area_2: string | null;
    url: string | null;    
}
export interface ExerciseTableProps {
    exercises: Exercise[];
}