document.getElementById('reservaForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let dataReserva = document.getElementById('dataReserva').value;
  let statusMessage = document.getElementById('reservaStatus');

  if (nome && email && dataReserva) {
    statusMessage.textContent = `Reserva feita com sucesso, ${nome}! Confirmaremos por e-mail: ${email}.`;
    statusMessage.style.color = 'green';
  } else {
    statusMessage.textContent = 'Por favor, preencha todos os campos.';
    statusMessage.style.color = 'red';
  }
});
