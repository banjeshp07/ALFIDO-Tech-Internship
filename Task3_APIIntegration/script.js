fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
  .then(res => res.json())
  .then(data => {
    const ul = document.getElementById('reviews');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `"${item.body}" — ${item.email}`;
      ul.appendChild(li);
    });
  });