/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- DATA ---
const workoutData = {
    monday: {
        title: "Full Body HIIT",
        description: "Focus on learning the movements with good form. Perform each exercise for <strong>30 seconds</strong>, followed by <strong>30 seconds of rest</strong>. Complete <strong>2-3 rounds</strong> of the entire circuit.",
        type: 'hiit',
        exercises: [
            "<strong>Burpees</strong> (Step back instead of jumping if needed)",
            "<strong>Bodyweight Squats</strong> (Focus on depth and form)",
            "<strong>Mountain Climbers</strong> (Keep it slow and controlled)",
            "<strong>Push-ups (on knees)</strong>",
            "<strong>Alternating Lunges</strong> (Instead of Jumping Lunges)",
            "<strong>Plank Jacks</strong> (Step one foot out at a time to make it easier)"
        ]
    },
    tuesday: {
        title: "Lower Body & Core Strength",
        description: "Focus on slow, controlled movements. Aim for quality over quantity.",
        type: 'strength',
        exercises: [
            { name: "Bodyweight Squats", detail: "3 Sets / 10-15 Reps / 60s Rest" },
            { name: "Alternating Lunges", detail: "3 Sets / 8-10 each leg / 60s Rest" },
            { name: "Glute Bridges", detail: "3 Sets / 12-15 Reps / 60s Rest" },
            { name: "Plank", detail: "3 Sets / 30-45s Hold / 60s Rest" },
            { name: "Leg Raises", detail: "3 Sets / 10-15 Reps / 60s Rest" },
            { name: "Bird-Dog", detail: "3 Sets / 10 each side / 45s Rest" }
        ]
    },
    wednesday: {
        title: "Upper Body & Cardio",
        description: "Build foundational strength in your upper body.",
        type: 'strength',
        exercises: [
            { name: "Push-ups (on knees)", detail: "3 Sets / To Failure* / 60s Rest" },
            { name: "Pike Push-ups", detail: "3 Sets / 6-8 (focus on form) / 60s Rest" },
            { name: "Tricep Dips (using a chair)", detail: "3 Sets / 8-12 Reps / 60s Rest" },
            { name: "<strong>Cardio Burst:</strong> High Knees", detail: "3 Sets / 45s / 45s Rest" },
            { name: "Superman", detail: "3 Sets / 12-15 Reps / 60s Rest" }
        ],
        note: "*To failure means doing as many reps as you can with good form."
    },
    thursday: {
        title: "Full Body Strength",
        description: "Combine movements to work your entire body. The exercises are slightly more advanced than earlier in the week.",
        type: 'strength',
        exercises: [
            { name: "Inchworms to Push-up", detail: "3-4 Sets / 8-10 Reps / 60s Rest" },
            { name: "Wall Sit", detail: "3-4 Sets / 45-60s Hold / 60s Rest" },
            { name: "Bodyweight Rows (using a sturdy table)", detail: "3-4 Sets / 10-15 Reps / 60s Rest" },
            { name: "Reverse Lunges", detail: "3-4 Sets / 10-12 each leg / 60s Rest" },
            { name: "Russian Twists", detail: "3-4 Sets / 15-20 each side / 60s Rest" },
        ]
    },
    friday: {
        title: "Lower Body & Core HIIT",
        description: "A mix of strength and explosive power to challenge your legs and core. Perform each exercise for <strong>40 seconds</strong>, followed by <strong>20 seconds of rest</strong>. Complete <strong>3-4 rounds</strong>.",
        type: 'hiit',
        exercises: [
            "<strong>Squat Pulses</strong>",
            "<strong>Glute Bridge Marches</strong>",
            "<strong>Side Lunges</strong> (alternating)",
            "<strong>Bicycle Crunches</strong>",
            "<strong>Flutter Kicks</strong>",
            "<strong>Wall Sit</strong>"
        ]
    },
    saturday: {
        title: "Upper Body & HIIT Finisher",
        description: "Focus on upper body endurance and finish with a high-intensity blast.",
        type: 'strength',
        exercises: [
            { name: "Wide Push-ups", detail: "3-4 Sets / To Failure / 60s Rest" },
            { name: "Diamond Push-ups", detail: "3-4 Sets / To Failure / 60s Rest" },
            { name: "Plank Up-Downs", detail: "3-4 Sets / 10-12 each side / 60s Rest" },
            { name: "<strong>HIIT Finisher:</strong> (Repeat 3 times)", detail: "30s On / 10s Rest between exercises" },
            { name: "- Jumping Jacks", detail: "" },
            { name: "- Burpees", detail: "" }
        ]
    },
    sunday: {
        title: "Rest & Active Recovery",
        description: "Rest is essential for muscle growth and preventing injury. Today is your day to recover and let your body rebuild.",
        type: 'rest',
        exercises: [
            "Take a complete rest day.",
            "Go for a 30-60 minute walk.",
            "Do a light stretching or yoga session.",
            "Focus on hydration and good nutrition."
        ]
    }
};

