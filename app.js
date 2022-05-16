const addForm = document.querySelector('.add');
const list = document.querySelector('.schedule')
const search = document.querySelector('.search input');
// addForm.addEventListener('submit', e => {

//     e.preventDefault();
//     const todo = addForm.new.value.trim;
    
//     console.log(todo); 
// });
// list.addEventListener('click', e => {
//     if(e.target.classlist.contains('delete')){
//         e.target.parentElement.remove();
//     }
// });


// const filterTodos = (term) => {
//     (Array.from(list.children)
//     .filter((todo) => !todo.textContent.includes(term))
//     .forEach((todo) => todo.classlist.add('filtered'))
        
//     .filter((todo) => todo.textContent.includes(term))
//     .forEach((todo) => todo.classlist.remove('filtered'))
    
//     )}

// search.addEventListener('keyup', () => {
//     const term = search.value;
//     filterTodos(term);
// })