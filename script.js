//On enter in input field submit.
document.getElementById('addtext').addEventListener('keyup', function (e) {
    //Check if input isn't null
    if (document.getElementById('addtext').value.length != 0 || document.getElementById('addtext').value.length >= 1) {
        document.getElementById('addbutton').removeAttribute('disabled')
        document.getElementById('addbutton').classList.add('active')
        //keyCode 13 is Enter key.
        if (e.keyCode === 13) {
             //click on add button by JS
            document.getElementById('addbutton').click()
        }
    }
    else {
         //disable add button
        document.getElementById('addbutton').setAttribute('disabled', '')
        document.getElementById('addbutton').classList.remove('active')
    }
})
//Active add button, if Input isn't null
document.getElementById('addtext').addEventListener('input', function (e) {
    //Check if input isn't null
    if (e.target.value.length != 0 || e.target.value.length >= 1) {
        //enable add button
        document.getElementById('addbutton').removeAttribute('disabled')
        document.getElementById('addbutton').classList.add('active')
    }
    else {
        //disable add button
        document.getElementById('addbutton').setAttribute('disabled', '')
        document.getElementById('addbutton').classList.remove('active')
    }
})
//add items, when add button is clicked
document.getElementById('addbutton').addEventListener('click', function (e) {
    if (document.getElementById('addtext').value.length > 35) {
        alert('Max length is 35')
    }
    else {
        if (window.localStorage.getItem('Todo') == null) {
            var arr = []
        }
        else {
            var arr = JSON.parse(window.localStorage.getItem('Todo'))
        }
        arr.push(document.getElementById('addtext').value)
        window.localStorage.setItem('Todo', JSON.stringify(arr))
        //Update items or Display Items
        show()
    }
})
//Clear items with clearbutton.
document.getElementById('clearbutton').addEventListener('click', function (e) {
    window.localStorage.clear()
    //Update items or Display Items
    show()
})

function show() {
    if (window.localStorage.getItem('Todo') == null) {
        var arr = []
    }
    else {
        var arr = JSON.parse(window.localStorage.getItem('Todo'))
    }
    let update = ''
    //Sum items to update
    arr.forEach((e, i) => {
        update += `<li class="item">${e}<button id="deletebutton" onclick="deleteAction(${i});"
            class="deletebutton">
            <ion-icon name="trash-outline"></ion-icon>
        </button></i></li>`
    })
    //Update innerHTML of itemsection
    document.getElementById('itemsection').innerHTML = update
    //Clear input after added item
    document.getElementById('addtext').value = ""
    //disable add button
    document.getElementById('addbutton').setAttribute('disabled', '')
    document.getElementById('addbutton').classList.remove('active')
}
function deleteAction(index) {
    //Get items from storage
    let arr = JSON.parse(window.localStorage.getItem('Todo'))
    //Delete item by splice method
    arr.splice(index, 1)
    window.localStorage.setItem('Todo', JSON.stringify(arr))
    //Update items or Display Items
    show()
}
//Update items or Display Items
show()
