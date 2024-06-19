document.getElementById('parse-button').addEventListener('click', function() {
  var articleUrl = document.getElementById('article-url').value;
  fetch('/webparser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers required by the API
    },
    body: JSON.stringify({
      url: articleUrl
    })
  })
    .then(response => response.json())
    .then(data => {
      // Data = JSON returned from the API
      document.getElementById('article-title').textContent = data.title;
      document.getElementById('article-img').src = data.lead_image_url;
      document.getElementById('article-description').textContent = data.excerpt;

    })

  .catch(error => console.error('Error:', error));
});

