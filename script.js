// Conteúdo para script.js

const observerOptions = {
    root: null, // Observa em relação ao viewport
    rootMargin: '0px', // Sem margem adicional
    threshold: 0.1 // Ativa quando 10% do elemento está visível
  };
  
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      // Se o elemento está intersectando (visível)
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible'); // Adiciona a classe para animar
        observer.unobserve(entry.target); // Para de observar este elemento após ser animado uma vez
      }
    });
  };
  
  // Cria o observador
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  // Seleciona todos os elementos que devem ser animados ao rolar
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  
  // Observa cada elemento encontrado
  elementsToAnimate.forEach(el => observer.observe(el));
  
  // -----
  // Adicionar aqui adicoes de codigo em javascript
  // -----