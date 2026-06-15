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
// FUNCTION FOR SWITCHING MATERIAL TABS (Notes, Short Qs, Long Qs, MCQs)
function switchTab(tabKey, buttonElement) {
    // 1. Remove active class from all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // 2. Remove active class from all tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // 3. Activate current tab content and button
    document.getElementById(`content-${tabKey}`).classList.add('active');
    buttonElement.classList.add('active');
}

// FUNCTION FOR SIDEBAR CHAPTER SELECTION
function selectChapter(chapterNum, element) {
    const chapters = document.querySelectorAll('.chapter-item');
    chapters.forEach(ch => ch.classList.remove('active'));
    
    element.classList.add('active');
    
    // In real enterprise application, this will trigger an API fetch 
    // to update the content dynamically based on the chapter selected.
    console.log(`Chapter ${chapterNum} loaded successfully.`);
}
