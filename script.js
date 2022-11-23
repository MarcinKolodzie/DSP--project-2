const initListApp = (function () {

    let appContainer = null

    let names = ['Ala', 'Ela']

    let searchFrase = ''

    let isSearchFocused = false

    const addName = function (newName) {

        if (!newName) return

        names = names.concat(newName)

        searchFrase = ''

        render()
    }

    const removeName = function (indexToRemove) {

        names = removeElement(names, indexToRemove)

        render()
    }

    const nameExist = function (name) {
        return names.includes(name)
    }

    const renderListItem = function (name, index) {

        const li = document.createElement('li')
        const button = document.createElement('button')
        const text = document.createTextNode(' ' + name)

        button.innerText = 'x'

        button.addEventListener(
            'click',
                function () {
                    removeName(index)
                }
        )

        li.appendChild(button)
        li.appendChild(text)

        return li
    }

    const renderList = function () {

        const ul = document.createElement('ul')

        for (let i = 0; i < names.length; i++) {

            const li = renderListItem(names[i], i)

            ul.appendChild(li)
        }

        return ul

    }

    const renderNewNameInput = function () {

        const form = document.createElement('form')

        const input = document.createElement('input')
        const button = document.createElement('button')

        input.setAttribute('placeholder', 'ADD new name')
        button.innerText = 'ADD'

        form.addEventListener(
            'submit',
            function (event) {
                event.preventDefault()

                addName(input.value)
            }
        )

        form.appendChild(input)
        form.appendChild(button)

        return form

    }

    const renderSearchInput = function () {

        const div = document.createElement('div')

        const input = document.createElement('input')

        input.setAttribute('placeholder', 'Search name')
        input.value = searchFrase

        if (isSearchFocused) {
            setTimeout(
                function () {
                    input.focus()
                },
                0
            )
        }

        input.addEventListener(
            'input',
            function () {
                searchFrase = input.value
                isSearchFocused = true

                render()
            }
        )

        div.appendChild(input)

        return div
    }

    const renderSearchResult = function () {

        const p = document.createElement('p')

        if (nameExist(searchFrase)) {
            p.innerText = 'Search frase exist in list'
        } else {
            p.innerText = 'Search frase NOT exist in list'
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

        isSearchFocused = false

        return appContainer
    }

    const init = function (containerSelector) {
        const container = document.querySelector(containerSelector)

        if (!container) return

        const app = render()

        container.appendChild(app)
    }

    return init

})()