const html = document.querySelector('body');
const darkButton = document.querySelector('.button-dark-mode');
const github = document.getElementById('github');
const linkedin = document.getElementById('linkendin');
const email = document.getElementById('email');
const iconeDownload = document.getElementById('icone-download');
const iconeAbrir = document.getElementById('icone-abrir');
const entrarEmContato = document.getElementById('entrar-em-contato');
const downloadCV = document.getElementById('download-cv');
(function() {
    const temaSalvo = localStorage.getItem('tema') || 'dark';
    html.setAttribute('data-contexto', temaSalvo);

    if (temaSalvo === 'light') {
        if (iconeDownload) iconeDownload.setAttribute('src', 'assets/download-dark.svg');
        if (iconeAbrir) iconeAbrir.setAttribute('src', 'assets/open-in-window-dark.svg');
        if (darkButton) darkButton.querySelector('img').setAttribute('src', 'assets/brightness.svg');
    } else {
        if (iconeDownload) iconeDownload.setAttribute('src', 'assets/download.svg');
        if (iconeAbrir) iconeAbrir.setAttribute('src', 'assets/open_in_new.svg');
        if (darkButton) darkButton.querySelector('img').setAttribute('src', 'assets/dark_mode.svg');
    }
})();

const todosLinks = document.querySelectorAll('nav a');
todosLinks.forEach((link) => {
    link.addEventListener('mouseenter', function() {
        this.parentNode.style.transition = 'all 0.3s ease';
    });
});

if (darkButton) {
    darkButton.addEventListener('click', () => {
        modificarImagem(html.getAttribute('data-contexto'));

        const iconsSkills = document.querySelectorAll('.skills img');
        iconsSkills.forEach((icon, index) => {
            setTimeout(() => {
                icon.style.transform = 'rotate(360deg)';
                icon.style.transition = 'transform 0.5s ease';
            }, index * 50);

            setTimeout(() => {
                icon.style.transform = 'rotate(0deg)';
            }, 500 + (index * 50));
        });
    });
}

const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach((link) => {
    link.addEventListener('click', function() {
        const proximoLink = this.nextElementSibling;
        if (proximoLink && proximoLink.tagName === 'A') {
            proximoLink.style.opacity = '0.5';
            setTimeout(() => {
                proximoLink.style.opacity = '1';
            }, 300);
        }
    });
});

if (github) {
    github.addEventListener('click', () => {
        window.open('https://github.com/FilipeLaceerda', '_blank');
    });
}

if (linkedin) {
    linkedin.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/filipe-lacerda-31a881183/', '_blank');
    });
}

if (email) {
    email.addEventListener('click', () => {
        window.location.href = 'mailto:filipeelacerda@gmail.com';
    });
}

function modificarImagem(contexto) {
    if (contexto === 'dark') {
        html.setAttribute('data-contexto', 'light');
        localStorage.setItem('tema', 'light');
        if (iconeDownload) iconeDownload.setAttribute('src', 'assets/download-dark.svg');
        if (iconeAbrir) iconeAbrir.setAttribute('src', 'assets/open-in-window-dark.svg');
        if (darkButton) darkButton.querySelector('img').setAttribute('src', 'assets/brightness.svg');

        atualizarMensagemTema('Modo Claro Ativado');
    } else {
        if (iconeDownload) iconeDownload.setAttribute('src', 'assets/download.svg');
        if (iconeAbrir) iconeAbrir.setAttribute('src', 'assets/open_in_new.svg');
        if (darkButton) darkButton.querySelector('img').setAttribute('src', 'assets/dark_mode.svg');
        html.setAttribute('data-contexto', 'dark');
        localStorage.setItem('tema', 'dark');

        atualizarMensagemTema('Modo Escuro Ativado');
    }
}

