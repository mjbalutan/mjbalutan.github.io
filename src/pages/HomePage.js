class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <section class="container max-w-screen w-full h-screen flex flex-col items-center justify-center bg-black snap-start" data-indicator-color="green-500">
          <h1 class="!text-5xl mb-4 text-green-500 tracking-[5px] uppercase animate-typing overflow-hidden max-w-max whitespace-nowrap border-r-4 border-r-green-500 pr-2 font-bold text-shadow-glow-green">Hello, I'm Mark</h1>
          <p class="text-lg text-shadow-glow-white text-white animate-typing-once overflow-hidden max-w-max whitespace-nowrap animate-offset-[2s] border-r-2">A full-stack web developer with more than a decade of experience.</p>
          <div id="scroll-indicator" class="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce transition-opacity duration-500">
            <span class="text-green-500 text-xs uppercase tracking-[3px]">Scroll</span>
            <div class="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
              <span class="w-1 h-2 bg-green-500 rounded-full mt-2 animate-scroll-dot"></span>
            </div>
          </div>
        </section>
        <section class="container max-w-screen w-full min-h-screen flex flex-col items-center justify-center snap-start bg-green-600" data-indicator-color="white">
          <h2 class="!text-4xl !my-0 uppercase tracking-[5px] text-white animate-slide-in-up text-shadow-glow-white">About Me</h2>
          <div class="flex flex-col md:flex-row gap-4 mt-8 w-full max-w-6xl px-4">
            <!-- LEFT COLUMN -->
            <div class="flex flex-col gap-4 flex-1">

              <!-- Summary -->
              <div class="animate-slide-in-left relative border-2 border-white p-4
                [&:before]:content-['Summary'] [&:before]:absolute [&:before]:-top-3 [&:before]:left-5
                [&:before]:bg-green-600 [&:before]:px-2 [&:before]:text-white [&:before]:uppercase
                [&:before]:text-sm [&:before]:tracking-[3px] [&:before]:text-shadow-glow-white">
                <p class="text-white p-4 text-justify">
                  I am a passionate full-stack web developer with over ten years of experience building
                  dynamic, scalable, and high-performing web applications. I work comfortably across
                  front-end and back-end systems, delivering clean UI, reliable APIs, and maintainable code.
                </p>
              </div>

              <!-- Credentials -->
              <div class="animate-slide-in-left relative border-2 border-white p-4
                [&:before]:content-['Credentials'] [&:before]:absolute [&:before]:-top-3 [&:before]:left-5
                [&:before]:bg-green-600 [&:before]:px-2 [&:before]:text-white [&:before]:uppercase
                [&:before]:text-sm [&:before]:tracking-[3px] [&:before]:text-shadow-glow-white">
                <ul class="text-white p-4 list-disc list-inside">
                  <li>Bachelor's Degree in Information Technology — AMA Computer College</li>
                  <li>10+ years professional web development experience</li>
                  <li>Shopify Plus & large-scale eCommerce projects</li>
                </ul>
              </div>

            </div>

            <!-- RIGHT COLUMN -->
            <div class="flex flex-col gap-4 flex-1">

              <!-- Skills -->
              <div class="animate-slide-in-right relative border-2 border-white p-4
                [&:before]:content-['Skills'] [&:before]:absolute [&:before]:-top-3 [&:before]:left-5
                [&:before]:bg-green-600 [&:before]:px-2 [&:before]:text-white [&:before]:uppercase
                [&:before]:text-sm [&:before]:tracking-[3px] [&:before]:text-shadow-glow-white">
                <ul class="text-white p-4 list-disc list-inside">
                  <li>HTML, CSS, JavaScript, Tailwind, React, Angular</li>
                  <li>Node.js, Laravel, REST APIs</li>
                  <li>MongoDB, MySQL, performance & SEO optimization</li>
                  <li>Git, CI/CD, collaborative workflows</li>
                </ul>
              </div>

              <!-- Portfolio -->
              <div class="animate-slide-in-right relative border-2 border-white p-4
                [&:before]:content-['Portfolio'] [&:before]:absolute [&:before]:-top-3 [&:before]:left-5
                [&:before]:bg-green-600 [&:before]:px-2 [&:before]:text-white [&:before]:uppercase
                [&:before]:text-sm [&:before]:tracking-[3px] [&:before]:text-shadow-glow-white">
                <ul class="text-white p-4 list-disc list-inside space-y-3">
                  <li>
                    <a class="border-b uppercase !text-white" href="https://au.oneill.com/">O'Neill</a>
                    <span> / Shopify</span>
                    <p class="text-sm">
                      Figma-to-Shopify theme development for O'Neill Australia's eCommerce platform.
                    </p>
                  </li>
                  <li>
                    <a class="border-b uppercase !text-white" href="https://zingwellbeing.com/">Zing Wellbeing</a>
                    <span> / Shopify / React / Laravel</span>
                    <p class="text-sm">
                      Shopify frontend, Ionic React mobile app UI, and Laravel application integration.
                    </p>
                  </li>
                  <li>
                    <a class="border-b uppercase !text-white" href="https://mhau.com.au/">Momentum Health</a>
                    <span> / WordPress</span>
                    <p class="text-sm">
                      WordPress theme development and custom plugin integration for Momentum Health Australia and network sites.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section data-indicator-color="green-500" id="last-section" class="container max-w-screen w-full h-screen flex flex-col items-center justify-center bg-black snap-start">
          <h2 class="!text-4xl !my-0 uppercase tracking-[5px] text-green-600 animate-slide-in-up text-shadow-glow-green">Connect with me</h2>
          <div class="flex flex-row w-full max-w-xl justify-between mt-8">
            <div class="animate-slide-in-left">
              <h3 class="text-white text-lg mb-2 uppercase">Email</h3>
              <a href="mailto:mj.balutan@gmail.com" class="border-b !text-white">mj.balutan@gmail.com</a>
            </div>
            <div class="animate-slide-in-left text-right">
              <h3 class="text-white text-lg mb-2 uppercase">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/mjbalutan/" class="border-b !text-white">@mjbalutan</a>
            </div>
          </div>
        </section>
      </div>
    `;

    const indicator = this.querySelector('#scroll-indicator');
    const label = indicator.querySelector('span'); // the "Scroll" text
    const circle = indicator.querySelector('div'); // pill border
    const dot = circle.querySelector('span'); // inner dot
    const sections = this.querySelectorAll('section');
    const lastSection = this.querySelector('#last-section');

    // Smooth transitions
    [indicator, label, circle, dot].forEach(el =>
      el.classList.add('transition-colors', 'duration-500', 'transition-opacity', 'duration-500')
    );

    const observer = new IntersectionObserver(([entry]) => {
      const target = entry.target;
      const color = target.dataset.indicatorColor;

      // Update label text color
      Array.from(label.classList).forEach(c => {
        if (c.startsWith('text-')) label.classList.remove(c);
      });
      label.classList.add(`text-${color}`);

      // Update circle border (keep border-2)
      Array.from(circle.classList).forEach(c => {
        if (c.startsWith('border-') && c !== 'border-2') circle.classList.remove(c);
      });
      circle.classList.add(`border-${color}`);

      // Update dot bg color
      Array.from(dot.classList).forEach(c => {
        if (c.startsWith('bg-')) dot.classList.remove(c);
      });
      dot.classList.add(`bg-${(color !== 'white') ? 'green-500' : ''}`);
      if (color === 'white') {
        dot.style.backgroundColor = 'white';
      }

      // Fade out if last section
      if (target.id === 'last-section') {
        indicator.style.opacity = entry.isIntersecting ? '0' : '1';
        indicator.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
      }
    }, { threshold: 0.6 });

    // Observe all sections
    sections.forEach(section => observer.observe(section));

    // Fade out on last section
    const fadeObserver = new IntersectionObserver(([entry]) => {
      indicator.style.opacity = entry.isIntersecting ? '0' : '1';
      indicator.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
    }, { threshold: 0.6 });

    fadeObserver.observe(lastSection);
  }
}

customElements.define('home-page', HomePage);