// Dados dos jogadores (JSON) - ATUALIZADO
const playersData = [
  { "nome": "Leandro", "gols": 2, "assistencias": 1, "golsSofridos": null, "partidas": 9, "frequencia": 9, "isGoleiro": false },
  { "nome": "Alan", "gols": 1, "assistencias": 2, "golsSofridos": null, "partidas": 9, "frequencia": 9, "isGoleiro": false },
  { "nome": "Jhon", "gols": 0, "assistencias": 2, "golsSofridos": null, "partidas": 9, "frequencia": 9, "isGoleiro": false },
  { "nome": "Teteu", "gols": 2, "assistencias": 0, "golsSofridos": null, "partidas": 9, "frequencia": 9, "isGoleiro": false },
  { "nome": "Rick", "gols": 2, "assistencias": 0, "golsSofridos": null, "partidas": 9, "frequencia": 9, "isGoleiro": false },
  { "nome": "Kennedy", "gols": 0, "assistencias": 0, "golsSofridos": null, "partidas": 7, "frequencia": 7, "isGoleiro": false },
  { "nome": "Júlio", "gols": 0, "assistencias": 1, "golsSofridos": null, "partidas": 7, "frequencia": 7, "isGoleiro": false },
  { "nome": "Lizandro", "gols": 0, "assistencias": 0, "golsSofridos": null, "partidas": 7, "frequencia": 7, "isGoleiro": false },
  { "nome": "Denisson", "gols": 0, "assistencias": 0, "golsSofridos": null, "partidas": 7, "frequencia": 7, "isGoleiro": false },
  { "nome": "Patuzinho", "gols": 1, "assistencias": 0, "golsSofridos": null, "partidas": 7, "frequencia": 7, "isGoleiro": false },
  { "nome": "Daniel", "gols": 4, "assistencias": 3, "golsSofridos": null, "partidas": 10, "frequencia": 10, "isGoleiro": false },
  { "nome": "Felipe", "gols": 0, "assistencias": 2, "golsSofridos": null, "partidas": 10, "frequencia": 10, "isGoleiro": false },
  { "nome": "Thawan", "gols": 4, "assistencias": 1, "golsSofridos": null, "partidas": 10, "frequencia": 10, "isGoleiro": false },
  { "nome": "Guilherme", "gols": 1, "assistencias": 1, "golsSofridos": null, "partidas": 10, "frequencia": 10, "isGoleiro": false },
  { "nome": "Thiere", "gols": 0, "assistencias": 1, "golsSofridos": null, "partidas": 10, "frequencia": 10, "isGoleiro": false },
  { "nome": "Cleverton", "gols": 0, "assistencias": 0, "golsSofridos": 8, "partidas": 9, "frequencia": 9, "isGoleiro": true },
  { "nome": "Adriano", "gols": 0, "assistencias": 0, "golsSofridos": 2, "partidas": 10, "frequencia": 10, "isGoleiro": true },
  { "nome": "Negão", "gols": 0, "assistencias": 0, "golsSofridos": 5, "partidas": 7, "frequencia": 7, "isGoleiro": true }
];

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('stats-table-body');

    // 1. Calcular as estatísticas
    const processedPlayers = playersData.map(player => {
        const pontuacaoTotal = (player.gols * 1) + (player.assistencias * 1.1);
        const mediaParticipacoes = player.frequencia > 0 ? (player.gols + player.assistencias) / player.frequencia : 0;
        const mediaGolsSofridos = player.isGoleiro && player.partidas > 0 ? player.golsSofridos / player.partidas : 0;
        
        return {
            ...player,
            pontuacaoTotal,
            mediaParticipacoes,
            mediaGolsSofridos
        };
    });

    // 2. Ordenar os jogadores por pontuação total (do maior para o menor)
    processedPlayers.sort((a, b) => b.pontuacaoTotal - a.pontuacaoTotal);

    // 3. Popular a tabela
    processedPlayers.forEach((player, index) => {
        const rank = index + 1;
        const row = document.createElement('tr');
        
        // Define as classes de estilo para a linha
        row.className = 'border-b dark:border-gray-700';
        if (player.isGoleiro) {
            // Destaque especial para goleiros
            row.classList.add('bg-blue-50', 'dark:bg-blue-900/50');
        } else {
            // Cores alternadas para jogadores de linha
            row.classList.add('odd:bg-white', 'odd:dark:bg-gray-800', 'even:bg-gray-50', 'even:dark:bg-gray-800/50');
        }

        // Ícone de luva para goleiros
        const goalkeeperIcon = player.isGoleiro 
            ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline-block mr-2 text-blue-500" viewBox="0 0 16 16">
                 <path d="M7.563.063a1 1 0 0 1 .874 0l5.5 3.143a1 1 0 0 1 .563.937v5.714a1 1 0 0 1-.563.937l-5.5 3.143a1 1 0 0 1-.874 0l-5.5-3.143A1 1 0 0 1 1.5 9.857V4.143a1 1 0 0 1 .563-.937zM8 1.173 3.063 4.11v5.78l4.937 2.964 4.937-2.964V4.11z"/>
                 <path d="M11.5 9.092a.5.5 0 0 0-.832-.375l-2.5 1.875a.5.5 0 0 0 0 .75l2.5 1.875a.5.5 0 0 0 .832-.375zM8.5 6.51V4.893l-2.083 1.25a.5.5 0 0 0 0 .866zm-3.575 3.255L2.5 8.673v-1.35L4.5 6.432a.5.5 0 0 0 .832-.375V4.143l-2.201 1.32a.5.5 0 0 0-.263.438v5.714a.5.5 0 0 0 .263.438L4.925 13.3v-1.928a.5.5 0 0 0-.832-.375z"/>
               </svg>`
            : '';
        
        // Formatação dos números
        const formatNumber = (num) => num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        const formatInt = (num) => num || '-';

        row.innerHTML = `
            <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">${rank}</td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                ${goalkeeperIcon}${player.nome}
            </th>
            <td class="px-6 py-4 text-center">${formatInt(player.gols)}</td>
            <td class="px-6 py-4 text-center">${formatInt(player.assistencias)}</td>
            <td class="px-6 py-4 text-center">${formatInt(player.partidas)}</td>
            <td class="px-6 py-4 text-center">${formatInt(player.golsSofridos)}</td>
            <td class="px-6 py-4 text-center">${formatNumber(player.mediaParticipacoes)}</td>
            <td class="px-6 py-4 text-center">${player.isGoleiro ? formatNumber(player.mediaGolsSofridos) : '-'}</td>
            <td class="px-6 py-4 text-center font-bold text-lg ${player.pontuacaoTotal > 5 ? 'text-emerald-500' : (player.pontuacaoTotal > 2 ? 'text-sky-500' : '')}">${formatNumber(player.pontuacaoTotal)}</td>
        `;
        tableBody.appendChild(row);
    });
});
