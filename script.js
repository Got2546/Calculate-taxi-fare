function calculateFare() {
    const distance = parseFloat(document.getElementById('distance').value);
    const waitingTime = parseFloat(document.getElementById('waiting-time').value);
  
    if (isNaN(distance) || isNaN(waitingTime) || distance <= 0 || waitingTime < 0) {
      document.getElementById('result').innerText = 'Please enter valid inputs.';
      return;
    }
  
    // Pricing logic
    const baseFare = 35; // Initial fee
    const distanceRate = 10; // Cost per km
    const waitingRate = 2; // Cost per minute
  
    const totalFare = baseFare + (distance * distanceRate) + (waitingTime * waitingRate);
  
    document.getElementById('result').innerText = `Total Fare: ฿${totalFare.toFixed(2)}`;
  }
  