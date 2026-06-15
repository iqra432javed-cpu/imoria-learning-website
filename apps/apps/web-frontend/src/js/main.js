// apps/web-frontend/src/js/main.js

function toggleSyllabusModal(subjectKey) {
    const modal = document.getElementById('syllabusModal');
    
    if (!subjectKey) {
        modal.classList.remove('active');
        return;
    }
    
    // Capitalize title
    const formattedTitle = subjectKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.getElementById('modalSubjectTitle').innerText = `${formattedTitle} Syllabus`;
    
    // Set dynamic paths according to the Enterprise Folder Blueprint
    document.getElementById('part1Link').href = `./chapters.html?subject=${subjectKey}&part=1`;
    document.getElementById('part2Link').href = `./chapters.html?subject=${subjectKey}&part=2`;
    
    // Open the modal smoothly
    modal.classList.add('active');
}

// Close modal if user clicks outside the core modal box
window.onclick = function(event) {
    const modal = document.getElementById('syllabusModal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
}
