document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupération des données du formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Simulation d'envoi (à remplacer par PHP/Fetch plus tard)
    console.log('Message envoyé :', formData);
    
    // Feedback visuel
    alert('Message envoyé avec succès !');
    this.reset();
});