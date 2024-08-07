  function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const date = new Date().toISOString();  // Current date in ISO format
    const url = 'https://script.google.com/macros/s/AKfycbzrX8-jn1Jd9JOK-HBGkI4wC2vg-wgHNpK5bIejmRl4inwdjsDDOQCrSH6npYcrvNPIlw/exec';  // Replace with the URL 

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'name=' + encodeURIComponent(name) + 
            '&email=' + encodeURIComponent(email) + 
            '&message=' + encodeURIComponent(message) + 
            '&date=' + encodeURIComponent(date)
    }).then(response => response.text()).then(result => {
      showMessage(result === 'Success' ? 'success' : 'error', result);
      if (result === 'Success') {
        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      }
    }).catch(error => {
      showMessage('error', 'Error submitting form');
    });
  }

  function showMessage(type, text) {
    const messageElement = document.getElementById('form-message');
    messageElement.className = 'message ' + type;
    messageElement.textContent = text;
    messageElement.style.display = 'block';

    setTimeout(() => {
      messageElement.style.display = 'none';
    }, 3000);  // Message will disappear after 3 seconds
  }
