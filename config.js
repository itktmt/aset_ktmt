/* =====================================================================
   Katamata Group - konfigurasi Google Sheets (SATU file untuk semua halaman)
   Isi url (Web App Apps Script berakhiran /exec) dan token (nilai SECRET)
   untuk tiap sistem. Biarkan kosong ('') untuk memakai LocalStorage saja.
   Upload file ini ke GitHub bersama index.html, IT.html, dan pm.html.
   ===================================================================== */
window.KATAMATA_CONFIG = {
  IT: { url: '', token: '' },   // Google Sheet + Apps Script untuk Aset IT
  PM: { url: '', token: '' }    // Google Sheet + Apps Script untuk Property Management
};
