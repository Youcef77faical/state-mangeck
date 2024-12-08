
import TaskCard from "./TaskCard";

export default function TaskList({ tasks }) {
    return (
        <div className="space-y-4 mb-8">
            {tasks.map((task) => (
                <TaskCard task={task} key={task.id} />
            ))}
        </div>
    );
}
