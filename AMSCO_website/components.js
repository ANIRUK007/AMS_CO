// Shared nav + footer injected into every page
(function(){
  // ── TOPBAR + NAV ──
  var nav = `
  <div class="topbar">
    <div class="topbar-inner">
      <div class="tb-left">
        <div class="tb-item">&#9200; Sun &ndash; Thur &nbsp;8:00 &ndash; 16:00</div>
        <div class="tb-item">&#128222; <a href="tel:+966541720336">+966 54 172 0336</a></div>
        <div class="tb-item">&#9993; <a href="mailto:operations@shihabksa.com">operations@shihabksa.com</a></div>
      </div>
      <div style="font-size:11px;letter-spacing:2px;color:var(--muted)">KSA &bull; QA &bull; BH &bull; KW &bull; OM</div>
    </div>
  </div>
  <nav>
    <div class="nav-inner">
      <a href="index.html" class="logo">
        <div class="logo-box">AMS</div>
        <div class="logo-text">Co. Ltd.<small>Industrial Services</small></div>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" data-page="index">Home</a></li>
        <li><a href="about.html" data-page="about">About Us</a></li>
        <li><a href="services.html" data-page="services">Services</a></li>
        <li><a href="supplies.html" data-page="supplies">Supplies</a></li>
        <li><a href="projects.html" data-page="projects">Projects</a></li>
        <li><a href="partners.html" data-page="partners">Partners</a></li>
        <li><a href="clients.html" data-page="clients">Clients</a></li>
        <li><a href="safety.html" data-page="safety">Safety Policy</a></li>
        <li class="drop">
          <a href="#" style="cursor:default">Certificates &#9662;</a>
          <ul class="drop-menu">
            <li><a href="certificates.html#govt">Government Certificate</a></li>
            <li><a href="certificates.html#iso">ISO Certificate</a></li>
            <li><a href="certificates.html#appreciation">Appreciation Certificate</a></li>
          </ul>
        </li>
      </ul>
      <a href="contact.html" class="btn-nav">Contact Us</a>
    </div>
  </nav>`;

  // ── FOOTER ──
  var footer = `
  <div class="cta-band">
    <div class="cta-band-inner">
      <p>Trusted partner for Saudi Aramco, Qatar Energy, SLB &amp; Halliburton</p>
      <a href="contact.html">Request a Quote</a>
    </div>
  </div>
  <footer>
    <div class="footer-grid">
      <div>
        <div class="f-logo-box">AMS</div>
        <div class="f-tagline">Co. Ltd. &mdash; Al Khobar, Saudi Arabia</div>
        <p class="f-about">AMSCO is an established industrial supplier and service provider with 10+ years of proven experience serving Oil &amp; Gas, Railway, and Fabrication industries across Saudi Arabia and the GCC.</p>
      </div>
      <div>
        <div class="f-h">Quick Links</div>
        <ul class="f-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Our Services</a></li>
          <li><a href="supplies.html">Supplies</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="clients.html">Clients</a></li>
          <li><a href="partners.html">Partners</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <div class="f-h">Services</div>
        <ul class="f-links">
          <li><a href="services.html#oil">Oil &amp; Gas</a></li>
          <li><a href="services.html#power">Electricity &amp; Power</a></li>
          <li><a href="services.html#railway">Railway Transport</a></li>
          <li><a href="services.html#fabrication">Fabrication</a></li>
          <li><a href="services.html#manpower">Manpower Supply</a></li>
          <li><a href="services.html#logistics">Logistics</a></li>
        </ul>
      </div>
      <div>
        <div class="f-h">Contact</div>
        <ul class="f-contact-list">
          <li>&#128205; Al Khobar, Saudi Arabia</li>
          <li>&#128222; +966 54 172 0336</li>
          <li>&#9993; operations@shihabksa.com</li>
          <li>&#9200; Sun&ndash;Thur, 8:00&ndash;16:00</li>
        </ul>
        <div style="margin-top:18px">
          <div class="f-h">Regions</div>
          <p style="font-size:13px;color:var(--muted);line-height:2.1">&#127480;&#127462; Saudi Arabia &nbsp; &#127478;&#127462; Qatar<br>&#127463;&#127469; Bahrain &nbsp; &#127472;&#127484; Kuwait &nbsp; &#127476;&#127474; Oman</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; 2024 AMS Co. Ltd. &mdash; All Rights Reserved.</div>
      <div class="fb-links">
        <a href="safety.html">Safety Policy</a>
        <a href="certificates.html">Certificates</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  </footer>`;

  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', nav);
  // Inject footer
  document.body.insertAdjacentHTML('beforeend', footer);

  // Set active nav link
  var page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a[data-page]').forEach(function(a){
    if(a.dataset.page === page) a.classList.add('active');
  });

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e,i){
      if(e.isIntersecting){
        e.target.style.transitionDelay = (i % 4) * 0.09 + 's';
        e.target.classList.add('in');
      }
    });
  },{threshold:0.1});
  reveals.forEach(function(el){ obs.observe(el); });
})();
