import ExerciseTable from "@/components/ExerciseTable";
import { getAllExercises } from "@/lib/db";
const exercises = await getAllExercises();

export default function ExercisesPage() {
    return (
        <>            
            <h2>Exercises</h2>
            <ExerciseTable exercises={exercises} />
        </>
    );
}