const atualizarMensagemTema = (mensagem) => {
    const divMensagem = document.createElement('div');
    divMensagem.className = 'notification-toast';
    divMensagem.innerHTML = `<strong>✓</strong> ${mensagem}`;
    document.body.appendChild(divMensagem);

    setTimeout(() => {
        if (divMensagem.parentNode) {
            divMensagem.parentNode.removeChild(divMensagem);
        }
    }, 2000);
};

let fotoCapturada = null;
let stream = null;

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const btnAbrirCamera = document.getElementById('btn-abrir-camera');
const btnCapturar = document.getElementById('btn-capturar');
const btnNovaFoto = document.getElementById('btn-nova-foto');
const cameraContainer = document.getElementById('camera-container');
const fotoPreview = document.getElementById('foto-preview');
const fotoCapturadaImg = document.getElementById('foto-capturada');

if (btnAbrirCamera) {
    btnAbrirCamera.addEventListener('click', async () => {
        try {
            stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            });

            video.srcObject = stream;
            cameraContainer.style.display = 'block';
            btnAbrirCamera.style.display = 'none';
            btnCapturar.style.display = 'block';
            fotoPreview.style.display = 'none';
        } catch (erro) {
            alert('Erro ao acessar a câmera: ' + erro.message);
        }
    });
}

if (btnCapturar) {
    btnCapturar.addEventListener('click', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        fotoCapturada = canvas.toDataURL('image/png');
        fotoCapturadaImg.src = fotoCapturada;

        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }

        cameraContainer.style.display = 'none';
        btnCapturar.style.display = 'none';
        fotoPreview.style.display = 'block';
        btnNovaFoto.style.display = 'block';

        atualizarMensagemTema('Foto Capturada com Sucesso!');
    });
}

if (btnNovaFoto) {
    btnNovaFoto.addEventListener('click', () => {
        fotoCapturada = null;
        fotoPreview.style.display = 'none';
        btnNovaFoto.style.display = 'none';
        btnAbrirCamera.style.display = 'block';
    });
}

const formulario = document.querySelector('form');

