// Dados dos jogadores (JSON) - ATUALIZADO
/**
 * @typedef {Object} Player
 * @property {string} nome - Nome do jogador
 * @property {number} gols - Quantidade de gols marcados
 * @property {number} assistencias - Quantidade de assistências feitas
 * @property {number} golsSofridos - Quantidade de gols sofridos (se for goleiro)
 * @property {number} partidas - Quantidade de partidas jogadas
 * @property {number} frequencia - Frequência de participação (em porcentagem)
 * @property {boolean} isGoleiro - Se é goleiro ou não
 * @property {string | null} foto - Caminho para a foto do jogador
 */
const playersData = [
  { "nome": "Leandro", "gols": 5, "assistencias": 1, "golsSofridos": null, "partidas": 17, "frequencia": 17, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Alan", "gols": 1, "assistencias": 3, "golsSofridos": null, "partidas": 17, "frequencia": 17, "isGoleiro": false, "foto": "./images/players/allan_santos.jpeg", "instagram": "@allan_snts7" },
  { "nome": "Jhon", "gols": 0, "assistencias": 3, "golsSofridos": null, "partidas": 18, "frequencia": 18, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Teteu", "gols": 2, "assistencias": 0, "golsSofridos": null, "partidas": 9, "frequencia": 9, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Rick", "gols": 2, "assistencias": 0, "golsSofridos": null, "partidas": 9, "frequencia": 9, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Kennedy", "gols": 1, "assistencias": 0, "golsSofridos": null, "partidas": 16, "frequencia": 16, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Júlio", "gols": 1, "assistencias": 1, "golsSofridos": null, "partidas": 14, "frequencia": 14, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Lizandro", "gols": 0, "assistencias": 1, "golsSofridos": null, "partidas": 14, "frequencia": 14, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Denisson", "gols": 0, "assistencias": 0, "golsSofridos": null, "partidas": 7, "frequencia": 7, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Patuzinho", "gols": 1, "assistencias": 0, "golsSofridos": null, "partidas": 7, "frequencia": 7, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Daniel", "gols": 4, "assistencias": 4, "golsSofridos": null, "partidas": 19, "frequencia": 19, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Felipe", "gols": 0, "assistencias": 2, "golsSofridos": null, "partidas": 18, "frequencia": 18, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Thawan", "gols": 6, "assistencias": 1, "golsSofridos": null, "partidas": 17, "frequencia": 17, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Guilherme", "gols": 1, "assistencias": 1, "golsSofridos": null, "partidas": 10, "frequencia": 10, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Thiere", "gols": 0, "assistencias": 1, "golsSofridos": null, "partidas": 10, "frequencia": 10, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "João", "gols": 1, "assistencias": 0, "golsSofridos": null, "partidas": 8, "frequencia": 8, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Ariel", "gols": 0, "assistencias": 2, "golsSofridos": null, "partidas": 8, "frequencia": 8, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Pedro", "gols": 1, "assistencias": 0, "golsSofridos": null, "partidas": 9, "frequencia": 9, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Mikael", "gols": 1, "assistencias": 0, "golsSofridos": null, "partidas": 9, "frequencia": 9, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Junior", "gols": 0, "assistencias": 1, "golsSofridos": null, "partidas": 7, "frequencia": 7, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Datã", "gols": 0, "assistencias": 0, "golsSofridos": null, "partidas": 7, "frequencia": 7, "isGoleiro": false, "foto": null, "instagram": "" },
  { "nome": "Cleverton", "gols": 1, "assistencias": 0, "golsSofridos": 11, "partidas": 17, "frequencia": 17, "isGoleiro": true, "foto": null, "instagram": "" },
  { "nome": "Adriano", "gols": 1, "assistencias": 0, "golsSofridos": 4, "partidas": 19, "frequencia": 19, "isGoleiro": true, "foto": null, "instagram": "" },
  { "nome": "Negão", "gols": 0, "assistencias": 0, "golsSofridos": 5, "partidas": 7, "frequencia": 7, "isGoleiro": true, "foto": null, "instagram": "" }
];

// Função para criar avatar padrão com iniciais (versão compatível)
function createDefaultAvatar(nome, sizeClass = 'w-8 h-8') {
    const initials = nome.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'];
    const color = colors[nome.length % colors.length];
    
    return `<div class="${sizeClass} rounded-full flex items-center justify-center text-white text-xs font-bold" style="background-color: ${color}">${initials}</div>`;
}

// Função para renderizar foto do jogador
/**
 * Renderiza a foto do jogador ou um avatar padrão se não houver foto.
 * @param {Object} player - O jogador cuja foto será renderizada.
 * @param {string} player.nome - O nome do jogador.
 * @param {string|null} player.foto - O caminho para a foto do jogador.
 * @returns {string} - O HTML para renderizar a foto ou o avatar.
 */
function renderPlayerPhoto(player) {
    if (player.foto !== null) {
        return `<img src="${player.foto}" alt="${player.nome}" class="w-8 h-8 rounded-full object-cover">`;
    } 
    return createDefaultAvatar(player.nome);
}

// Função para lidar com erro de carregamento de imagem
function handleImageError(img, playerName) {
    const initials = playerName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'];
    const color = colors[playerName.length % colors.length];
    
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold';
    avatarDiv.style.backgroundColor = color;
    avatarDiv.textContent = initials;
    
    img.parentNode.replaceChild(avatarDiv, img);
}

// Função para abrir o modal do jogador
function openPlayerModal(player) {
    const modal = document.getElementById('playerModal');
    const modalPhoto = document.getElementById('modalPhoto');
    const modalPlayerName = document.getElementById('modalPlayerName');
    const modalPlayerRole = document.getElementById('modalPlayerRole');
    const modalGols = document.getElementById('modalGols');
    const modalAssistencias = document.getElementById('modalAssistencias');
    const modalPartidas = document.getElementById('modalPartidas');
    const modalPontuacao = document.getElementById('modalPontuacao');

    const modalInstagramSection = document.getElementById('modalInstagramSection');
    const modalInstagram = document.getElementById('modalInstagram');
    const modalInstagramText = document.getElementById('modalInstagramText');
    
    // Preencher dados do modal
    modalPlayerName.textContent = player.nome;
    modalPlayerRole.textContent = player.isGoleiro ? 'Goleiro' : 'Jogador de Linha';
    modalGols.textContent = player.gols || 0;
    modalAssistencias.textContent = player.assistencias || 0;
    modalPartidas.textContent = player.partidas || 0;
    
    // Calcular pontuação
    const pontuacao = (player.gols * 1) + (player.assistencias * 1.1);
    modalPontuacao.textContent = pontuacao.toFixed(2);
    

    
    // Foto do jogador
    if (player.foto) {
        modalPhoto.innerHTML = `<img src="${player.foto}" alt="${player.nome}" class="w-24 h-24 rounded-full object-cover mx-auto">`;
    } else {
        modalPhoto.innerHTML = createDefaultAvatarCustom(player.nome, 'w-24 h-24');
    }
    
    // Instagram
    if (player.instagram && player.instagram.trim() !== '') {
        modalInstagramSection.classList.remove('hidden');
        modalInstagram.href = `https://instagram.com/${player.instagram.replace('@', '')}`;
        modalInstagramText.textContent = player.instagram;
    } else {
        modalInstagramSection.classList.add('hidden');
    }
    
    // Mostrar modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevenir scroll do body
}

// Função para fechar o modal
function closePlayerModal() {
    const modal = document.getElementById('playerModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restaurar scroll do body
}

// Função para criar avatar padrão com tamanho customizável
function createDefaultAvatarCustom(nome, sizeClass = 'w-8 h-8') {
    const initials = nome.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'];
    const color = colors[nome.length % colors.length];
    
    return `<div class="${sizeClass} rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto" style="background-color: ${color}">${initials}</div>`;
}

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('stats-table-body');
    const goalkeeperBody = document.getElementById('goalkeeper-table-body');

    // Calcular estatísticas
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

    // Jogadores de linha: ordenar por pontuação
    const linePlayers = processedPlayers.filter(p => !p.isGoleiro);
    linePlayers.sort((a, b) => b.pontuacaoTotal - a.pontuacaoTotal);

    // Goleiros: ordenar por média de gols sofridos (menor para maior)
    const goalkeepers = processedPlayers.filter(p => p.isGoleiro);
    goalkeepers.sort((a, b) => a.mediaGolsSofridos - b.mediaGolsSofridos);

    // Preencher tabela de jogadores de linha
    linePlayers.forEach((player, index) => {
        const rank = index + 1;
        const row = document.createElement('tr');
        row.className = 'border-b dark:border-gray-700';
        row.classList.add('odd:bg-gray-800', 'even:bg-gray-900');

        // Ícone de luva para goleiros (não usado aqui)
        const goalkeeperIcon = '';

        // Formatação dos números
        const formatNumber = (num) => num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        const formatInt = (num) => num || '-';

        // Definir cor da pontuação
        let scoreClass = '';
        if (rank === 1) {
            scoreClass = 'text-green-600';
        } else if (rank === 2) {
            scoreClass = 'text-green-500';
        } else if (rank === 3) {
            scoreClass = 'text-green-400';
        } else if (rank === 4) {
            scoreClass = 'text-gradient-green-blue-1';
        } else if (rank === 5) {
            scoreClass = 'text-gradient-green-blue-2';
        } else if (rank === 6) {
            scoreClass = 'text-gradient-green-blue-3';
        } else {
            scoreClass = 'text-blue-500';
        }

        let scoreStyle = '';
        if (scoreClass.startsWith('text-gradient')) {
            if (rank === 4) {
                scoreStyle = 'background: linear-gradient(90deg, #34d399 40%, #60a5fa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;';
            } else if (rank === 5) {
                scoreStyle = 'background: linear-gradient(90deg, #34d399 40%, #60a5fa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;';
            } else if (rank === 6) {
                scoreStyle = 'background: linear-gradient(90deg, #6ee7b7 20%, #93c5fd 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;';
            }
            scoreClass = '';
        }

        row.innerHTML = `
            <td class="px-6 py-4 font-medium text-white">${rank}</td>
            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap">
                <div class="flex items-center gap-3">
                    ${renderPlayerPhoto(player)}
                    <span class="cursor-pointer hover:text-blue-400 transition-colors" onclick="openPlayerModal(${JSON.stringify(player).replace(/"/g, '&quot;')})">${goalkeeperIcon}${player.nome}</span>
                </div>
            </th>
            <td class="px-6 py-4 text-center">${formatInt(player.gols)}</td>
            <td class="px-6 py-4 text-center">${formatInt(player.assistencias)}</td>
            <td class="px-6 py-4 text-center">${formatInt(player.partidas)}</td>
            <td class="px-6 py-4 text-center">${formatInt(player.golsSofridos)}</td>
            <td class="px-6 py-4 text-center">${formatNumber(player.mediaParticipacoes)}</td>
            <td class="px-6 py-4 text-center">-</td>
            <td class="px-6 py-4 text-center font-bold text-lg ${scoreClass}" style="${scoreStyle}">${formatNumber(player.pontuacaoTotal)}</td>
        `;
        tableBody.appendChild(row);
    });

    // Preencher tabela de goleiros
    goalkeepers.forEach((player, index) => {
        const rank = index + 1;
        const row = document.createElement('tr');
        row.className = 'border-b dark:border-gray-700';
        row.classList.add('odd:bg-gray-800', 'even:bg-gray-900');

        // Ícone de luva
        const goalkeeperIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline-block mr-2 text-blue-500" viewBox="0 0 16 16">
                 <path d="M7.563.063a1 1 0 0 1 .874 0l5.5 3.143a1 1 0 0 1 .563.937v5.714a1 1 0 0 1-.563.937l-5.5 3.143a1 1 0 0 1-.874 0l-5.5-3.143A1 1 0 0 1 1.5 9.857V4.143a1 1 0 0 1 .563-.937zM8 1.173 3.063 4.11v5.78l4.937 2.964 4.937-2.964V4.11z"/>
                 <path d="M11.5 9.092a.5.5 0 0 0-.832-.375l-2.5 1.875a.5.5 0 0 0 0 .75l2.5 1.875a.5.5 0 0 0 .832-.375zM8.5 6.51V4.893l-2.083 1.25a.5.5 0 0 0 0 .866zm-3.575 3.255L2.5 8.673v-1.35L4.5 6.432a.5.5 0 0 0 .832-.375V4.143l-2.201 1.32a.5.5 0 0 0-.263.438v5.714a.5.5 0 0 0 .263.438L4.925 13.3v-1.928a.5.5 0 0 0-.832-.375z"/>
               </svg>`;

        // Formatação dos números
        const formatNumber = (num) => num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        const formatInt = (num) => num || '-';

        // Cor vinho para pontuação
        const scoreClass = 'text-[#8B1E3F]';

        row.innerHTML = `
            <td class="px-6 py-4 font-medium text-white">${rank}</td>
            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap">
                <div class="flex items-center gap-3">
                    ${renderPlayerPhoto(player)}
                    <span class="cursor-pointer hover:text-blue-400 transition-colors" onclick="openPlayerModal(${JSON.stringify(player).replace(/"/g, '&quot;')})">${goalkeeperIcon}${player.nome}</span>
                </div>
            </th>
            <td class="px-6 py-4 text-center">${formatInt(player.partidas)}</td>
            <td class="px-6 py-4 text-center">${formatInt(player.golsSofridos)}</td>
            <td class="px-6 py-4 text-center">${formatNumber(player.mediaGolsSofridos)}</td>
            <td class="px-6 py-4 text-center font-bold text-lg ${scoreClass}">${formatNumber(player.pontuacaoTotal)}</td>
        `;
        goalkeeperBody.appendChild(row);
    });
    
    // Event listeners para o modal
    const closeModalBtn = document.getElementById('closeModal');
    const modal = document.getElementById('playerModal');
    
    // Fechar modal ao clicar no botão X
    closeModalBtn.addEventListener('click', closePlayerModal);
    
    // Fechar modal ao clicar fora dele
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closePlayerModal();
        }
    });
    
    // Fechar modal com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closePlayerModal();
        }
    });
});

// Tornar as funções globais para uso nos onclick
window.openPlayerModal = openPlayerModal;
window.closePlayerModal = closePlayerModal;
