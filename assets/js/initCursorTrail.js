(() => {
  // Criar um container para todos os elementos do cursor
  const cursorContainer = document.createElement('div');
  cursorContainer.id = 'cursor-container';
  cursorContainer.style.position = 'fixed';
  cursorContainer.style.top = '0';
  cursorContainer.style.left = '0';
  cursorContainer.style.width = '100%';
  cursorContainer.style.height = '100%';
  cursorContainer.style.pointerEvents = 'none';
  cursorContainer.style.zIndex = '99990';
  document.body.appendChild(cursorContainer);
  
  const root = document.documentElement;
  const trailLen = parseInt(getComputedStyle(root).getPropertyValue('--trail-length')) || 18;
  const smooth = parseFloat(getComputedStyle(root).getPropertyValue('--follow-smooth')) || 0.18;

  // Estados do seguidor
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let x = mouseX;
  let y = mouseY;

  let trailOn = true;
  const trailDots = [];

  // Primeiro remover qualquer cursor ou trail existente
  const oldCursor = document.getElementById('cursor');
  if (oldCursor) oldCursor.remove();
  
  document.querySelectorAll('.trail').forEach(el => el.remove());

  // Cria os pontos do rastro PRIMEIRO
  for (let i = 0; i < trailLen; i++) {
    const dot = document.createElement('div');
    dot.className = 'trail';
    // opacidade gradiente por índice
    dot.style.opacity = (0.12 + (i / trailLen) * (parseFloat(getComputedStyle(root).getPropertyValue('--trail-fade')) || 0.65)).toFixed(2);
    cursorContainer.appendChild(dot);
    trailDots.push({ el: dot, x, y });
  }
  
  // Adiciona o elemento do cursor ao body POR ÚLTIMO e FORA do container
  const cursorEl = document.createElement('div');
  cursorEl.className = 'cursor';
  cursorEl.id = 'cursor';
  document.body.appendChild(cursorEl); // Adicionado diretamente ao body para garantir que fique no topo
  
  const cursor = cursorEl;

  // Atualiza posição do mouse
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  // Suporte básico a toque (pega o primeiro dedo)
  window.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    if (t) { mouseX = t.clientX; mouseY = t.clientY; }
  }, { passive: true });

  // Interações extras: hover aumenta a bola
  document.addEventListener('mousedown', () => {
    cursor.style.transform += ' scale(0.85)';
  });
  
  document.addEventListener('mouseup', () => {
    // força recálculo para remover scale sem acumular
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  });

  // loop de animação
  function animate() {
    // interpolação suave (lerp)
    x += (mouseX - x) * smooth;
    y += (mouseY - y) * smooth;

    cursor.style.transform = `translate(${x}px, ${y}px)`;

    if (trailOn) {
      // empurra a posição atual para o primeiro ponto
      let prevX = x, prevY = y;
      for (let i = 0; i < trailDots.length; i++) {
        const d = trailDots[i];
        // cada ponto segue o anterior com atraso
        d.x += (prevX - d.x) * (0.35 - i * 0.008); // cada ponto um pouco menos responsivo
        d.y += (prevY - d.y) * (0.35 - i * 0.008);
        d.el.style.transform = `translate(${d.x}px, ${d.y}px)`;
        prevX = d.x; prevY = d.y;
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  // Ajusta quando viewport muda
  window.addEventListener('resize', () => {
    mouseX = Math.min(mouseX, window.innerWidth);
    mouseY = Math.min(mouseY, window.innerHeight);
  });
})();