const infoContent = {
    tips: `
        <h3 class="text-xl font-semibold text-teal-700 mb-4">How to Build Muscle & Lose Fat</h3>
        <div class="space-y-6 text-slate-600">
            <div>
                <h4 class="font-semibold text-slate-700 mb-2">Progressive Overload</h4>
                <p class="mb-2">To build muscle, you must continuously challenge them. Since you don't have weights, you can do this by:</p>
                <ul class="list-disc list-inside space-y-1 pl-2">
                    <li><strong>Increasing Reps/Sets:</strong> Try to do one more rep or one more set than last time.</li>
                    <li><strong>Decreasing Rest Time:</strong> Shorten your rest between sets by 5-10 seconds.</li>
                    <li><strong>Improving Form & Tempo:</strong> Slow down the movement (e.g., take 3 seconds to lower into a squat) to increase time under tension.</li>
                    <li><strong>Trying Harder Variations:</strong> Move from knee push-ups to regular push-ups, or from squats to jump squats.</li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-slate-700 mb-2">Nutrition is Key</h4>
                <p class="mb-2">Exercise creates the stimulus, but fat loss and muscle growth happen in the kitchen.</p>
                <ul class="list-disc list-inside space-y-1 pl-2">
                    <li><strong>Prioritize Protein:</strong> During your intermittent fasting window, make sure you eat enough protein to help your muscles repair and grow. Aim for lean sources like chicken, fish, eggs, legumes, and tofu.</li>
                    <li><strong>Eat Whole Foods:</strong> Focus on unprocessed foods like vegetables, fruits, and healthy fats to fuel your body and stay full.</li>
                    <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day, especially around your workouts.</li>
                </ul>
            </div>
        </div>
    `,
    warmup: `
        <h3 class="text-xl font-semibold text-teal-700 mb-4">General Structure for Each Workout Day</h3>
        <div class="grid md:grid-cols-2 gap-6 text-slate-600">
            <div>
                <h4 class="font-semibold text-slate-700 mb-2">Warm-up (7-10 minutes)</h4>
                <p class="text-sm mb-2 text-slate-500">This is essential to prevent injury.</p>
                <ul class="list-disc list-inside space-y-1 pl-2">
                    <li>Light Jogging in place (2 minutes)</li>
                    <li>Jumping Jacks (60 seconds)</li>
                    <li>High Knees (60 seconds)</li>
                    <li>Arm Circles (30s forward, 30s back)</li>
                    <li>Leg Swings (30s each leg, forward & sideways)</li>
                    <li>Cat-Cow Stretch (10 reps)</li>
                    <li>Torso Twists (60 seconds)</li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-slate-700 mb-2">Cool-down (7-10 minutes)</h4>
                 <p class="text-sm mb-2 text-slate-500">Helps with recovery and flexibility.</p>
                <ul class="list-disc list-inside space-y-1 pl-2">
                    <li>Hold each stretch for 30-45 seconds.</li>
                    <li>Quad Stretch</li>
                    <li>Hamstring Stretch</li>
                    <li>Calf Stretch</li>
                    <li>Chest Stretch</li>
                    <li>Triceps Stretch</li>
                    <li>Child's Pose, Pigeon Pose</li>
                </ul>
            </div>
        </div>
    `,
    timing: `
        <h3 class="text-xl font-semibold text-teal-700 mb-4">Timing Your Workout with Intermittent Fasting (10:30 AM - 6:30 PM)</h3>
        <p class="text-slate-600 mb-4">You have two great options. Experiment to see which feels best for your energy levels:</p>
        <div class="space-y-4 text-slate-600">
            <div class="p-4 bg-slate-100 rounded-lg">
                <h4 class="font-semibold text-slate-700">1. Workout Fasted (e.g., 9:00 AM - 10:00 AM)</h4>
                <p>This can enhance fat burning. You would finish your workout just before your eating window opens. Refuel with a protein-rich meal at 10:30 AM to help your muscles recover. <strong>Listen to your body:</strong> if you feel dizzy or weak, this may not be for you.</p>
            </div>
            <div class="p-4 bg-slate-100 rounded-lg">
                <h4 class="font-semibold text-slate-700">2. Workout Fed (e.g., 12:00 PM - 1:00 PM)</h4>
                <p>Eating a light meal around 10:30 AM will give you more energy for a stronger workout. Just be sure to wait 60-90 minutes after eating before you start exercising.</p>
            </div>
        </div>
    `
};

