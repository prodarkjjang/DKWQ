function animateTextAppearance(text, container, timeline, pos = null) {
    const newSpans = [];
    
    text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0"; // Initially hide spans
        container.appendChild(span);
        newSpans.push(span);
    });
    
    if (newSpans.length > 0) {
        timeline.to(newSpans, {
            opacity: 1,
            duration: 0.5,
            stagger: 0.05, // Letters appear one by one
            ease: "power2.out"
        }, pos !== null ? pos : undefined);
    }
}

function removeLastNLetters(container, numLettersToRemove, timeline, pos = null) {
    const spans = Array.from(container.children);

    if (numLettersToRemove > 0 && numLettersToRemove <= spans.length) {
        const removeSpans = spans.slice(-numLettersToRemove).reverse(); // Get last N spans

        timeline.to(removeSpans, {
            opacity: 0,
            duration: 0.1,
            stagger: 0.01, // Letters disappear one by one from right to left
            ease: "power2.out",
            onComplete: () => {
                removeSpans.forEach(span => span.remove());
            }
        }, pos !== null ? pos : undefined);
    }
}

function strikeThroughLastNLetters(container, numLetters, timeline, pos = null) {
    const spans = Array.from(container.children);
    
    if (numLetters > 0 && numLetters <= spans.length) {
        const targetSpans = spans.slice(-numLetters); // Get the last N letters

        timeline.to(targetSpans, {
            textDecoration: "line-through",
            duration: 0.2,
            stagger: 0.01, // Strikethrough applied letter by letter from left to right
            ease: "power2.out"
        }, pos !== null ? pos : undefined);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("text");
    const tl = gsap.timeline();

    animateTextAppearance("In order to save cost on a birthday gift, ", container, tl);
    removeLastNLetters(container, 30, tl, "=+0.5");
    animateTextAppearance("train my technical skills, ", container, tl);
    strikeThroughLastNLetters(container, 27, tl, "=+0.5");
    animateTextAppearance(" celebrate your 30th birthday and our upcoming one-year anniversary, ", container, tl, "=+0.1");
    animateTextAppearance("I have decided to create this memory album", container, tl);
    removeLastNLetters(container, 12, tl);
    const words = ["scrapbook", "autobio"];
    words.forEach(word => {
        animateTextAppearance(word, container, tl, "=+0.1");
        removeLastNLetters(container, word.length, tl);
    });
    animateTextAppearance("'thing' to mark this special milestone forever. ", container, tl, "=+0.2");

    const sentences = [
        "Like all books and oscar winning speeches, I would like to say a few words before we proceed to the main events:",
        "To the future me reading this now, hopefully you and Wei QI are still together and having a great time in Europe.",
        "To Wei QI my love, happy 30th birthday. Please hold me tight, literally. I'm probably feeling cold right now.",
        "To KTJ & CH, everybody's looking at you two bruh, but stay that way forever ok.",
        "To everyone else, congrats on somehow finding our private but not really website, I hope you feel awkward here."
    ];

    sentences.forEach(sentence => {
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
        animateTextAppearance(sentence, container, tl, "=+0.5");
    });
});
