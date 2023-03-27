const addBtn = document.querySelector('.add')
const deleteAllBtn = document.querySelector('.delete')

const areaNote = document.querySelector('.area-note')
const deleteBtns = document.getElementsByClassName('.delete-note')

const noteAdd = document.querySelector('.node-adding')
const category = document.querySelector('#category')
const textArea = document.querySelector('#text')
const saveNoteBtn = document.querySelector('.save')
const cancelNoteBtn = document.querySelector('.cancel')
const error = document.querySelector('.error')

let selValue
let cardId = 0
const showAddNote = () => {
	noteAdd.style.display = 'flex'
}
const closeAddNote = () => {
	noteAdd.style.display = 'none'
	error.style.visibility = 'hidden'
	textArea.value = ''
	category.selectedIndex = 0
}

const addNote = () => {
	if (textArea.value !== '' && category.options[category.selectedIndex].value !== '0') {
		createNote()
		error.style.visibility = 'hidden'
	} else {
		error.style.visibility = 'visible'
	}
}

const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note')
	newNote.setAttribute('id', cardId)
	const newHeader = document.createElement('div')
	newNote.innerHTML = `
    <div class="note-header">
    <h3 class="note-title">${selValue}</h3>
    <button class="delete-note" onclick=deleteNote(${cardId})>
        <i class="fas fa-times icon"></i>
    </button>
</div>
<div class="node-body">
   ${textArea.value}
</div>
    `
	noteAdd.style.display = 'none'
    color(newNote)
	areaNote.appendChild(newNote)
    textArea.value=''
    category.selectedIndex = 0
	cardId++
}

const selectValue = () => {
	selValue = category.options[category.selectedIndex].text
}

const color = note =>{
    switch(selValue){
        case "Shopping":
            note.style.backgroundColor = "#a2d2ff"
            break;
        case "Work":
            note.style.backgroundColor = "#ffafcc"
            break;
        case "Other":
            note.style.backgroundColor = "#ccd5ae"
    }
}

const deleteNote = (id) =>{
 const noteToDel = document.getElementById(id)
 areaNote.removeChild(noteToDel )
}

const deleteAll = () =>{
areaNote.textContent=""
}
addBtn.addEventListener('click', showAddNote)
cancelNoteBtn.addEventListener('click', closeAddNote)
saveNoteBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAll)

