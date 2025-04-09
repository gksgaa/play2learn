//breakpoint between mobile layout and laptop menu layout
// top navigation horizontal menu to mobile dropdown menu

function toggleMenu() {
  const icon = document.getElementById('menu-icon');
  icon.style.display = 'block';
  const openClose = icon.getElementsByTagName('i');
  const close = openClose[0];
  const open = openClose[1];
  const x = document.querySelector('.nav-top>ul');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
    close.style.display = 'none';
    open.style.display = 'block';
  } else {
    x.style.display = 'flex';
    close.style.display = 'block';
    open.style.display = 'none';
  }
}

window.addEventListener('resize', (e) => {
  const x = document.querySelector('.nav-top>ul');
  const icons = document.querySelectorAll('nav div i');
  const close = icons[0];
  const open = icons[1];
  const width = window.innerWidth;

  if (width > 600) {
    x.style.display = 'flex';
    open.style.display = 'none';
    close.style.display = 'none';
  } else {
    x.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
   }
});

window.addEventListener('load', (e) => {
  const mobileMenuIcon = document.getElementById('menu-icon');
  mobileMenuIcon.addEventListener('click', (e) => {
    toggleMenu(e);
  });
  const x = document.querySelector('.nav-top>ul');
  const icons = document.querySelectorAll('nav div i');
  const close = icons[0];
  const open = icons[1];
  const width = window.innerWidth;
  if (width > 600) {
    x.style.display = 'flex';
    open.style.display = 'none';
    close.style.display = 'none';
   } else {
    x.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
   }
});



