'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;

      console.log(`https://www.google.com/maps/@${latitude},${longitude}`); // just for fun

      // LeafLet library
      const coords = [latitude, longitude];
      const map = L.map('map').setView(coords, 15);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team',
      }).addTo(map);

      L.marker(coords).addTo(map).bindPopup('Hii there 👋').openPopup();
    },

    function () {
      alert('Could not get your position');
    }
  );
}
