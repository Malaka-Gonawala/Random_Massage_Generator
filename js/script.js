const messages = {
    motivationalMessages: [
        "Keep going.",
        "You are making progress, even if it doesn’t feel like it.",
        "Small steps every day add up to big results.",
        "Don’t stop now.",
        "Discipline beats motivation when motivation disappears.",
        "You’ve already survived things you once thought you couldn’t.",
        "Stay focused and trust the process.",
        "Do it tired if you have to, just don’t quit.",
        "Every effort counts.",
        "Your future self will thank you for not giving up today.",
        "Consistency matters more than perfection.",
        "One step forward is still forward.",
    ],

    animeQuotes: [
        "If you don’t take risks, you can’t create a future. – Monkey D. Luffy",
        "No matter how deep the night, it always turns to day. – Brook",
        "Power comes in response to a need, not a desire. – Goku",
        "Whatever you lose, you’ll find it again. – Monkey D. Luffy",
        "Push through the pain. Giving up hurts more. – Vegeta",
        "Your life is your own. Don’t let anyone tell you otherwise. – Mikasa Ackerman",
        "A real ninja never gives up. – Jiraiya",
        "When you have nothing to lose, you become strong. – Ichigo Kurosaki",
        "If you can’t do something, then don’t. Believe in someone who can. – Erwin Smith",
        "Sometimes, you have to fight to protect what matters. – Roronoa Zoro",
        "A scar is proof that you were stronger than what tried to hurt you. – All Might",
        "Move forward, no matter how hard it gets. – Eren Yeager",
    ],

    systemMessages: [
        "System online.",
        "Loading motivation module… please wait.",
        "Warning: Energy levels critically low.",
        "Process completed successfully.",
        "Unexpected input detected. Continuing anyway.",
        "System stability: questionable but functional.",
        "Task failed successfully.",
        "Background process running: overthinking.exe",
        "Update available. User ignored it.",
        "All systems nominal… for now.",
        "Error 418: Brain is temporarily unavailable.",
        "Performance may improve after rest or coffee.",
    ],
};

function randomIndex(max) {
    return Math.floor(Math.random() * max);
}

const motivationalMessage =
    messages.motivationalMessages[
        randomIndex(messages.motivationalMessages.length)
    ];

const animeQuote =
    messages.animeQuotes[randomIndex(messages.animeQuotes.length)];

const systemMessage =
    messages.systemMessages[randomIndex(messages.systemMessages.length)];

document.querySelector("#motivational-message").textContent =
    `Your Motivational Message: "${motivationalMessage}"`;

document.querySelector("#anime-quote").textContent =
    `The Anime Quote: "${animeQuote}"`;

document.querySelector("#system-message").textContent =
    `Your IT Joke: "${systemMessage}"`;

document.querySelector("#refresh").addEventListener("click", () => {
    location.reload();
});
