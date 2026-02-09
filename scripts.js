
function loadComponents() {
    // This workaround loads the header and the footer, 
    // and insert it into the proper divs (based on their IDs)
    // to avoid duplication across multiple pages.
    
    header = `
    <header>
    <nav>
        <a href="index.html">
            <section class="hero-logo">
                <img src="images/IDEA_Logo.png" alt="IDEA-Arch 2026 Logo" height="90px"  class="idea-logo hero-logo-svg">
            </section>
        </a>
        <ul class="main__ul">
            <li><a href="index.html">Home</a></li>
            <li><a href="dates.html">Important Dates</a></li>
            <li><a href="Call_For_Paper.html">Call For Papers</a></li>
            <li><a href="Program.html">Program</a></li>
            <li><a href="Procedings.html">Procedings</a></li>
            <li><a href="#">Committees</a>
            <ul class="dropdown">
                <li><a href="Organizing_Committee.html">Organizing Committee</a></li>
                <li><a href="Program_Committee.html">Program Committee</a></li>
                <li><a href="Steering_Committee.html">Steering Committee</a></li>
                <li><a href="Keynote_Speaker.html">Keynote Speakers</a></li>
            </ul>
            </li>
            <li><a href="Contact.html">Contact</a></li>
            <li><a href="#" class="link-btn">Registration</a></li>
        </ul>
    </nav>
    <div id='menu' class='box-icon'><i class='bx bx-menu'></i></div>
    </header>
    `

    footer = `
    <footer>
        <p>© Copyright 2026. IDEA-ARCH 2025 - Designed by Muhammad Haroon</p>
    </footer>
    `

    document.getElementById('header').innerHTML = header;
    document.getElementById('footer').innerHTML = footer;

    // responsive menu
    document.querySelector('#menu').addEventListener('click', ()=>{
        document.querySelector('nav ul').classList.toggle('showmenu');
    });

}

window.onload = loadComponents;

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".main-content-inner");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add("visible");
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
});

