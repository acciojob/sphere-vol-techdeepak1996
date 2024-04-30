function volume_sphere() {
    // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the radius value entered by the user
  const radius = parseFloat(document.getElementById('radius').value);

  // Get the output element for volume
  const volumeOutput = document.getElementById('volume');

  // Check if the input is a non-negative number
  if (isNaN(radius) || radius < 0) {
    volumeOutput.value = 'NaN';
    return;
  }

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the calculated volume in the output field, rounded to four decimal places
  volumeOutput.value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
