let tasks = [
    { id: 1, title: "Complete API Task", description: "Build and test the RESTful API" },
    { id: 2, title: "Review Code", description: "Check for bugs and optimize performance" },
    { id: 3, title: "Write Documentation", description: "Create a README with API details" }
]; // In-memory array for storing tasks

// Get all tasks
export const getTasks = (req, res) => {
    res.json(tasks);
};

// Add a new task
export const addTask = (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required" });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};
