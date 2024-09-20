const navItems = document.querySelectorAll('.nav-item');

// Tambahkan event listener untuk setiap item navigasi
navItems.forEach(item => {
  item.addEventListener('click', function() {
  
    navItems.forEach(nav => nav.classList.remove('active'));

   
    this.classList.add('active');
  });
});

const menuItems = document.querySelectorAll('.nav-item');

  
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
    
      document.getElementById('nav_check').checked = false;
    });
  });
