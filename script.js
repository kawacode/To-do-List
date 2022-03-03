document.getElementById('addtext').addEventListener('keyup', function (e) {
    if (document.getElementById('addtext').value.length != 0 || document.getElementById('addtext').value.length >= 1) {
        document.getElementById('addbutton').removeAttribute('disabled')
        document.getElementById('addbutton').classList.add('active')
        if (e.keyCode === 13) {
            document.getElementById('addbutton').click()
        }
    }
    else {
        document.getElementById('addbutton').setAttribute('disabled', '')
        document.getElementById('addbutton').classList.remove('active')
    }
})
document.getElementById('addtext').addEventListener('input', function (e) {
    if (e.target.value.length != 0 || e.target.value.length >= 1) {
        document.getElementById('addbutton').removeAttribute('disabled')
        document.getElementById('addbutton').classList.add('active')
    }
    else {
        document.getElementById('addbutton').setAttribute('disabled', '')
        document.getElementById('addbutton').classList.remove('active')
    }
})
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
        show()
    }
})
document.getElementById('clearbutton').addEventListener('click', function (e) {
    window.localStorage.clear()
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
    arr.forEach((e, i) => {
        update += `<li class="item">${e}<button id="deletebutton" onclick="deleteAction(${i});"
            class="deletebutton">
            <ion-icon name="trash-outline"></ion-icon>
        </button></i></li>`
    })
    document.getElementById('itemsection').innerHTML = update
    document.getElementById('addtext').value = ""
    document.getElementById('addbutton').setAttribute('disabled', '')
    document.getElementById('addbutton').classList.remove('active')
}
function deleteAction(index) {
    let arr = JSON.parse(window.localStorage.getItem('Todo'))
    arr.splice(index, 1)
    window.localStorage.setItem('Todo', JSON.stringify(arr))
    show()
}
show()