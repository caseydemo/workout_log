export default function ExerciseTableHeading({ heading }: { heading: string }) {
    return (
        <th className='border border-slate-500 px-6 py-3'>            
            {heading}
        </th>
    );

}