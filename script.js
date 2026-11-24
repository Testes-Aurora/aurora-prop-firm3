document.getElementById('payoutButton').addEventListener('click', function () {
  document.getElementById('payoutMessage').textContent =
    'No protótipo, os payouts estão desabilitados. Regras e elegibilidade serão configuradas no backend.';
});
document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link').forEach(function (item) { item.classList.remove('active'); });
    this.classList.add('active');
  });
});
