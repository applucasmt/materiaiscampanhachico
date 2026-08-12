
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const visuals = document.querySelectorAll('.visual-content');

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.getAttribute('data-target');
                
                // Desativa todas as telas e esconde as tags (elas voltam pra direita sozinhas pelo CSS)
                visuals.forEach(v => v.classList.remove('active'));
                
                // Ativa a tela correta, fazendo a tag vir da direita
                const activeVisual = document.getElementById(targetId);
                if (activeVisual) {
                    activeVisual.classList.add('active');
                }
            }
        });
    }, observerOptions);

    steps.forEach(step => observer.observe(step));
});
