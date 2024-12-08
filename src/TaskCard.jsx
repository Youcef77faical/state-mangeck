
export default function TaskCard({ task }) {
    return (
        <div className="bg-white p-4 shadow-lg border border-gray-300 rounded-md flex justify-between items-center space-x-4">
            <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-800">{task.title}</h1>
                <h2 className={`text-sm mt-2 ${task.isFinished ? 'text-green-500' : 'text-red-500'}`}>
                    {task.isFinished ? 'Completed' : 'Pending'}
                </h2>
            </div>
            <div>
                <input
                    type="checkbox"
                    checked={task.isFinished}
                    disabled
                    className="h-6 w-6 text-green-500"
                />
            </div>
        </div>
    );
}
