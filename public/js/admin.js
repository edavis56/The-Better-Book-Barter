async function adminFormHandler(event) {
    event.preventDefault();

const genre = document.querySelector('#genre').value.trim() 
const condition = document.querySelector('#condition').value.trim()

if(genre && condition) {
    const response = await fetch("/api/admin/admin", {
        method: 'post',
        body: JSON.stringify({genre, condition}),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {alert(response.statusText);
    }

    }
}

document.getElementById('myBtn').addEventListener('click', adminFormHandler);