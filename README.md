# ⚽ Sistema de Ranking de Jogadores

Um sistema web moderno e responsivo para gerenciamento e visualização de estatísticas de jogadores de futebol, com interface intuitiva e funcionalidades avançadas.

## 🚀 Funcionalidades

### 📊 **Tabelas Interativas**
- **Ranking automático** por pontuação (Gols × 1 + Assistências × 1.1)
- **Colunas fixas** para navegação em dispositivos móveis
- **Separação por posição**: Jogadores de linha e goleiros
- **Estatísticas completas**: Gols, assistências, partidas, gols sofridos

### 🖼️ **Sistema de Fotos**
- **Fotos personalizadas** dos jogadores
- **Avatars automáticos** com iniciais coloridas
- **Fallback inteligente** para imagens não encontradas
- **Organização estruturada** em pastas por posição

### 📱 **Modal Interativo**
- **Perfis detalhados** ao clicar no nome do jogador
- **Design responsivo** adaptável a qualquer tela
- **Links para redes sociais** (Instagram)
- **Controles intuitivos** (ESC, clique fora, botão X)

### 🎨 **Interface Moderna**
- **Design dark** com Tailwind CSS
- **Tipografia Inter** para melhor legibilidade
- **Animações suaves** e transições elegantes
- **Totalmente responsivo** para mobile e desktop

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos avançados com Tailwind CSS
- **JavaScript ES6+** - Lógica interativa e manipulação DOM
- **Python HTTP Server** - Servidor local para desenvolvimento

## 📁 Estrutura do Projeto

```
score/
├── index.html              # Página principal
├── script.js               # Lógica JavaScript
├── images/                 # Assets de imagens
│   ├── players/           # Fotos dos jogadores
│   └── goalkeepers/       # Fotos dos goleiros
├── README.md              # Documentação
└── LICENSE                # Licença do projeto
```

## 🚀 Como Executar

### Pré-requisitos
- Python 3.x instalado
- Navegador web moderno

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd score
   ```

2. **Inicie o servidor local**
   ```bash
   python -m http.server 8000
   ```

3. **Acesse no navegador**
   ```
   http://localhost:8000
   ```

## 📊 Estrutura de Dados

Cada jogador possui as seguintes propriedades:

```javascript
{
  "nome": "Nome do Jogador",
  "gols": 4,
  "assistencias": 3,
  "golsSofridos": null,        // Apenas para goleiros
  "partidas": 10,
  "frequencia": 10,
  "isGoleiro": false,
  "foto": "./images/players/jogador.jpg",
  "instagram": "@jogador"
}
```

## 🎯 Como Adicionar Jogadores

1. **Adicione os dados** no array `playersData` em `script.js`
2. **Adicione a foto** na pasta `images/players/` ou `images/goalkeepers/`
3. **Siga a nomenclatura**: `nome_sobrenome.jpg`
4. **Atualize o campo foto** com o caminho correto

## 📱 Funcionalidades Mobile

- **Scroll horizontal** com colunas fixas
- **Modal responsivo** adaptável
- **Touch-friendly** para dispositivos móveis
- **Performance otimizada** para conexões lentas

## 🔧 Personalização

### Cores dos Avatars
Edite o array `colors` na função `createDefaultAvatar()` para personalizar as cores dos avatars.

### Fórmula de Pontuação
Altere a fórmula em `pontuacaoTotal = (player.gols * 1) + (player.assistencias * 1.1)`

### Estilos
Personalize as cores e estilos editando as classes Tailwind no HTML.

---

## 💡 Propostas de Melhoria

### 1. **[Sistema de Gestão Completo]** - Dashboard Administrativo
**Foco**: Transformar o projeto em uma plataforma completa de gestão esportiva

- **CRUD completo** para jogadores, partidas e estatísticas
- **Dashboard administrativo** com gráficos e métricas
- **Sistema de autenticação** para diferentes níveis de acesso
- **Histórico de partidas** com detalhamento por jogo
- **Relatórios exportáveis** em PDF/Excel
- **Backup automático** dos dados

### 2. **[Analytics e Inteligência]** - Sistema de Análise Avançada
**Foco**: Implementar análises estatísticas e insights inteligentes

- **Gráficos interativos** com Chart.js/D3.js
- **Análise de tendências** e evolução de performance
- **Comparação entre jogadores** com radar charts
- **Predições de performance** usando algoritmos simples
- **Heatmaps de posicionamento** em campo
- **Métricas avançadas** (eficiência, consistência, etc.)

### 3. **[Plataforma Social]** - Comunidade e Engajamento
**Foco**: Criar uma experiência social e interativa para os jogadores

- **Sistema de comentários** e avaliações
- **Feed de atividades** e conquistas
- **Sistema de badges** e conquistas gamificadas
- **Integração com redes sociais** (compartilhamento automático)
- **Chat em tempo real** entre jogadores
- **Calendário de jogos** com notificações
- **Sistema de votação** para melhor jogador da partida

---

**Escolha uma das propostas acima para receber um plano detalhado de implementação com especificações técnicas, cronograma e benefícios.**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

---

**Desenvolvido com ⚽ para a comunidade esportiva**