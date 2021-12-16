const sidebar = document.querySelector('#sidebar');
const toggleBtn = document.querySelector('#header button');

const toggleSidebar = () => sidebar.classList.toggle('shrink');

toggleBtn.addEventListener('click', toggleSidebar);