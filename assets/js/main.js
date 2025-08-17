// Main JS for La Bella Cucina
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      if (mobileMenu.classList.contains('hidden')) mobileMenu.classList.remove('hidden');
      else mobileMenu.classList.add('hidden');
    });
  }

  // Menu modal
  const menuModal = document.getElementById('menuModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalPrice = document.getElementById('modalPrice');
  const closeModalBtns = [document.getElementById('closeModal'), document.getElementById('modalClose2')];
  const modalReserve = document.getElementById('modalReserve');

  function openModal(title, desc, price) {
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalPrice.textContent = `$${price}`;
    menuModal.classList.remove('hidden');
    menuModal.classList.add('flex');
  }

  function closeModal() {
    menuModal.classList.add('hidden');
    menuModal.classList.remove('flex');
  }

  document.querySelectorAll('.openDetails').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.menu-item');
      if (!card) return;
      const title = card.dataset.title;
      const desc = card.dataset.desc;
      const price = card.dataset.price;
      openModal(title, desc, price);
    });
  });

  closeModalBtns.forEach(b => { if (b) b.addEventListener('click', closeModal); });
  if (menuModal) menuModal.addEventListener('click', (e) => { if (e.target === menuModal) closeModal(); });

  if (modalReserve) modalReserve.addEventListener('click', () => {
    closeModal();
    // Scroll to reservation section
    const res = document.getElementById('reservation');
    if (res) res.scrollIntoView({ behavior: 'smooth' });
  });

  // Filter menu
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      document.querySelectorAll('.menu-item').forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // Reserve now buttons scroll
  document.querySelectorAll('.reserveNow').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = btn.dataset.scroll || '#reservation';
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Reservation form handling (mock)
  const reservationForm = document.getElementById('reservationForm');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(reservationForm);
      // Basic validation
      if (!data.get('name') || !data.get('date') || !data.get('time') || !data.get('people')) {
        alert('Please fill in all required fields.');
        return;
      }
      // Mock saving to localStorage
      const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
      reservations.push({
        name: data.get('name'),
        phone: data.get('phone'),
        email: data.get('email'),
        date: data.get('date'),
        time: data.get('time'),
        people: data.get('people'),
        notes: data.get('notes')
      });
      localStorage.setItem('reservations', JSON.stringify(reservations));
      document.getElementById('reserveMessage').classList.remove('hidden');
      reservationForm.reset();
      setTimeout(() => { document.getElementById('reserveMessage').classList.add('hidden'); }, 6000);
    });
  }

  // Contact form handling (mock)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      if (!data.get('name') || !data.get('email') || !data.get('message')) {
        alert('Please complete the required fields.');
        return;
      }
      // Mock send: store message in localStorage
      const messages = JSON.parse(localStorage.getItem('messages') || '[]');
      messages.push({ name: data.get('name'), email: data.get('email'), phone: data.get('phone'), message: data.get('message'), date: new Date().toISOString() });
      localStorage.setItem('messages', JSON.stringify(messages));
      document.getElementById('contactMessage').classList.remove('hidden');
      contactForm.reset();
      setTimeout(() => { document.getElementById('contactMessage').classList.add('hidden'); }, 6000);
    });
  }

});
