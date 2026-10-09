/* =====================================================================
   Katamata Group - konfigurasi Google Sheets (SATU file untuk semua halaman)
   Isi url (Web App Apps Script berakhiran /exec) dan token (nilai SECRET)
   untuk tiap sistem. Biarkan kosong ('') untuk memakai LocalStorage saja.
   Upload file ini ke GitHub bersama index.html, IT.html, dan pm.html.
   ===================================================================== */
window.KATAMATA_CONFIG = {
  IT: { url: 'https://script.google.com/macros/s/AKfycbyaEdK-WFXxTi3Vb7p-6BxA3izmEQvoWOwgjGuq6D__U27gtiwunYLwtcdh8PRYr-s6/exec', token: 'tfvrgwmkfmd9ae7sey6ujxwd' },   // Google Sheet + Apps Script untuk Aset IT
  PM: { url: 'https://script.google.com/macros/s/AKfycbznSRgvb2u4PWfzLKacNXbIwihpSKQ--ODrKfkTPVOjRxNZdIR_wTqzQmugcbTy_dI/exec', token: '6nmqzhkgfnrnpx9n9d8ww7gc' }    // Google Sheet + Apps Script untuk Property Management
};
