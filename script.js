const RSS_URL = `https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data))
