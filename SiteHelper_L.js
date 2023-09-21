const Footer = document.getElementById("footer")
const Header = document.getElementById("header")

const HeaderHTML = `
<a href="../index.html" class="logohref">
            <p class="logo">TCE Startups</p>
</a>
       
`

const FooterHTML = `
<div class="footsections">
            <div class="footsec">
                <p class="feetsec">Support:</p>
                <a href="./index.html" class="footlink">Learning</a><br>
            </div>

            <div class="footsec">
                <p class="feetsec">Company:</p>
                <a href="https://entertainmasters.github.io/carriers.html" class="footlink">Carriers</a><br>
            </div>

            <div class="footsec">
                <p class="feetsec">Legal:</p>
                <a href="https://entertainmasters.github.io/privacy.html" class="footlink">Privacy</a><br>
                <a href="https://entertainmasters.github.io/imprint.html" class="footlink">Imprint</a>
            </div>
        </div>

        <p class="copyright">&copy; Copyright 2017 - ${new Date().getFullYear().toString()} Agesoft. All Rights Reserved.</p><br>
`

document.addEventListener('DOMContentLoaded', e => {
    Footer.innerHTML = FooterHTML;
    Header.innerHTML = HeaderHTML;
})