var mob = document.querySelector(".toggle")
var menu = document.querySelector(".mainmenuhead")
  mob.addEventListener('click', function(){
  mob.classList.toggle('show');
  menu.classList.toggle('show')
})

    
    


document.addEventListener("DOMContentLoaded", () => {
  const dot = document.querySelector(".cursor-dot");
  let x = 0, y = 0;
  let targetX = 0, targetY = 0;
  const speed = 0.2;

  const animate = () => {
    x += (targetX - x) * speed;
    y += (targetY - y) * speed;
    dot.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate);
  };
  animate();

  // Move cursor dot
  document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;

    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (el) {
      const bg = window.getComputedStyle(el).backgroundColor;
      if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
        const rgb = bg.match(/\d+/g);
        if (rgb) {
          const brightness = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
          if (brightness < 0.5) dot.classList.add("light");
          else dot.classList.remove("light");
        }
      }
    }
  });

  // Small click pulse
  document.addEventListener("mousedown", () => {
    dot.style.transform += " scale(0.7)";
    setTimeout(() => (dot.style.transform = `translate(${x}px, ${y}px)`), 150);
  });
});








