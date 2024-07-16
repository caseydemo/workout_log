export default function Header() {
    return (
        <header className='flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 dark:text-gray-400'>
            <h1 className='text-2xl font-bold'>Workout Log</h1>
            <nav>
                <ul className='flex space-x-4'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/exercises'>Exercises</a></li>
                    <li><a href='/exercises/add'>Add Exercise</a></li>
                    <li><a href='/workouts'>Workouts</a></li>
                </ul>
            </nav>
        </header>
    )
}