function searchEmployee() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const employees = document.querySelectorAll('.employee-feedback');

    employees.forEach(employee => {
        const employeeName = employee.getAttribute('data-employee').toLowerCase();
        if (employeeName.includes(searchInput)) {
            employee.style.display = "block";
        } else {
            employee.style.display = "none";
        }
    });
}

function viewDetails(employeeId) {
    const commentsSection = document.getElementById(employeeId + '-comments');
    commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
}
