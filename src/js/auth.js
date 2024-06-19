// import { auth } from './firebaseConfig.js';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendEmailVerification,
// } from 'firebase/auth';  

// function displayError(message) {
//   const errorMessageElement = document.getElementById('errorMessage');
//   errorMessageElement.innerHTML = message;
// }

// export function signUp() {
//   const email = document.getElementById('signUpEmail').value;
//   const password = document.getElementById('signUpPassword').value;

//   // Email format validation
//   if (!isValidEmail(email)) {
//     displayError('Please enter a valid email address.');
//     return;
//   }

//   // Password strength validation
//   if (!isStrongPassword(password)) {
//     displayError(
//       'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
//     );
//     return;
//   }

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       sendEmailVerification(userCredential.user)
//         .then(() => {
//           displayError('');
//           alert(
//             'Signup Successful! Please check your email to verify your account.'
//           );
//           document.getElementById('signUpForm').reset();
//           console.log('User created: ', userCredential.user);
//         })
//         .catch((error) => {
//           console.error('Error sending verification email: ', error);
//           displayError('Error sending verification email.');
//         });
//     })
//     .catch((error) => {
//       console.error('Error signing up: ', error);
//       displayError('Error signing up: ' + error.message);
//     });

//   function isValidEmail(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
//   }

//   function isStrongPassword(password) {
//     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(
//       password
//     );
//   }
// }

// export function signIn() {
//   const email = document.getElementById('signInEmail').value;
//   const password = document.getElementById('signInPassword').value;

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       if (userCredential.user.emailVerified) {
//         displayError('');
//         alert('Login Successful!');
//         document.getElementById('signInForm').reset();
//         console.log('User signed in: ', userCredential.user);
//       } else {
//         displayError('Please verify your email before signing in.');
//         auth.signOut();
//       }
//     })
//     .catch((error) => {
//       console.error('Error signing in: ', error);
//       displayError('Error signing in: ' + error.message);
//     });
// }

// export function signHandlers() {
//   const signInTab = document.getElementById('sign-in');
//   const signUpTab = document.getElementById('sign-up');
//   const signInForm = document.getElementById('signInForm');
//   const signUpForm = document.getElementById('signUpForm');
//   const formIcons = document.getElementById('formIcons');
//   const orText = document.getElementById('orText');

//   signUpTab.addEventListener('click', (event) => {
//     event.preventDefault();
//     signInTab.classList.remove('active');
//     signInForm.style.display = 'none';
//     signUpTab.classList.add('active');
//     signUpForm.style.display = 'block';
//     formIcons.style.display = 'none';
//     orText.style.display = 'none';
//   });

//   signInTab.addEventListener('click', (event) => {
//     event.preventDefault();
//     signInTab.classList.add('active');
//     signInForm.style.display = 'block';
//     signUpTab.classList.remove('active');
//     signUpForm.style.display = 'none';
//     formIcons.style.display = 'block';
//     orText.style.display = 'block';
//   });
// }
import { auth } from './firebaseConfig.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

function displayError(message) {
  const errorMessageElement = document.getElementById('errorMessage');
  errorMessageElement.innerHTML = message;
}

export function signUp() {
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;

  if (!isValidEmail(email)) {
    displayError('Please enter a valid email address.');
    return;
  }

  if (!isStrongPassword(password)) {
    displayError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      sendEmailVerification(userCredential.user)
        .then(() => {
          displayError('');
          alert('Signup Successful! Please check your email to verify your account.');
          document.getElementById('signUpForm').reset();
          console.log('User created: ', userCredential.user);
        })
        .catch((error) => {
          console.error('Error sending verification email: ', error);
          displayError('Error sending verification email.');
        });
    })
    .catch((error) => {
      console.error('Error signing up: ', error);
      displayError('Error signing up: ' + error.message);
    });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isStrongPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
  }
}

export function signIn() {
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (userCredential.user.emailVerified) {
        displayError('');
        alert('Login Successful!');
        document.getElementById('signInForm').reset();
        console.log('User signed in: ', userCredential.user);
      } else {
        displayError('Please verify your email before signing in.');
        auth.signOut();
      }
    })
    .catch((error) => {
      console.error('Error signing in: ', error);
      displayError('Error signing in: ' + error.message);
    });
}

export function signHandlers() {
  const signInTab = document.getElementById('sign-in');
  const signUpTab = document.getElementById('sign-up');
  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');
  const formIcons = document.getElementById('formIcons');
  const orText = document.getElementById('orText');

  signUpTab.addEventListener('click', (event) => {
    event.preventDefault();
    signInTab.classList.remove('active');
    signInForm.classList.add('hidden');
    signUpTab.classList.add('active');
    signUpForm.classList.remove('hidden');
    formIcons.classList.add('hidden');
    orText.classList.add('hidden');
  });

  signInTab.addEventListener('click', (event) => {
    event.preventDefault();
    signInTab.classList.add('active');
    signInForm.classList.remove('hidden');
    signUpTab.classList.remove('active');
    signUpForm.classList.add('hidden');
    formIcons.classList.remove('hidden');
    orText.classList.remove('hidden');
  });
}

document.addEventListener('DOMContentLoaded', function () {
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

  signHandlers();
});
