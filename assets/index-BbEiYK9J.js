(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();class p extends HTMLElement{connectedCallback(){this.innerHTML=`
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
    `;const s=this.querySelector("#scroll-indicator"),a=s.querySelector("span"),i=s.querySelector("div"),e=i.querySelector("span"),t=this.querySelectorAll("section"),l=this.querySelector("#last-section");[s,a,i,e].forEach(r=>r.classList.add("transition-colors","duration-500","transition-opacity","duration-500"));const f=new IntersectionObserver(([r])=>{const d=r.target,n=d.dataset.indicatorColor;Array.from(a.classList).forEach(o=>{o.startsWith("text-")&&a.classList.remove(o)}),a.classList.add(`text-${n}`),Array.from(i.classList).forEach(o=>{o.startsWith("border-")&&o!=="border-2"&&i.classList.remove(o)}),i.classList.add(`border-${n}`),Array.from(e.classList).forEach(o=>{o.startsWith("bg-")&&e.classList.remove(o)}),e.classList.add(`bg-${n!=="white"?"green-500":""}`),n==="white"&&(e.style.backgroundColor="white"),d.id==="last-section"&&(s.style.opacity=r.isIntersecting?"0":"1",s.style.pointerEvents=r.isIntersecting?"none":"auto")},{threshold:.6});t.forEach(r=>f.observe(r)),new IntersectionObserver(([r])=>{s.style.opacity=r.isIntersecting?"0":"1",s.style.pointerEvents=r.isIntersecting?"none":"auto"},{threshold:.6}).observe(l)}}customElements.define("home-page",p);class b extends HTMLElement{connectedCallback(){this.innerHTML=`
      <div class="h-screen w-full flex flex-col items-center justify-center bg-black text-white">
        <h1 class="!text-6xl mb-4 text-red-500 tracking-[5px] uppercase font-bold text-shadow-glow-red">404</h1>
        <p class="text-2xl text-shadow-glow-white">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" class="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-shadow-glow-red">Go Back Home</a>
      </div>
    `}}customElements.define("not-found-page",b);(async()=>await import("/ionic.esm.js"))();
