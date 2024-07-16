import { Exercise, ExerciseTableProps } from './types';
import ExerciseTableRow from './ExerciseTableRow';
import ExerciseTableHeading from './ExerciseTableHeading';
export default function ExerciseTable({ exercises: exercises }: ExerciseTableProps) {
    const headings = ['Exercise', 'Affected Area 1', 'Affected Area 2', 'URL', 'Description'];
    return (
        <>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-40'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        {headings.map((heading) => (
                            <ExerciseTableHeading key={heading} heading={heading} />
                        ))}                        
                    </tr>
                </thead>
                <tbody>
                    {/* this is defined in app */}
                    {exercises.map((exercise: Exercise) => (
                        <ExerciseTableRow key={exercise.exercise_id} exercise={exercise} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
