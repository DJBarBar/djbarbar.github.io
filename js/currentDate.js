const options = {year: 'numeric'};
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);