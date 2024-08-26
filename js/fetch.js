async function fetchTodos(page) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${todosPerPage}`);
    const todos = await response.json();
    return todos;
}

async function loadTodos(page) {
    currentPage = page;

   
    const totalResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    const totalTodos = await totalResponse.json();
    totalPages = Math.ceil(totalTodos.length / todosPerPage);

    
    const todos = await fetchTodos(page);

    // Render todos 
    renderTodos(todos);
    renderPagination();
}


