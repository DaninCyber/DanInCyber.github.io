
var searchInput = document.getElementById('search-input');
var resultsContainer = document.getElementById('results-container');

fetch('/search.json')
  .then(response => response.json())
  .then(data => {
    var idx = lunr(function () {
      this.ref('url');
      this.field('title');
      this.field('content');
      data.forEach(doc => this.add(doc));
    });
    searchInput.addEventListener('keyup', function () {
      var query = this.value;
      var results = idx.search(query);
      resultsContainer.innerHTML = '';
      results.forEach(r => {
        var item = data.find(d => d.url === r.ref);
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.title;
        li.appendChild(a);
        resultsContainer.appendChild(li);
      });
    });
  });
