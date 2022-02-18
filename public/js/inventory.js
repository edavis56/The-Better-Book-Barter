async function searchBook(event) {
    event.preventDefault();

    const rating = document.querySelector('#select-rating').value;
    const genre = document.querySelector('#select-genre').value;
    const inStock = document.querySelector('#in-stock-box').checked;
    const noStock = document.querySelector('#no-stock-box').checked;

    console.log(inStock);
    console.log(noStock);


    let queryString = "inStock=" + inStock + "&noStock=" + noStock;

    console.log(rating);
    console.log(genre);
    
    

    if (rating) {
        queryString += "&rating=" + rating;
    }

    if (genre) {
        queryString += "&genre=" + genre;
    }

    
     console.log(queryString);

     if (queryString) {
         document.location.replace(`/inventory?` + queryString)
     } else {
         alert(`No search Criteria entered`);
         document.location.replace(`/inventory`);
     }
    



        // // if(rating) {
        // //     document.location.replace(`/inventory?rating=${rating}`);
        // // } else if(genre) {
        // //     document.location.replace(`/inventory?genre=${genre}`);
        // // } 
        // if(rating && genre) {
        //     document.location.replace(`/inventory?rating=${rating}&genre=${genre}`);
        // } else {
        //     alert(`no search criteria entered`);
        // }
    }

document.querySelector('#search-bar').addEventListener('click', searchBook);