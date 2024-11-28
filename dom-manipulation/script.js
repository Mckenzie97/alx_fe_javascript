const quotes = [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Success" },
  ];
  
    function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    
    if (quotes.length === 0) {
      
      quoteDisplay.innerHTML = "<p>No quotes available.</p>";
      return;
    }
    
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { text, category } = quotes[randomIndex];
  
    
    quoteDisplay.innerHTML = `
      <p>"${text}"</p>
      <span style="font-style: italic;">- ${category}</span>
    `;
  }

  function createAddQuoteForm() {
    const quoteText = document.getElementById('quoteText').value;
    const quoteCategory = document.getElementById('quoteCategory').value;
  };
  