if (formulario) {
    const btnLimpar = document.getElementById('limpar');
    const inputTelefone = document.getElementById('ftelefone');

    if (inputTelefone) {
        inputTelefone.addEventListener('input', (e) => {
            let valor = e.target.value.replace(/\D/g, '');

            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }

            let valorFormatado = '';

            if (valor.length > 0) {
                valorFormatado = '(' + valor.substring(0, 2);
            }
            if (valor.length >= 3) {
                valorFormatado += ') ' + valor.substring(2, 7);
            }
            if (valor.length >= 7) {
                if (valor.length <= 10) {
                    valorFormatado = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 6) + '-' + valor.substring(6, 10);
                } else {
                    valorFormatado = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + '-' + valor.substring(7, 11);
                }
            }

            e.target.value = valorFormatado;
        });
    }

    if (btnLimpar) {
        btnLimpar.addEventListener('click', () => {
            setTimeout(() => {
                fotoCapturada = null;
                if (fotoPreview) fotoPreview.style.display = 'none';
                if (btnNovaFoto) btnNovaFoto.style.display = 'none';
                if (btnCapturar) btnCapturar.style.display = 'none';
                if (cameraContainer) cameraContainer.style.display = 'none';
                if (btnAbrirCamera) btnAbrirCamera.style.display = 'block';

                if (stream) {
                    stream.getTracks().forEach(track => track.stop());
                    stream = null;
                }
            }, 0);
        });
    }

    const todosInputs = formulario.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="date"], input[type="tel"]');

    todosInputs.forEach((input) => {
        input.addEventListener('blur', (e) => {
            validarCampoIndividual(e.target);
        });

        input.addEventListener('input', (e) => {
            const campoErro = e.target.nextElementSibling;
            if (campoErro && campoErro.classList.contains('mensagem-erro')) {
                campoErro.remove();
            }
        });
    });

    const validarCampoIndividual = (campo) => {
        const label = campo.previousElementSibling;
        const nomeCampo = label ? label.textContent : 'Campo';

        const erroAnterior = campo.nextElementSibling;
        if (erroAnterior && erroAnterior.classList.contains('mensagem-erro')) {
            erroAnterior.remove();
        }

        if (campo.value.trim() === '' && campo.hasAttribute('required')) {
            mostrarErro(campo, `${nomeCampo} é obrigatório`);
            return false;
        }

        return true;
    };

    const mostrarErro = (campo, mensagem) => {
        const divErro = document.createElement('div');
        divErro.classList.add('mensagem-erro');
        divErro.style.cssText = 'color: #ff4444; font-size: 11px; margin-top: 5px; animation: shake 0.3s;';
        divErro.innerHTML = `⚠ ${mensagem}`;

        if (campo.parentNode) {
            campo.parentNode.insertBefore(divErro, campo.nextSibling);
        }
    };

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const mensagensErro = formulario.querySelectorAll('.mensagem-erro');
        mensagensErro.forEach(msg => msg.remove());

        const nome = document.getElementById('fnome').value.trim();
        const emailInput = document.getElementById('femail').value.trim();
        const telefone = document.getElementById('ftelefone').value.trim();
        const senha = document.getElementById('fpassword').value;
        const dataNascimento = document.getElementById('fdata').value;
        const generoM = document.getElementById('fgeneroM').checked;
        const generoF = document.getElementById('fgeneroF').checked;
        const genero = generoM ? 'Masculino' : generoF ? 'Feminino' : '';
        
        let formularioValido = true;

        if (!nome || nome === '') {
            mostrarErro(document.getElementById('fnome'), 'O campo nome não pode estar vazio');
            formularioValido = false;
        } else if (nome.length < 3) {
            mostrarErro(document.getElementById('fnome'), 'O nome deve ter pelo menos 3 caracteres');
            formularioValido = false;
        } else if (nome.length > 50) {
            mostrarErro(document.getElementById('fnome'), 'O nome deve ter no máximo 50 caracteres');
            formularioValido = false;
        }
        
        if (!emailInput || emailInput === '') {
            mostrarErro(document.getElementById('femail'), 'O campo e-mail não pode estar vazio');
            formularioValido = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput)) {
                mostrarErro(document.getElementById('femail'), 'Por favor, insira um e-mail válido (ex: nome@email.com)');
                formularioValido = false;
            }
        }
        
        if (!telefone || telefone === '') {
            mostrarErro(document.getElementById('ftelefone'), 'O campo telefone não pode estar vazio');
            formularioValido = false;
        } else {
            const telefoneRegex = /^[()0-9\s-]+$/;
            const apenasNumeros = telefone.replace(/\D/g, '');

            if (!telefoneRegex.test(telefone)) {
                mostrarErro(document.getElementById('ftelefone'), 'O telefone deve conter apenas números, parênteses, espaços e traços');
                formularioValido = false;
            } else if (apenasNumeros.length < 10 || apenasNumeros.length > 11) {
                mostrarErro(document.getElementById('ftelefone'), 'O telefone deve ter 10 ou 11 dígitos (DDD + número)');
                formularioValido = false;
            }
        }
        
        if (!senha || senha === '') {
            mostrarErro(document.getElementById('fpassword'), 'O campo senha não pode estar vazio');
            formularioValido = false;
        } else if (senha.length < 6) {
            mostrarErro(document.getElementById('fpassword'), 'A senha deve ter pelo menos 6 caracteres para sua segurança');
            formularioValido = false;
        } else if (senha.length > 20) {
            mostrarErro(document.getElementById('fpassword'), 'A senha deve ter no máximo 20 caracteres');
            formularioValido = false;
        } else if (!/[A-Z]/.test(senha)) {
            mostrarErro(document.getElementById('fpassword'), 'A senha deve conter pelo menos uma letra maiúscula');
            formularioValido = false;
        } else if (!/[0-9]/.test(senha)) {
            mostrarErro(document.getElementById('fpassword'), 'A senha deve conter pelo menos um número');
            formularioValido = false;
        }
        
        if (!dataNascimento || dataNascimento === '') {
            mostrarErro(document.getElementById('fdata'), 'O campo data de nascimento não pode estar vazio');
            formularioValido = false;
        } else {
            const hoje = new Date();
            const nascimento = new Date(dataNascimento);
            const idade = hoje.getFullYear() - nascimento.getFullYear();

            if (idade < 18) {
                mostrarErro(document.getElementById('fdata'), 'Você deve ter pelo menos 18 anos para se cadastrar');
                formularioValido = false;
            } else if (idade > 120) {
                mostrarErro(document.getElementById('fdata'), 'Por favor, verifique a data de nascimento informada');
                formularioValido = false;
            }
        }
        
        if (!genero) {
            const sectionGenero = document.querySelector('.genero');
            mostrarErro(sectionGenero, 'Por favor, selecione seu gênero');
            formularioValido = false;
        }

        if (!fotoCapturada) {
            const sectionFoto = document.querySelector('.foto-section');
            mostrarErro(sectionFoto, 'Por favor, tire uma foto antes de enviar');
            formularioValido = false;
        }

        const termos = document.getElementById('ftermos').checked;
        if (!termos) {
            const sectionTermos = document.querySelector('.termos-section');
            mostrarErro(sectionTermos, 'Você precisa aceitar os termos de uso para continuar');
            formularioValido = false;
        }

        if (!formularioValido) {
            const primeiroErro = formulario.querySelector('.mensagem-erro');
            if (primeiroErro && primeiroErro.previousElementSibling) {
                primeiroErro.previousElementSibling.focus();
            }
            return;
        }
        
        const dadosFormulario = {
            nome: nome,
            email: emailInput,
            telefone: telefone,
            senha: senha,
            dataNascimento: dataNascimento,
            genero: genero,
            foto: fotoCapturada
        };
        
        console.log('Dados do formulário:', dadosFormulario);
        
        criarTelaCaptura(dadosFormulario);

        formulario.reset();
        fotoCapturada = null;
        fotoPreview.style.display = 'none';
        btnNovaFoto.style.display = 'none';
        btnAbrirCamera.style.display = 'block';
    });
}

