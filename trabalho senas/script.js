// Selecionando os elementos do DOM
const btnContato = document.getElementById('btn-contato');
const formCadastro = document.getElementById('form-cadastro');

// 1. Interatividade do Botão de Contatos (Exibe Alerta)
btnContato.addEventListener('click', () => {
    alert('🎮 Suporte GameZone:\n\n📧 E-mail: contato@ZonaGamer.com\n📞 Discord: ZonaGamer#0000\nHorário de atendimento: 24h para suporte ao Player 1!');
});

// 2. Interatividade e validação do formulário
formCadastro.addEventListener('submit', (event) => {
    // Impede o comportamento padrão de recarregar a página
    event.preventDefault();

    // Captura os valores digitados
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Exibe um feedback personalizado ao usuário
    alert(`GG, ${nome}! Sua inscrição foi realizada. Enviamos os detalhes para o e-mail: ${email}`);

    // Limpa os campos do formulário após o sucesso
    formCadastro.reset();
});