class NotFound extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="h-screen w-full flex flex-col items-center justify-center bg-black text-white">
        <h1 class="!text-6xl mb-4 text-red-500 tracking-[5px] uppercase font-bold text-shadow-glow-red">404</h1>
        <p class="text-2xl text-shadow-glow-white">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" class="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-shadow-glow-red">Go Back Home</a>
      </div>
    `;
  }
};

customElements.define('not-found-page', NotFound);