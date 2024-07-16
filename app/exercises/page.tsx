import ExerciseTable from "@/components/ExerciseTable";
import { getAllExercises } from "@/lib/db";
const exercises = await getAllExercises();

export default function ExercisesPage() {
    return (
        <>
            <h1>yasss exercises</h1>
            <ExerciseTable exercises={exercises} />
        </>
    );
}
