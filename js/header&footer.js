class MainHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
                <header>
                    <a href="#"><img src="./assets/ilia-logo.png" alt="ილია"></a>

                    <nav class="navlist">
                        <ul>
                            <li><a href="index.html">მთავარი</a></li>
                            <li><a href="about.html">პროექტის შესახებ</a></li>
                        </ul>
                    </nav>
                </header>
        `
    }
}

customElements.define('main-header', MainHeader);


class MainFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer>
                <div class="main-footer">
                    <div class="contact">
                        <p class="main">კონტაქტი</p>
                        <div class="phone">
                            <i class='bx bxs-phone'></i>
                            <p><a href="tell: (+995 32)2220009">(+995 32)222 00 09  (116)</a></p>
                        </div>
                        <div class="email">
                            <i class='bx bx-envelope' ></i>
                            <p><a href="mailto: library@iliauni.edu.ge">library@iliauni.edu.ge</a></p>
                        </div>
                        <div class="location">
                            <i class='bx bx-current-location' ></i>
                            <p>ილიას სახელმჭიფო უნივერსიტეტი, ქ.ჩოლოყაშვილის 3/5</p>
                        </div>
                        <div class="library-link">
                            <i class='bx bx-link' ></i>
                            <p><a href="https://library.iliauni.edu.ge/">https://library.iliauni.edu.ge/</a></p>
                        </div>
                    </div>

                    <div class="confidentiality">
                        <p class="main">კონფიდენციალურობის პოლიტიკა</p>
                        <p>გამოყენების წესები</p>
                    </div>
                    <div class="group">
                        <div class="images main">
                            <img src="./assets/footer-images/ilias-universiteti.png" alt="ილიას უნივერსიტეტის ლოგო">
                            <img src="./assets/footer-images/unilab.png" alt="უნილაბის ლოგო">
                        </div>

                        <p>ვებსაიტზე იმუშავა უნილაბის გუნდმა</p>
                    </div>
                </div>


                <div class="copyrigth">
                    <p>ილიას სახელმწიფო უნივერსიტეტი 2024. ყველა უფლება დაცულია.</p>
                </div>
            </footer>
        `
    }
}
customElements.define('main-footer', MainFooter);