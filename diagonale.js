document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered1');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 5) + 1;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '89.02vw';
            lumiere.style.top = `97.2vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '70vh';
                lumiere.style.left = '110vw';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered2');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 5) + 1;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '80.98vw';
            lumiere.style.top = `97.2vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '60vh';
                lumiere.style.left = '110vw';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered3');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '72.85vw';
            lumiere.style.top = `97.2vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '49.5vh';
                lumiere.style.left = '110vw';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});
/*
document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered4');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 7) + 2;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '64.72vw';
            lumiere.style.top = `97.2vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '416px';
                lumiere.style.left = '1521px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered5');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '56.51vw';
            lumiere.style.top = `97.2vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '323px';
                lumiere.style.left = '1521px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered6');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '48.4vw';
            lumiere.style.top = `97.2vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '229px';
                lumiere.style.left = '1521px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered7');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '40.29vh';
            lumiere.style.top = `97.2vw`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '135px';
                lumiere.style.left = '1521px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered8');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '32.18vw';
            lumiere.style.top = `97.2vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '42px';
                lumiere.style.left = '1521px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered9');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '24.07vw';
            lumiere.style.top = `97.2vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '-52px';
                lumiere.style.left = '1521px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered10');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '15.96vw';
            lumiere.style.top = `97.2vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '-59px';
                lumiere.style.left = '1372px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered11');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '7.3vw';
            lumiere.style.top = `97.2vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '-60px';
                lumiere.style.left = '1210px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered12');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '-1.35vw';
            lumiere.style.top = `97.2vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '-60px';
                lumiere.style.left = '1049px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered13');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '-2.3vw';
            lumiere.style.top = `86.8vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '-60px';
                lumiere.style.left = '887px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered14');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '76.5vh';
            lumiere.style.top = `749px`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '-60px';
                lumiere.style.left = '725px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered15');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '65.5vh';
            lumiere.style.top = `749px`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '-60px';
                lumiere.style.left = '563px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered17');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '-2.3vw';
            lumiere.style.top = `54.2vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '-60px';
                lumiere.style.left = '401px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered18');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '-2.3vw';
            lumiere.style.top = `32vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '-60px';
                lumiere.style.left = '239px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered19');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '-2.3vw';
            lumiere.style.top = `21vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '-60px';
                lumiere.style.left = '239px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered20');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '-2.3vw';
            lumiere.style.top = `9.7vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '-60px';
                lumiere.style.left = '239px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});

document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiered21');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 150) + 1;
        
        if (randomChance <= 1) {
            const transitionTime = Math.floor(Math.random() * 9) + 5;
            lumiere.style.transition = `top ${transitionTime}s linear, left ${transitionTime}s linear`;
            lumiere.style.left = '-2.3vw';
            lumiere.style.top = `-1.6vh`;
            
            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '-60px';
                lumiere.style.left = '239px';
                setTimeout(deplacerLumiere, transitionTime * 1000 + 3000); 
            }, transitionTime * 1000);
        } else {
            setTimeout(deplacerLumiere, 100);
        }
    }
    
    deplacerLumiere();
});*/