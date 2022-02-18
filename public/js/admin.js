const genre = document.querySelector('#genre').value.trim()
const genre_list = document.querySelector('#genre-list').value.trim()

async function addFormHandler(event) {
    event.preventDefault();
    
    if(genre) {
        const response = await fetch("/api/admin/genre", {
            method: 'post',
            body: JSON.stringify({genre}),
            headers: {'Content-Type': 'application/json'},
        });

        alert(response.statusText);
    }
}

async function deleteFormHandler(event) {
    event.preventDefault();

    if(genre_list) {
        const response = await fetch("/api/admin/genre", {
            method: 'delete',
            body: JSON.stringify({genre_list}),
            headers: {'Content-Type': 'application/json'},
        });

        alert(response.statusText);

        if(response.ok) {
            window.location.reload(true)
        }
    }
}

document.getElementById('deleteBtn').addEventListener('click', deleteFormHandler);

document.getElementById('addBtn').addEventListener('click', addFormHandler);
