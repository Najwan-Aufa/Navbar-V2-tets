const navItems = document.querySelectorAll('.nav-item');

// Tambahkan event listener untuk setiap item navigasi
navItems.forEach(item => {
  item.addEventListener('click', function() {
    // Hapus class "active" dari semua item
    navItems.forEach(nav => nav.classList.remove('active'));

    // Tambahkan class "active" ke item yang diklik
    this.classList.add('active');
  });
});