anime({
  targets: '.square',
  opacity: 1,
  translateY: anime.stagger(-20, { grid: [15, 5], from: 'center', axis: 'y' }),
  translateX: anime.stagger(-120, { grid: [15, 5], from: 'center', axis: 'x' }),
  rotateZ: anime.stagger([0, 90,], { grid: [15, 5], from: 'center', axis: 'x' }),
  rotateX: anime.stagger([70, 140,], { grid: [15, 5], from: 'center', axis: 'y' }),
  delay: anime.stagger(200, { grid: [15, 5], from: 'center' }),
  loop: true,
  direction: 'alternate',
  duration: 6000,
  easing: 'easeInOutQuad',

  rotate: {
    value: anime.stagger(1),
    delay: anime.stagger(1),
    loop: true,
    easing: 'easeInOutQuad',
    duration: 12000,
    loop: true,
  },
});
