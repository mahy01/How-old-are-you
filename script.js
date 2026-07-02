function calculateAge() {
    const input = document.getElementById('ageInput');
    const age = parseInt(input.value);
    
    if (isNaN(age) || age <= 0 || age > 120) {
        const result = document.getElementById('result');
        result.textContent = 'نمی‌شنومت... دوباره بگو 🌀';
        result.className = 'result-show';
        return;
    }
    
    const fakeAge = Math.max(1, age);
    
    const result = document.getElementById('result');
    result.textContent = 'شما' + fakeAge + 'سال دارید';
    result.className = 'result-show';
    
    createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.background = getRandomColor();
        
        // اکلیل از چپ یا راست
        if (Math.random() > 0.5) {
            confetti.style.left = Math.random() * 50 + 'vw';
        } else {
            confetti.style.right = Math.random() * 50 + 'vw';
        }
        
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

function getRandomColor() {
    const colors = ['#ff6b6b', '#ee5a6f', '#ffd93d', '#6bcf7f', '#4d96ff', '#9b59b6'];
return colors[Math.floor(Math.random() * colors.length)];
}
