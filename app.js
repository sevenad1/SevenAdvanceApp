const users = [
  { codigo: '123', senha: 'senha123' },
  { codigo: '456', senha: 'senha456' }
];

const faltasPorDia = {
  '123': [
    { dia: '2025-09-01', faltas: 1 },
    { dia: '2025-09-02', faltas: 0 },
    { dia: '2025-09-03', faltas: 2 }
  ],
  '456': [
    { dia: '2025-09-01', faltas: 0 },
    { dia: '2025-09-02', faltas: 0 },
    { dia: '2025-09-03', faltas: 1 }
  ]
};

function login() {
  const codigo = document.getElementById('codigo').value;
  const senha = document.getElementById('senha').value;
  const erro = document.getElementById('erro');
  const user = users.find(u => u.codigo === codigo && u.senha === senha);

  if (user) {
    erro.textContent = '';
    showDashboard(codigo);
  } else {
    erro.textContent = 'Código ou senha incorretos.';
  }
}

function showDashboard(codigo) {
  document.getElementById('login').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');

  const faltas = faltasPorDia[codigo] || [];
  const ctx = document.getElementById('grafico').getContext('2d');

  // Remove gráfico anterior se existir
  if (window.myChart) window.myChart.destroy();

  const labels = faltas.map(f => f.dia);
  const data = faltas.map(f => f.faltas);

  window.myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Faltas por dia',
        data,
        fill: false,
        borderColor: 'red',
        tension: 0.1
      }]
    }
  });

  // Mostrar lista de faltas
  const faltasList = document.getElementById('faltasList');
  faltasList.innerHTML = '';
  faltas.forEach(f => {
    const li = document.createElement('li');
    li.textContent = `${f.dia}: ${f.faltas} falta(s)`;
    faltasList.appendChild(li);
  });
}

function logout() {
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('login').classList.remove('hidden');
  document.getElementById('codigo').value = '';
  document.getElementById('senha').value = '';
}
