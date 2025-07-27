document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const apologyScreen = document.getElementById('apology-screen');
    const openApologyBtn = document.getElementById('open-apology');
    const floatingHearts = document.querySelector('.floating-hearts');

    // Function to create random hearts
    function createHearts() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animation = `float-heart ${(Math.random() * 3 + 2)}s linear forwards`;
        floatingHearts.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create initial floating hearts
    setInterval(createHearts, 300);

    // Position hearts randomly on welcome screen
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.transform = `rotate(-45deg) scale(${Math.random() * 0.5 + 0.5})`;
    });

    // Button click event to show apology
    openApologyBtn.addEventListener('click', function() {
        // Hide welcome screen
        welcomeScreen.classList.remove('active');
        
        // Show apology screen after a short delay
        setTimeout(() => {
            apologyScreen.classList.add('active');
            
            // Add more tears to the panda
            const leftEye = document.querySelector('.left-eye');
            const rightEye = document.querySelector('.right-eye');
            
            for (let i = 0; i < 3; i++) {
                const tear1 = document.createElement('div');
                tear1.className = 'tear';
                tear1.style.left = (20 + Math.random() * 10) + 'px';
                tear1.style.animationDelay = i * 0.5 + 's';
                leftEye.appendChild(tear1);
                
                const tear2 = document.createElement('div');
                tear2.className = 'tear';
                tear2.style.left = (20 + Math.random() * 10) + 'px';
                tear2.style.animationDelay = i * 0.5 + 's';
                rightEye.appendChild(tear2);
                
                // Remove tears after animation
                setTimeout(() => {
                    tear1.remove();
                    tear2.remove();
                }, 2000);
            }
        }, 500);
    });

    // Make the panda look sad when hovering over the message
    const messageContent = document.querySelector('.message-content');
    messageContent.addEventListener('mouseenter', function() {
        const pandaMouth = document.querySelector('.panda-mouth');
        pandaMouth.style.height = '10px';
        pandaMouth.style.width = '70px';
        pandaMouth.style.borderRadius = '0 0 35px 35px';
        
        // Add more tears
        const tear = document.createElement('div');
        tear.className = 'tear';
        tear.style.left = '25px';
        document.querySelector('.left-eye').appendChild(tear);
        
        setTimeout(() => {
            tear.remove();
        }, 2000);
    });

    messageContent.addEventListener('mouseleave', function() {
        const pandaMouth = document.querySelector('.panda-mouth');
        pandaMouth.style.height = '20px';
        pandaMouth.style.width = '60px';
        pandaMouth.style.borderRadius = '0 0 50% 50%';
    });
});

// Add to your existing script.js
function handleMobileResize() {
    if (window.innerWidth < 768) {
        // Mobile-specific adjustments
        document.body.style.overflowX = 'hidden';
        
        // Adjust font sizes dynamically if needed
        const welcomeText = document.querySelector('#welcome-screen p');
        if (welcomeText && window.innerWidth < 400) {
            welcomeText.style.fontSize = '0.9rem';
        }
    }
}

// Run on load and resize
window.addEventListener('load', handleMobileResize);
window.addEventListener('resize', handleMobileResize);

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('audio');
    const playAudio = () => {
        audio.play().catch(e => console.log("Audio play prevented:", e));
        document.removeEventListener('click', playAudio);
    };
    document.addEventListener('click', playAudio);
});