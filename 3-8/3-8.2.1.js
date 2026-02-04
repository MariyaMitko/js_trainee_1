function countWords(text) {
    const words = text.toLowerCase().split(" ");
    const map = new Map();

    words.forEach(word => {
        map.set(word, (map.get(word) || 0) + 1);
    });

    return map;
}

console.log(countWords("js is fun and js is powerful"));
