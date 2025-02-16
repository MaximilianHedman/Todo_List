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
                <ul>
                    <li>
                        <p> 1️⃣ Add a Task – Type in your task and hit "<span className='add-color'>Add</span>" or the "Enter key" to create a new item on your list.</p>
                    </li>
                    <li>
                        <p> 2️⃣ Start the Task – Click "<span className='start-color'>Start</span>" to begin working on a task. This marks it as ongoing, turning the task text <span className='ongoing-color'>orange</span> and displaying a ⏳ indicator.</p>
                    </li>
                    <li>
                        <p> 3️⃣ Complete the Task – Once finished, click "<span className='done-color'>Done</span>", turning the task text <span className='done-color'>green</span> and removing the ongoing status. A ✔️ checkmark is added to indicate completion.</p>
                    </li>
                    <li>
                        <p> 4️⃣ Undo if Needed – If a task was marked done by mistake, click "<span className='undo-color'>Undo</span>" to reset it.</p>
                    </li>
                    <li>
                        <p> 5️⃣ Delete Completed Tasks – Tasks can only be deleted once they are marked done, preventing accidental removal of unfinished work.</p>
                    </li>
                </ul>
            </section>
            <section className='about-section'>
                <h2>Features 🌟</h2>
                <ul>
                    <li>
                        <p>✅ Dynamic Task States – Tasks move through different stages: Not Started → <span className='ongoing-color'>Ongoing</span> → <span className='done-color'>Completed</span>.</p>
                    </li>
                    <li>
                        <p>✅ Visual Cues – <span className='ongoing-color'>Orange</span> for ongoing, <span className='done-color'>green</span> for completed, with a checkmark for extra clarity.</p>
                    </li>
                    <li>
                        <p>✅ Easy Task Management – Tasks are stacked neatly with buttons for <span className='start-color'>Start</span>, <span className='done-color'>Done</span>, <span className='undo-color'>Undo</span>, and <span className='delete-color'>Delete</span> in a clean, structured layout.</p>
                    </li>
                    <li>
                        <p>✅ Local Storage Support – Your tasks are saved automatically, so they remain available even if you refresh the page.</p>
                    </li>
                </ul>
            </section>
            <section className='about-section'>
                <h2>Why Use the Todo App?</h2>
                <ul>
                    <li>
                        <p>🚀 Stay Organized – Never lose track of important tasks again.</p>
                    </li>
                    <li>
                        <p>📅 Boost Productivity – Plan your work effectively and stay focused.</p>
                    </li>
                    <li>
                        <p>🖥️ User-Friendly Interface – Simple, intuitive design for effortless task management.</p>
                    </li>
                    <li>
                        <p>💾 No Data Loss – Your tasks remain stored even after closing the app.</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default About