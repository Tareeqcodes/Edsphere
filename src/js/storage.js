// storageFunctions.js
import { storage } from './firebaseConfig.js';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export function showDepartments(facultyName) {
  const deptContainer = document.getElementById('department-pdfs');
  if (!deptContainer) {
    console.error('Department container element not found');
    return;
  }

  deptContainer.innerHTML = '';
  const pdfList = document.getElementById('pdf-list');
  if (pdfList) {
    pdfList.innerHTML = '';
  }

  const facultyRef = ref(storage, `${facultyName}/`);
  listAll(facultyRef)
    .then((res) => {
      if (res.prefixes.length === 0) {
        deptContainer.innerHTML = 'No departments found.';
      } else {
        res.prefixes.forEach((departmentRef) => {
          const deptButton = document.createElement('button');
          deptButton.textContent = departmentRef.name;
          deptButton.className = 'dep-btn';
          deptButton.onclick = () =>
            showPDFs(`${facultyName}/${departmentRef.name}`);
          deptContainer.appendChild(deptButton);
        });
      }
    })
    .catch((error) => {
      console.error('Error listing departments:', error);
      deptContainer.innerHTML = `Failed to load departments: ${error.message}`;
    });
}

export function showPDFs(departmentPath) {
  const pdfList = document.getElementById('pdf-list');
  if (!pdfList) {
    console.error('PDF list element not found');
    return;
  }

  pdfList.innerHTML = '';

  const deptRef = ref(storage, departmentPath);

  listAll(deptRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          const link = document.createElement('a');
          link.href = url;
          link.textContent = itemRef.name;
          link.target = '_blank';
          link.className = 'pdf-link';
          pdfList.appendChild(link);
          pdfList.appendChild(document.createElement('br'));
        });
      });
    })
    .catch((error) => {
      console.error('Error listing PDFs:', error);
      pdfList.innerHTML = `Failed to list PDFs: ${error.message}`;
    });
}

// toggleSection.js
// universityDepartment.js
export function universityDepartment() {
  document.addEventListener('DOMContentLoaded', function () {
    const showFacButtons = document.querySelectorAll('.show-fac');
    const facultyWrapper = document.getElementById('facultyContainer');

    if (facultyWrapper) {
      showFacButtons.forEach((button) => {
        button.addEventListener('click', () => {
          facultyWrapper.classList.remove('fac');
        });
      });
    } else {
      console.error('facultyContainer element not found');
    }
  });
}
