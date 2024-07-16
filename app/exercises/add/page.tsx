export default function AddExercisePage() {
    return (
        <>
            <h1>Add New Exercise</h1>
            <form>
                
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' />

                <label htmlFor='description'>Description</label>
                <textarea id='description' />
                
                {/* link to an example */}
                <label htmlFor='link'>Link</label>
                <input type='text' id='link' />

                {/* area 1 - dropdown */}
                <label htmlFor='area1'>Area 1</label>
                <select id='area1'>
                    <option value=''>Select an area</option>
                    <option value='upper'>Upper</option>
                    <option value='lower'>Lower</option>
                    <option value='core'>Core</option>
                </select>

                {/* area 2 - dropdown */}
                <label htmlFor='area2'>Area 2</label>
                <select id='area2'>
                    <option value=''>Select an area</option>
                    <option value='chest'>Chest</option>
                    <option value='back'>Back</option>
                    <option value='shoulders'>Shoulders</option>
                    <option value='biceps'>Biceps</option>
                    <option value='triceps'>Triceps</option>
                    <option value='forearms'>Forearms</option>
                    <option value='quads'>Quads</option>
                    <option value='hamstrings'>Hamstrings</option>
                    <option value='calves'>Calves</option>
                    <option value='glutes'>Glutes</option>
                    <option value='abs'>Abs</option>
                    <option value='obliques'>Obliques</option>
                    <option value='lower-back'>Lower Back</option>
                </select>

                <button type='submit'>Add Exercise</button>
            </form>
        </>
        
    )
}