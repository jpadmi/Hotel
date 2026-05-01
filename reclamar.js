const claimForm = document.querySelector('#claim-form');
const successMessage = document.querySelector('#success-message');
const successText = document.querySelector('#success-text');
const returnHome = document.querySelector('#return-home');

if (claimForm) {
  claimForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#claim-name').value.trim();
    const roomType = document.querySelector('input[name="claim-room-type"]:checked')?.value;
    const preserve = document.querySelector('#claim-preserve').checked;

    if (!name || !roomType) {
      alert('Por favor completa tu nombre y elige una habitación.');
      return;
    }

    const preserveText = preserve ? 'Has elegido conservar esta reserva.' : 'No has marcado conservar reserva.';
    successText.textContent = `Gracias ${name}! Tu oferta ha sido reservada como ${roomType}. ${preserveText}`;
    claimForm.style.display = 'none';
    successMessage.classList.add('active');
  });
}

if (returnHome) {
  returnHome.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}
