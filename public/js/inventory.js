async function searchBook(event) {
    event.preventDefault();

    const genre = document.querySelector('#select-genre').value;
    console.log(genre);
    // if (genre) {
    //     const response = await fetch(`/inventory?genre=${genre}`, {
    //         method: "GET",
    //         headers: { 'Content-Type': 'application/json' },
    //     });

        if(genre) {
            document.location.replace(`/inventory?genre=${genre}`);
        } else {
            alert(`no search criteria entered`);
        }
    }

document.querySelector('#search-bar').addEventListener('click', searchBook);