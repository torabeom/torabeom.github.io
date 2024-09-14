
function showProjectDetails(projectId) {
    const projectDetails = document.getElementById('project-details');
    if (projectId === 'project1') {
        projectDetails.innerHTML = '<h2>Movie Recommendation Site</h2><p>This project is a web-application that recommends movies based on user input.</p>';
    } else if (projectId === 'project2') {
        projectDetails.innerHTML = '<h2>Gender Classification Site</h2><p>This project classifies gender based on input text using a machine learning algorithm.</p>';
    }
    document.getElementById('project-details-modal').style.display = 'flex';
}

function closeProjectDetails() {
    document.getElementById('project-details-modal').style.display = 'none';
}
