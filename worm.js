/* Easter egg: type the Konami code (up up down down left right left right B A) to turn the cursor
   into a Dune sandworm whose body follows it. Type it again to switch back. */
(function () {
  const CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let pos = 0, on = false, canvas, ctx, low, lctx, raf;
  const S = 3;                                  // size of one "pixel"
  const mouse = { x: innerWidth / 2, y: innerHeight / 2 };
  const trail = [];                             // past head positions, newest first

  document.addEventListener("keydown", (e) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = k === CODE[pos] ? pos + 1 : (k === CODE[0] ? 1 : 0);
    if (pos === CODE.length) { pos = 0; toggle(); }
  });
  addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

  function toast(text) {
    const t = document.createElement("div");
    t.className = "worm-toast"; t.textContent = text;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2600);
  }

  function size() {
    canvas.width = innerWidth; canvas.height = innerHeight;
    low.width = Math.ceil(innerWidth / S); low.height = Math.ceil(innerHeight / S);
    ctx.imageSmoothingEnabled = false;
  }

  function toggle() {
    on = !on;
    const es = document.documentElement.lang === "es";
    document.documentElement.classList.toggle("worm", on);
    if (on) {
      canvas = document.createElement("canvas"); canvas.id = "wormfx"; document.body.appendChild(canvas);
      ctx = canvas.getContext("2d"); low = document.createElement("canvas"); lctx = low.getContext("2d");
      size(); addEventListener("resize", size);
      trail.length = 0;
      toast(es ? "Modo gusano de arena activado. Vuelve a escribir el código para salir." : "Sandworm mode on. Type the code again to leave.");
      raf = requestAnimationFrame(draw);
    } else {
      cancelAnimationFrame(raf); removeEventListener("resize", size); canvas.remove();
      toast(es ? "El gusano vuelve a la arena." : "The worm goes back under the sand.");
    }
  }

  function disc(x, y, r, color) { lctx.fillStyle = color; lctx.beginPath(); lctx.arc(x, y, r, 0, 7); lctx.fill(); }

  function draw() {
    raf = requestAnimationFrame(draw);
    const hx = mouse.x / S, hy = mouse.y / S;
    if (!trail.length || Math.hypot(trail[0].x - hx, trail[0].y - hy) > 0.6) trail.unshift({ x: hx, y: hy });
    if (trail.length > 400) trail.length = 400;
    lctx.clearRect(0, 0, low.width, low.height);
    // body: segments sampled along the path, thinner towards the tail
    const SEG = 22, GAP = 2.6, segs = [];
    let dist = 0, i = 1;
    for (let n = 1; n <= SEG && i < trail.length; n++) {
      while (i < trail.length && dist < n * GAP) { dist += Math.hypot(trail[i].x - trail[i - 1].x, trail[i].y - trail[i - 1].y); i++; }
      if (i < trail.length) segs.push({ x: trail[i].x, y: trail[i].y, r: 5.2 - (n / SEG) * 3.8 });
    }
    for (let n = segs.length - 1; n >= 0; n--) {
      const g = segs[n];
      disc(g.x, g.y, g.r + 0.8, "#4a3220");                              // outline
      disc(g.x, g.y, g.r, n % 2 ? "#c99a5b" : "#b88648");                 // ringed sand-brown body
    }
    // head: open maw with teeth, the classic Dune worm
    disc(hx, hy, 7.2, "#4a3220"); disc(hx, hy, 6.4, "#d6aa6c"); disc(hx, hy, 4.4, "#7a2f1f"); disc(hx, hy, 2.4, "#1a0c08");
    lctx.fillStyle = "#f3ead8";
    for (let k = 0; k < 10; k++) { const a = k / 10 * Math.PI * 2; lctx.fillRect(Math.round(hx + Math.cos(a) * 4.2), Math.round(hy + Math.sin(a) * 4.2), 1, 1); }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(low, 0, 0, low.width * S, low.height * S);
  }
})();
