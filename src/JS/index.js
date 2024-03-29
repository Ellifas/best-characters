const personagens = document.querySelectorAll('.personagem'); 
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450 ) {
            window.scrollTo({top: 0, behavior : 'smooth'});
        }
        removerPersonagemSelecionado();

        personagem.classList.add('selecionado');
        alterarImagemPersonagemSelecionado(personagem);
        alterarNomePersonagem(personagem);
        
        alterarDescricaoPersonagem(personagem);

 
    })

})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const personagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;

    personagemGrande.src = `./src/img/${idPersonagem}_fundo.png`;
}

function removerPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
