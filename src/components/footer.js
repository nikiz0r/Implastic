class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="site-footer footer-dark">
                <!-- Footer Copyright Part -->
                <div class="footer-bottom overlay-wraper bg-white">
                    <div class="overlay-main"></div>
                    <div class="container p-t30">
                        <div class="mt-footer-bot-center">
                            <span class="copyrights-text">
                                    Implastic Comércio Internacional LTDA. Av. Real, 220, Aldeia da Serra CEP 06429-200, Barueri, São Paulo, Brasil.<br/>
                                    © <span id="currentYear">2018</span> Implastic LTDA. Todos os direitos reservados.
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
            
            <!-- Scroll Top Button -->
            <button class="scroltop"><span class="fa fa-arrow-right relative" id="btn-vibrate"></span></button>
            </div>
            
            <!-- Loading Div ===== -->
            <div class="loading-area">
                <div class="loading-box"></div>
                <div class="loading-pic">
                    <div class="loading_progress-container">
                        <div class="loading_progress">
                            <div class="loading_progress-bar">
                                <div class="loading_progress-shadow"></div>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
            <!-- Loading Div ====== -->
        `
    }
}

customElements.define('footer-component', Footer);