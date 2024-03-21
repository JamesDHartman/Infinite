// Example using Fetch API to make POST request to backend server
document.getElementById('generate-fusion-button').addEventListener('click', function() {
  var item1 = document.getElementById('item1-input').value;
  var item2 = document.getElementById('item2-input').value;

  fetch('http://your-backend-server-url/generate_fusion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ item1: item1, item2: item2 })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('fusion-output').innerText = data.fusion;
  })
  .catch(error => console.error('Error:', error));
});
