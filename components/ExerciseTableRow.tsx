import { Exercise } from "./types";
import Link from "next/link";
export default function ExerciseTableRow({ exercise }: { exercise: Exercise }) {
    return (
        <tr
            key={exercise.exercise_id}
            className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
        >
            <td className='border border-slate-500 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {exercise.name}
            </td>
            <td className='border border-slate-500 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {exercise.affected_area_1}
            </td>
            <td className='border border-slate-500 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {exercise.affected_area_2}
            </td>
            <td className='border border-slate-500 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {exercise.url && <Link href={exercise.url}>link</Link>}
                {!exercise.url && <span>None</span>}
            </td>
            <td className='border border-slate-500 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {exercise.description}
            </td>
        </tr>
    );
}
