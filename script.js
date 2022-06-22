let names = ['Ala', 'Ela']

const addName = function (newName) {
    names = names.concat(newName)
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

p.innerText = 'Result'

return p

}

const render = function (container) {
   
    const div = document.createElement('div')

    const list = renderList()
    const newNameInput = renderNewNameInput()
    const searchInput = renderSearchInput()
    const searchResult = renderSearchResult()

    div.appendChild(list)
    div.appendChild(newNameInput)
    div.appendChild(searchInput)
    // div.appendChild(searchResult)

    return div
}

const init = function (containerSelector) {
    const container = document.querySelector(containerSelector)

    if (!container) return

    const app = render()

    container.appendChild(app)
}

init('body')