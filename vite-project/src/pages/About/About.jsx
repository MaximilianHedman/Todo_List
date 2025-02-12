import React from 'react'
import './About.scss';

const About = () => {
    return (
        <main className='about-container'>
            <section className='about-section'>
                <h1>Information about the Todo App</h1>
            </section>
            <section className='about-section'>
                <h2>What is the Todo App?</h2>
                <p>The Todo App is a simple yet powerful task management tool designed to help you organize, track, and complete your tasks efficiently. Whether you're managing daily chores, work assignments, or personal projects, this app ensures you stay productive and never forget an important task again.</p>
            </section>
            <section className='about-section'>
                <h2>How It Works 🛠️</h2>
                <p>
                    The Todo App is designed with a clear and intuitive workflow:
                </p>
                <ol>
                    <li>
                        1️⃣ Add a Task – Type in your task and hit "Add" to create a new item on your list.
                    </li>
                    <li>
                        2️⃣ Start the Task – Click "Start" to begin working on a task. This marks it as ongoing, turning the task text orange and displaying a ⏳ indicator.
                    </li>
                    <li>
                        3️⃣ Complete the Task – Once finished, click "Done", turning the task text green and removing the ongoing status. A ✔️ checkmark is added to indicate completion.
                    </li>
                    <li>
                        4️⃣ Undo if Needed – If a task was marked done by mistake, click "Undo" to reset it.
                    </li>
                    <li>
                        5️⃣ Delete Completed Tasks – Tasks can only be deleted once they are marked done, preventing accidental removal of unfinished work.
                    </li>
                </ol>
            </section>
            <section className='about-section'>
                <h2>Features 🌟</h2>
                <ul>
                    <li>
                        ✅ Dynamic Task States – Tasks move through different stages: Not Started → Ongoing → Completed.
                    </li>
                    <li>
                        ✅ Visual Cues – Orange for ongoing, green for completed, with a checkmark for extra clarity.
                    </li>
                    <li>
                        ✅ Easy Task Management – Tasks are stacked neatly with buttons for Start, Done, Undo, and Delete in a clean, structured layout.
                    </li>
                    <li>
                        ✅ Local Storage Support – Your tasks are saved automatically, so they remain available even if you refresh the page.
                    </li>
                </ul>
            </section>
            <section className='about-section'>
                <h2>Why Use the Todo App?</h2>
                <ul>
                    <li>
                        🚀 Stay Organized – Never lose track of important tasks again.
                    </li>
                    <li>
                        📅 Boost Productivity – Plan your work effectively and stay focused.
                    </li>
                    <li>
                        🖥️ User-Friendly Interface – Simple, intuitive design for effortless task management.
                    </li>
                    <li>
                        💾 No Data Loss – Your tasks remain stored even after closing the app.
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default About