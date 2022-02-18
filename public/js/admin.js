async function adminFormhandler(event) {
    event.preventDefault();
}

const genre = document.querySelector('#genre').value.trim() 
const condition = document.querySelector('#condition').value.trim()

if(genre && condition) {
    const response = await fetch("/api/admin", {
        method: "POST",
        body: JSON.stringify({genre, condition}),
        headers: {'Content-Type': 'application/json'},
    });
}

document.querySelector('.admin-input').addEventListener('submit', adminFormhandler);