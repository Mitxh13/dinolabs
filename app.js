//button id's
const homeBtn = document.getElementById('home_btn');
const aboutBtn = document.getElementById('about_btn');
const projectsBtn = document.getElementById('project_btn');
const teamBtn = document.getElementById('teams_btn')

//Section id's
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');
const teamSection = document.getElementById('teams');


function showSection(section) {
homeSection.style.display = 'none';
aboutSection.style.display = 'none';
projectsSection.style.display = 'none';
teamSection.style.display = 'none';
section.style.display = 'block';
}

homeBtn.addEventListener('click', () => {
showSection(homeSection);
homeBtn.classList.add('active');
aboutBtn.classList.remove('active');
projectsBtn.classList.remove('active');
teamBtn.classList.remove('active');
});

aboutBtn.addEventListener('click', () => {
showSection(aboutSection);
aboutBtn.classList.add('active');
homeBtn.classList.remove('active');
projectsBtn.classList.remove('active');
teamBtn.classList.remove('active');
});

projectsBtn.addEventListener('click', () => {
showSection(projectsSection);
projectsBtn.classList.add('active');
homeBtn.classList.remove('active');
aboutBtn.classList.remove('active');
teamBtn.classList.remove('active');
});

teamBtn.addEventListener('click', () => {
showSection(teamSection);
teamBtn.classList.add('active');
projectsBtn.classList.remove('active');
homeBtn.classList.remove('active');
aboutBtn.classList.remove('active');
});

showSection(homeSection);
homeBtn.classList.add('active');
