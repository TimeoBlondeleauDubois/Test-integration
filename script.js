document.addEventListener("DOMContentLoaded", function() {
    const lumiere = document.querySelector('.lumiere');
    const lignesVerticales = document.querySelectorAll('[class^="ligne_verticale"]');
    
    function deplacerLumiere() {
        const randomChance = Math.floor(Math.random() * 10) + 1;
        
        if (randomChance <= 1) {
            lumiere.style.transition = 'top 8s linear';
            lumiere.style.top = `3000px`;

            setTimeout(() => {
                lumiere.style.transition = 'none';
                lumiere.style.top = '2420px';
                setTimeout(deplacerLumiere, 20000);
            }, 20000);
        } else {

            setTimeout(deplacerLumiere, 1000);
        }
    }
    
    deplacerLumiere();
});
