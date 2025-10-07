class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="site-header header-style-6">

                <!-- Overlay -->
                <div id="overlay"></div>
                
                <!-- Popup Content -->
                <div id="popup">
                    <a href="https://www.plasticobrasil.com.br/pt/credenciamento.html?utm_source=google-display&utm_medium=cpc&utm_campaign=adsplay_plastico-brasil_credenciamento_display&utm_id=display_credenciamento-plastico-brasil&gad_source=1&gclid=EAIaIQobChMI5IWYgtbdiwMVJlNIAB01eT1yEAAYASAAEgK_dfD_BwE" target="_blank">
                        <img src="images/popup/popup_feira_internacional.jpeg" alt="Feira Internacional do Plástico">
                    </a>
                    <button class="close-btn" onclick="closePopup()">Fechar</button>
                </div>

                <div class="top-bar top-bar-liner bg-dark">
                    <div class="container">
                        <div class="row">
                            <div class="mt-topbar-right clearfix">
                                <ul class="list-unstyled pull-right tb-info-liner">
                                    <li><i class="text-primary">Nós temos a solução para seu processo!</i></li>
                                </ul>
                                <ul class="list-inline pull-right tb-social-liner">
                                    <li>
                                        <a href="https://www.linkedin.com/in/implastic-ltda-634a0b145/" target="_blank" class="fa fa-linkedin"></a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- Search Link -->

                <div class="main-bar header-middle bg-dark">
                    <div class="container">
                        <div class="logo-header">
                            <a href="/">
                                <img class="logo" width="216" height="37" alt="" />
                            </a>
                        </div>
                        <div class="header-info">
                            <ul>
                                <li>
                                    <div>
                                        <div class="icon-sm">
                                            <span class="icon-cell  text-primary"><i class="iconmoon-smartphone"></i></span>
                                        </div>
                                        <div class="icon-content">
                                            <strong>Telefone</strong>
                                            <span class="text-white">+55 11 4192 2211</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div class="icon-sm">
                                            <span class="icon-cell  text-primary"><i class="iconmoon-envelope"></i></span>
                                        </div>
                                        <div class="icon-content">
                                            <strong>Email</strong>
                                            <span class="text-white">vendas@implastic.com.br</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="sticky-header main-bar-wraper">
                    <div class="main-bar header-botton nav-bg-primary">
                        <div class="container">
                            <!-- NAV Toggle Button -->
                            <button data-target=".header-nav" data-toggle="collapse" type="button" class="navbar-toggle collapsed">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>

                            <!-- MAIN Vav -->
                            <div class="header-nav navbar-collapse collapse ">
                                <ul class=" nav navbar-nav">
                                    <li class="active">
                                        <a href="/">Home</a>
                                    </li>

                                    <li>
                                        <a href="javascript:;">Produtos / Equipamentos<i class="fa fa-chevron-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="sistemas-uv.html">Sistemas UV</a></li>
                                            <li><a href="sistemas-ir.html">Sistemas IR</a></li>
                                            <li><a href="sistemas-medicao-espessura.html">Sistemas para Medição de Espessura e Gramatura</a></li>
                                            <li><a href="equip-extrusao.html">Equipamentos para Extrusão</a></li>
                                            <li><a href="impressoras.html">Impressoras</a></li>
                                            <li>
                                                <a href="javascript:;">Linhas de Extrusão<i class="fa fa-chevron-down"></i></a>
                                                <ul class="sub-menu">
                                                <li><a href="linhas-extrusao.html">Filmes</a></li>
                                                <li><a href="chapas.html">Chapas</a></li>
                                                <li><a href="processamento-plastico.html">Reciclados e Compostos</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="eletroporador.html">Eletroporador Vet CP 125</a></li>
                                            <li><a href="vetcp3k.html">Eletroporador Vet CP 3K</a></li>
                                            <li><a href="estl.html">Equipamentos para testes e soluções para transporte e logística</a></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="enterprises.html">Implastic Enterprises</a>
                                    </li>
                                    
                                    <li>
                                        <a href="suporte-tecnico.html">Suporte Técnico</a>
                                    </li>

                                    <li>
                                        <a href="pecas.html">Vendas de Peças de Reposição</a>
                                    </li>

                                    <li>
                                        <a href="contato.html">Contato</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        `

        this.setupPopup();
    }

    setupPopup() {
        // Get the current date
        const today = new Date();
        const expirationDate = new Date("2025-03-28");

        // Check if it's before the expiration date AND popup has not been shown in this session
        if (today < expirationDate && !sessionStorage.getItem("popupShown")) {
            document.getElementById("popup").style.display = "block";
            document.getElementById("overlay").style.display = "block";

            // Mark popup as shown in session storage
            sessionStorage.setItem("popupShown", "true");
        }

        // Close button functionality
        document.querySelector(".close-btn").addEventListener("click", () => {
            document.getElementById("popup").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        });
    }
}

customElements.define('header-component', Header);