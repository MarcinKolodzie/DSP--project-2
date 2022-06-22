let appContainer = null

let names = ['Ala', 'Ela']

const addName = function (newName) {
    names = names.concat(newName)

    render()
}

const nameExist = function (name) {
    return names.includes(name)
}

const renderList = function () {

    const ul = document.createElement('ul')

    for (let i = 0; i < names.length; i++) {

        const li = document.createElement('li')

        li.innerText = names[i]

        ul.appendChild(li)
    }

    return ul

}

const renderNewNameInput = function () {

    const div = document.createElement('div')

    const input = document.createElement('input')
    const button = document.createElement('button')

    input.setAttribute('placeholder', 'ADD new name')
    button.innerText = 'ADD'

    button.addEventListener(
        'click',
        function () {
            addName(input.value)
        }
    )

    div.appendChild(input)
    div.appendChild(button)

    return div

}

const renderSearchInput = function () {

    const div = document.createElement('div')

    const input = document.createElement('input')
    const button = document.createElement('button')

    input.setAttribute('placeholder', 'Search name')

    div.appendChild(input)

    return div
}

const renderSearchResult = function () {

    const p = document.createElement('p')

    if (nameExist('Ola')) {
        p.innerText = 'Exist'
    } else {
        p.innerText = 'NOT exist'
    }

    return p

}

const render = function (container) {

    if (!appContainer) {
        appContainer = document.createElement('div')
    }

    appContainer.innerHTML = ''

    const list = renderList()
    const newNameInput = renderNewNameInput()
    const searchInput = renderSearchInput()
    const searchResult = renderSearchResult()

    appContainer.appendChild(list)
    appContainer.appendChild(newNameInput)
    appContainer.appendChild(searchInput)
    appContainer.appendChild(searchResult)

    return appContainer
}

const init = function (containerSelector) {
    const container = document.querySelector(containerSelector)

    if (!container) return

    const app = render()

    container.appendChild(app)
}

init('body')