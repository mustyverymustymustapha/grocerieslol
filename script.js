const form = document.getElementById('grocery-form');
const input = document.getElementById('grocery-input');
const list = document.getElementById('grocery-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addItem(input.value);
    input.value = '';
});

function addItem(item) {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', function() {
        li.remove();
    });
    list.appendChild(li);
}