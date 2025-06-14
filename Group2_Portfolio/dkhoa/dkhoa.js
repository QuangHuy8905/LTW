const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('nav.navbar');
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuToggle.classList.toggle('active');
});

// Navbar active theo scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar ul li a');

window.onscroll = () => {
  menuToggle.classList.remove('active');
  navbar.classList.remove('show');
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`.navbar a[href="#${id}"]`).classList.add('active');
      })
    }
  });
};
