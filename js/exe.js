
// Function to render todos
function renderTodos(todos) {
    
    menuDiv.innerHTML = ''; 

    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo-item';
        todoDiv.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>
        `;
        if(todo.completed){
        todoDiv.style.color='green';
    }else 
        todoDiv.style.color='red';
        menuDiv.appendChild(todoDiv);
    });
}

// Function to render pagination 
function renderPagination() {
    paginationDiv.innerHTML = ''; 

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
            loadTodos(currentPage - 1);
        }
    });
    paginationDiv.appendChild(prevButton);

    // Pagination logic to show limited number of pages
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (startPage > 1) {
        
        const firstPageButton = document.createElement('button');
        firstPageButton.innerText = '1';
        firstPageButton.addEventListener('click', function() {
            loadTodos(1);
        });
        paginationDiv.appendChild(firstPageButton);

        
        if (startPage > 2) {
            const dots = document.createElement('span');
            dots.innerText = '...';
            paginationDiv.appendChild(dots);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.className = (i === currentPage) ? 'active' : '';

        button.addEventListener('click', function() {
            loadTodos(i);
        });

        paginationDiv.appendChild(button);
    }

    if (endPage < totalPages) {
        
        if (endPage < totalPages - 1) {
            const dots = document.createElement('span');
            dots.innerText = '...';
            paginationDiv.appendChild(dots);
        }

        const lastPageButton = document.createElement('button');
        lastPageButton.innerText = totalPages;
        lastPageButton.addEventListener('click', function() {
            loadTodos(totalPages);
        });
        paginationDiv.appendChild(lastPageButton);
    }

    // Next button
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', function() {
        if (currentPage < totalPages) {
            loadTodos(currentPage + 1);
        }
    });
    paginationDiv.appendChild(nextButton);
}

// Initialize the first load
document.addEventListener('DOMContentLoaded', function() {
    loadTodos(1);
});
