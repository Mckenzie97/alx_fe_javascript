const quotes = [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Success" },
  ];
  
    function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    
    if (quotes.length === 0) {
      // Display message if no quotes are available
      quoteDisplay.innerHTML = "<p>No quotes available.</p>";
      return;
    }
    
    // Pick a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { text, category } = quotes[randomIndex];
  
    // Update the DOM using innerHTML
    quoteDisplay.innerHTML = `
      <p>"${text}"</p>
      <span style="font-style: italic;">- ${category}</span>
    `;
  }
  