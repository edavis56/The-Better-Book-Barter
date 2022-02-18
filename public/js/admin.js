const genre = document.querySelector('#genre').value 
const condition = document.querySelector('#condition').value

if(genre && condition) {
    const response = await fetch("/api/admin", {
        method: "POST",
        body: JSON.stringify({genre, condition}),
        headers: {""},
    });
}