const criarTelaCaptura = (dados) => {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'modal-content';

    modal.innerHTML = `
        <div class="modal-body">
            <div class="modal-icon">✓</div>
            <h2 class="modal-title">Cadastro Realizado!</h2>
            ${dados.foto ? `<div class="modal-foto">
                <img src="${dados.foto}" alt="Foto do cadastro">
            </div>` : ''}
            <div class="modal-info">
                <p><strong>Nome:</strong> ${dados.nome}</p>
                <p><strong>Email:</strong> ${dados.email}</p>
                <p><strong>Telefone:</strong> ${dados.telefone}</p>
                <p><strong>Data de Nascimento:</strong> ${dados.dataNascimento}</p>
                <p><strong>Gênero:</strong> ${dados.genero}</p>
            </div>
            <button id="fecharModal" class="modal-button">Fechar</button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const botaoFechar = document.getElementById('fecharModal');
    botaoFechar.addEventListener('click', () => {
        overlay.parentNode.removeChild(overlay);
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.parentNode.removeChild(overlay);
        }
    });
};

(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        @keyframes slideDown {
            from { transform: translateY(-100px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        #fecharModal:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0, 173, 181, 0.6);
        }
    `;
    document.head.appendChild(style);
})();

if (entrarEmContato) {
    entrarEmContato.addEventListener('click', () => {
        window.location.href = 'mailto:filipeelacerda@gmail.com';
    });
}

if (downloadCV) {
    downloadCV.addEventListener('click', () => {
        window.open('assets/CV_Filipe_Lacerda.pdf', '_blank');
    });
}
