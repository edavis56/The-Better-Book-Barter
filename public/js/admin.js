async function addFormHandler(event) {
    event.preventDefault();
    
    const genre_input = document.querySelector('#genre-input').value.trim()

    if(genre_input) {
        const response = await fetch("/api/admin/genre", {
            method: 'post',
            body: JSON.stringify({genre_input}),
            headers: {'Content-Type': 'application/json'},
        });

        alert(response.statusText);

        if(response.ok) {
            window.location.reload(true)
        }
    }
}

async function deleteFormHandler(event) {
    event.preventDefault();

    const genre_list = document.querySelector('#genre-list').value.trim()

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
