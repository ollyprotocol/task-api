let tasks = [
    { id: 1, title: "Complete API Task", description: "Build and test the RESTful API" },
    { id: 2, title: "Review Code", description: "Check for bugs and optimize performance" },
    { id: 3, title: "Write Documentation", description: "Create a README with API details" }
]; // In-memory array for storing tasks

// Generate a unique ID for tasks
const generateTaskId = () => {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
};

// Get all tasks
export const getTasks = (req, res) => {
    res.status(200).json(tasks);
};

// Add a new task
export const addTask = (req, res) => {
    const { title, description } = req.body;

    // Validate request body
    if (!title || !description) {
        return res.status(400).json({
            errors: [
                { location: "body", msg: "Title is required", path: "title", type: "field" },
                { location: "body", msg: "Description is required", path: "description", type: "field" }
            ]
        });
    }

    // Create the new task object
    const newTask = {
        id: generateTaskId(),
        title,
        description,
    };

    // Add the new task to the tasks array
    tasks.push(newTask);
    
    // Send the response back with the newly created task
    res.status(201).json(newTask);
};