// --- STATE MANAGEMENT ---
const STORAGE_KEY = 'workoutTrackerState';
let state = {};
let currentDay = '';

function loadState() {
    const storedState = localStorage.getItem(STORAGE_KEY);
    state = storedState ? JSON.parse(storedState) : {};
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getDayState(dayKey) {
    if (!state[dayKey]) {
        state[dayKey] = { completed: false, exercises: {} };
    }
    return state[dayKey];
}

// --- RENDERING LOGIC ---
const workoutDisplay = document.getElementById('workout-display');

function renderWorkout(dayKey) {
    currentDay = dayKey;
    const dayData = workoutData[dayKey];
    const dayState = getDayState(dayKey);
    if (!dayData) return;

    let exercisesHtml = '';
    if (dayData.type === 'hiit' || dayData.type === 'rest') {
        exercisesHtml = `<ul class="space-y-3 list-disc list-inside text-slate-600">` +
            dayData.exercises.map(ex => `<li>${ex}</li>`).join('') +
            `</ul>`;
    } else if (dayData.type === 'strength') {
        exercisesHtml = `<div class="space-y-4">` +
            dayData.exercises.map(ex => {
                const isCompleted = dayState.exercises[ex.name];
                return `
                    <div class="exercise-item flex items-center p-3 bg-slate-50 rounded-lg border border-slate-200 ${isCompleted ? 'completed' : ''}">
                        <input type="checkbox" data-exercise-name="${ex.name}" ${isCompleted ? 'checked' : ''} class="custom-checkbox h-5 w-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500 mr-4 shrink-0">
                        <div class="flex-grow flex justify-between items-center">
                            <span class="font-medium text-slate-700">${ex.name}</span>
                            <span class="text-sm text-slate-500 text-right">${ex.detail}</span>
                        </div>
                    </div>
                `;
            }).join('') +
            (dayData.note ? `<p class="text-sm text-slate-500 mt-4">${dayData.note}</p>` : '') +
            `</div>`;
    }

    const completeButtonText = dayState.completed ? 'Completed!' : 'Mark Day as Complete';
    const completeButtonClass = dayState.completed 
        ? 'bg-green-600 hover:bg-green-700' 
        : 'bg-teal-600 hover:bg-teal-700';

    workoutDisplay.innerHTML = `
        <h2 class="text-2xl font-bold text-teal-700 mb-2">${dayData.title}</h2>
        <p class="text-slate-500 mb-6">${dayData.description}</p>
        ${exercisesHtml}
        <div class="mt-8 text-center">
            <button id="complete-day-btn" class="w-full sm:w-auto px-8 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 ${completeButtonClass}">
                ${completeButtonText}
            </button>
        </div>
    `;

    // Fix: Cast btn to HTMLElement to access dataset property.
    document.querySelectorAll('.day-btn').forEach((btn: HTMLElement) => {
        btn.classList.toggle('active', btn.dataset.day === dayKey);
    });
}

function updateDayButtons() {
    // Fix: Cast btn to HTMLElement to access dataset property.
    document.querySelectorAll('.day-btn').forEach((btn: HTMLElement) => {
        const day = btn.dataset.day;
        const dayState = state[day] || { completed: false };
        if (dayState.completed) {
            btn.classList.add('completed');
            if (!btn.textContent.includes('✅')) {
                 btn.textContent += ' ✅';
            }
        } else {
            btn.classList.remove('completed');
            btn.textContent = btn.textContent.replace(' ✅', '');
        }
    });
}


function renderInfoTabs() {
    document.getElementById('tips-content').innerHTML = infoContent.tips;
    document.getElementById('warmup-content').innerHTML = infoContent.warmup;
    document.getElementById('timing-content').innerHTML = infoContent.timing;
}

// --- EVENT HANDLERS ---
function handleDaySelection(e) {
    if ((e.target as HTMLElement).tagName === 'BUTTON') {
        const day = (e.target as HTMLElement).dataset.day;
        renderWorkout(day);
    }
}

function handleTabSelection(e) {
    if ((e.target as HTMLElement).tagName === 'BUTTON') {
        const target = e.target as HTMLElement;
        const tab = target.dataset.tab;
        
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        target.classList.add('active');
        
        document.querySelectorAll('.tab-content-panel').forEach(panel => panel.classList.add('hidden'));
        document.getElementById(`${tab}-content`).classList.remove('hidden');
    }
}

function handleWorkoutInteraction(e) {
    const target = e.target as HTMLElement;
    const dayState = getDayState(currentDay);
    let stateChanged = false;

    // Handle checkbox clicks
    if (target.matches('input[type="checkbox"]')) {
        const exerciseName = target.dataset.exerciseName;
        dayState.exercises[exerciseName] = (target as HTMLInputElement).checked;
        target.closest('.exercise-item').classList.toggle('completed', (target as HTMLInputElement).checked);
        
        // Check if all exercises are completed
        const allExercises = workoutData[currentDay].exercises.map(ex => ex.name);
        const allCompleted = allExercises.every(name => dayState.exercises[name] || name.includes('<strong>'));
        if (allCompleted) {
            dayState.completed = true;
        }
        stateChanged = true;
    }

    // Handle complete day button click
    if (target.matches('#complete-day-btn')) {
        dayState.completed = !dayState.completed;
        stateChanged = true;
    }

    if (stateChanged) {
        saveState();
        renderWorkout(currentDay); // Re-render to update button state
        updateDayButtons(); // Update completion markers
    }
}

function handleReset() {
    if (confirm('Are you sure you want to reset all your progress for the week?')) {
        localStorage.removeItem(STORAGE_KEY);
        state = {};
        // Reset button text content
         document.querySelectorAll('.day-btn').forEach(btn => {
            btn.textContent = btn.textContent.replace(' ✅', '');
        });
        initializeApp();
    }
}


// --- INITIALIZATION ---
function initializeApp() {
    loadState();

    document.getElementById('day-selector').addEventListener('click', handleDaySelection);
    document.getElementById('info-tabs').addEventListener('click', handleTabSelection);
    workoutDisplay.addEventListener('click', handleWorkoutInteraction);
    document.getElementById('reset-button').addEventListener('click', handleReset);
    
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = dayNames[new Date().getDay()];
    
    renderWorkout(today);
    renderInfoTabs();
    updateDayButtons();
}

initializeApp();