class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="site-header header-style-6">

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
                                            <li><a href="rebobinadeiras.html">Rebobinadeiras de Alta Velocidade</a></li>
                                            <li><a href="impressoras.html">Impressoras</a></li>
                                            <li>
                                                <a href="javascript:;">Linhas de Extrusão<i class="fa fa-chevron-down"></i></a>
                                                <ul class="sub-menu">
                                                <li><a href="linhas-extrusao.html">Filmes</a></li>
                                                <li><a href="chapas.html">Chapas</a></li>
                                                <li><a href="processamento-plastico.html">Reciclados e Compostos</a></li>
                                                </ul>
                                            </li>
                                        </ul>
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
    }
}

customElements.define('header-component', Header);