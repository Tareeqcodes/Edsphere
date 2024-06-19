import { signIn, signUp } from './js/auth.js';
import { showPDFs, showDepartments } from './js/storage.js';
import { signHandlers } from './js/auth.js';
import { loadHostels, showModal, handleBookingForm } from './js/airbnb.js';
import { universityDepartment } from './js/storage.js';  
import { displayTools, filterTools, createToolCard } from './js/resource.js';
import './styles/style.css';
import hostelCover from './assets/HostelCover.jpg';
import uni1 from './assets/uni1.jpg';
import uni2 from './assets/uni2.jpg';
import uni3 from './assets/uni3.jpg';


document.addEventListener('DOMContentLoaded', function () {
  const setupFacultyEventListeners = () => {
    const facultyLinks = [
      { id: 'agriculture-link', facultyName: 'Agriculture' },
      { id: 'engineering-link', facultyName: 'Engineering' },
      { id: 'cs-link', facultyName: 'Computer Science' },
      { id: 'vet-link', facultyName: 'Veterinary Medicine' },  
      { id: 'comm-link', facultyName: 'Communication' },
    ];

    facultyLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        element.addEventListener('click', () => showDepartments(link.facultyName));
      } else {
        console.error(`Element with id ${link.id} not found`);
      }
    });
  };

  setupFacultyEventListeners();

  const pdfListElement = document.getElementById('pdf-list');
  if (pdfListElement) {
    showPDFs();  // Only call showPDFs if 'pdf-list' element exists
  } else {
    console.error('Element with id "pdf-list" not found');
  }

  const signInForm = document.getElementById('signInForm');
  if (signInForm) {
    signInForm.addEventListener('submit', function (event) {
      event.preventDefault();
      signIn();
    });
  } else {
    console.error('Element with id "signInForm" not found');
  }

  const signUpForm = document.getElementById('signUpForm');
  if (signUpForm) {
    signUpForm.addEventListener('submit', function (event) {
      event.preventDefault();
      signUp();
    });
  } else {
    console.error('Element with id "signUpForm" not found');
  }

  const searchElement = document.getElementById('search');
  if (searchElement) {
    searchElement.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const filteredTools = filterTools(query);
      displayTools(filteredTools);
    });
  } else {
    console.error('Element with id "search" not found');
  }

  // Initialization of functions
  createToolCard();
  displayTools(tools);
  signHandlers();
  loadHostels();
  showModal();
  handleBookingForm();
  universityDepartment();
});
