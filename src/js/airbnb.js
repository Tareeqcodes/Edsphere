import Hostel1 from '../assets/Hostel1.jpg';
import Hostel2 from '../assets/Hostel2.jpg';
import Hostel3 from '../assets/Hostel3.jpg';

document.addEventListener('DOMContentLoaded', () => {
  loadHostels();
  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('hostelModal').classList.add('hidden');
  });
});

export function loadHostels() {
  const hostels = [
    {
      id: 1,
      name: 'Cozy Hostel',
      location: 'City Center',
      price: '$20/night',
      image: Hostel1,
    },
    {
      id: 2,
      name: 'Beachside Hostel',
      location: 'Near the Beach',
      price: '$25/night',
      image: Hostel2,
    },
    {
      id: 3,
      name: 'Mountain Hostel',
      location: 'In the Mountains',
      price: '$30/night',
      image: Hostel3,
    },
  ];

  const hostelList = document.getElementById('hostelList');
  hostels.forEach((hostel) => {
    const hostelCard = document.createElement('div');
    hostelCard.className = 'bg-white rounded shadow-md p-4';
    hostelCard.innerHTML = `
          <img src="${hostel.image}" alt="${hostel.name}" class="w-full h-48 object-cover rounded">
          <h3 class="text-xl font-bold mt-4">${hostel.name}</h3>
          <p class="text-gray-600">${hostel.location}</p>
          <p class="text-blue-500">${hostel.price}</p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4" onclick="showModal(${hostel.id})">View Details</button>
      `;
    hostelList.appendChild(hostelCard);
  });
}

export function showModal(hostelId) {
  const hostels = {
    1: {
      name: 'Cozy Hostel',
      location: 'City Center',
      price: '$200/year',
      image: Hostel1,
      description:
        'A cozy hostel located in the city center with all the amenities you need.',
    },
    2: {
      name: 'Beachside Hostel',
      location: 'Near the Beach',
      price: '$250/year',
      image: Hostel2,
      description:
        'Enjoy the beachside view and relaxing atmosphere at our Beachside Hostel.',
    },
    3: {
      name: 'Mountain Hostel',
      location: 'In the Mountains',
      price: '$300/year',
      image: Hostel3,
      description:
        'Stay in the mountains and enjoy breathtaking views and hiking trails.',
    },
  };

  const hostel = hostels[hostelId];
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
      <img src="${hostel.image}" alt="${hostel.name}" class="w-full h-48 object-cover rounded">
      <h3 class="text-xl font-bold mt-4">${hostel.name}</h3>
      <p class="text-gray-600">${hostel.location}</p>
      <p class="text-blue-500">${hostel.price}</p>
      <p class="mt-4">${hostel.description}</p>
      <form id="bookingForm" class="mt-20">
          <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
          </div>
          <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
          </div>
          <div class="mb-4">
              <label for="checkin" class="block text-sm font-medium text-gray-700">Check-in Date</label>
              <input type="date" id="checkin" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
          </div>
          <div class="mb-4">
              <label for="checkout" class="block text-sm font-medium text-gray-700">Check-out Date</label>
              <input type="date" id="checkout" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
          </div>
          <div class="mb-4">
              <label for="guests" class="block text-sm font-medium text-gray-700">Guests</label>
              <input type="number" id="guests" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50" min="1" required>
          </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
  `;

  handleBookingForm();
  document.getElementById('hostelModal').classList.remove('hidden');
}

export function handleBookingForm() {
  const form = document.getElementById('bookingForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const bookingDetails = {
        name: formData.get('name'),
        email: formData.get('email'),
        checkin: formData.get('checkin'),
        checkout: formData.get('checkout'),
        guests: formData.get('guests'),
      };

      console.log('Booking Details:', bookingDetails);

      // Here you would typically send the booking details to your server
      alert('Booking Submitted!');
      form.reset();
      document.getElementById('hostelModal').classList.add('hidden');
    });
  }
}

// Make sure functions are accessible globally
window.showModal = showModal;
window.loadHostels = loadHostels;
