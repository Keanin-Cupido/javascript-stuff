// fetch('<URL>', {}) --> returns a promise


// POST
// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         description: 'Iphone 19',
//         price: '1000',
//         rating: '9/10'
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

// PUT
// fetch('https://dummyjson.com/products/1', {
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Iphone 19',
//         description: 'Changed to Iphone 19',
//         price: '1000',
//         rating: '9/10'
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

// DELETE
fetch('https://dummyjson.com/products/add', {
    method: 'DELETE',
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))