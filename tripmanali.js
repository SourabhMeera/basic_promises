const hotelBooking = new Promise((resolve, reject) => {
    // Simulate booking a hotel
    if (hotelAvailable) {
        resolve('Hotel booked successfully');
    } else {
        reject('Hotel booking failed');
    }
});

const vehicleRental = new Promise((resolve, reject) => {
    // Simulate renting a vehicle
    if (vehicleAvailable) {
        resolve('Vehicle rented successfully');
    } else {
        reject('Vehicle rental failed');
    }
});

const planAttractions = new Promise((resolve, reject) => {
    // Simulate planning local attractions
    if (attractionsPlanned) {
        resolve('Attractions planned successfully');
    } else {
        reject('Attraction planning failed');
    }
});

Promise.all([hotelBooking, vehicleRental, planAttractions])
    .then(results => {
        console.log('Trip to Manali successfully planned!');
        console.log(results);
    })
    .catch(error => {
        console.log('Trip planning failed:', error);
    });
