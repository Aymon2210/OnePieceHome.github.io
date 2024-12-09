// Dynamically display the welcome message
document.getElementById('welcome-message').innerText = 'Welcome to my One Piece World!';

// Function to display a random quote
function showQuote() {
    const quotes = [
        "I'm gonna be King of the Pirates! – Monkey D. Luffy",
        "When you decide to follow your dreams, don't forget to take care of the people who support you. – Roronoa Zoro",
        "I want to live! – Nami",
        "I’ll keep shooting until I hit my mark! – Usopp",
        "I’ll never forgive anyone who hurts my friends! – Sanji",
        "I’ll become the greatest doctor in the world! – Tony Tony Chopper",
        "I will live my life on my terms, and I’ll never be anyone’s slave! – Nico Robin",
        "A man who can’t protect his friends is worse than scum. – Franky",
        "I want to see the world through the eyes of a musician, to understand life more deeply! – Brook",
        "I’ll never stop fighting until my crew is safe. – Jimbei"
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // Display the random quote in the quote-display div
    document.getElementById('quote-display').innerText = randomQuote;
}
