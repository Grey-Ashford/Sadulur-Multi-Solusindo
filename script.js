document.addEventListener('DOMContentLoaded', function () {

  const koordinatToko = "-6.826352,107.200913"; 

  const mapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(koordinatToko)}`;

  const mapsLink = document.querySelector('.tag.maps');

  if (mapsLink) {
    mapsLink.setAttribute('href', mapsURL);
    mapsLink.addEventListener('click', function (e) {
      e.preventDefault();
      window.open(mapsURL, '_blank', 'noopener');
    });
  }

});

document.querySelectorAll('.tag').forEach(function (tag) {
  tag.addEventListener('pointerdown', function () {
    tag.classList.add('tapped');
  });
  tag.addEventListener('pointerup', function () {
    tag.classList.remove('tapped');
  });
  tag.addEventListener('pointerleave', function () {
    tag.classList.remove('tapped');
  });
});