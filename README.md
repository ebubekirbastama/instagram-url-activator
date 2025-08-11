# 📎 Instagram URL Aktifleştirici

**Apache-2.0 Lisansı** ile yayınlanan bu Chrome eklentisi, web sayfalarında geçen Instagram bağlantılarını otomatik olarak tıklanabilir hale getirir. 🚀  
Eklenti, özellikle linklerin metin olarak paylaşıldığı platformlarda (forumlar, bloglar, yorumlar vb.) kullanıcıların kolayca bağlantıya ulaşmasını sağlar.

---

## 📌 Nedir?
Instagram URL Aktifleştirici, sayfadaki tüm metinleri tarar ve **Instagram bağlantısı** formatına uyan metinleri gerçek bir link haline getirir.  
Bu sayede, normalde kopyala-yapıştır yapmanız gereken bağlantılara tek tıkla gidebilirsiniz.

---

## 🎯 Neden Yapıldı?
- Forum, blog ve yorumlarda metin halinde yazılmış Instagram linklerini hızlıca erişilebilir yapmak 🖱️
- Zamandan tasarruf sağlamak ⏳
- Daha konforlu bir web gezintisi sunmak 🌐

---

## 💡 Avantajları
- ⚡ Hızlı: Linkleri anında algılar ve dönüştürür.
- 🖱️ Kullanışlı: Tek tıkla Instagram sayfasına gitmenizi sağlar.
- 🔒 Güvenli: Sadece Instagram bağlantılarını dönüştürür, başka verileri işlemez.
- 🌍 Evrensel: Tüm web sayfalarında çalışır.

---

## 🛠️ Nasıl Kullanılır?

1. **Projeyi İndir**
   - Sağ üstteki `Code` butonuna tıklayın ve **Download ZIP** seçin.
   - ZIP dosyasını bilgisayarınıza indirin ve çıkarın.

2. **Chrome Geliştirici Modunu Aç**
   - Chrome tarayıcınızda `chrome://extensions/` adresine gidin.
   - Sağ üstteki **Geliştirici Modu** (Developer Mode) seçeneğini aktif edin.

3. **Eklentiyi Yükle**
   - **Paketlenmemiş Yükle** (Load unpacked) butonuna tıklayın.
   - İndirdiğiniz projenin klasörünü seçin.

4. **Keyfini Çıkarın**
   - Artık Instagram linkleri tıklanabilir! 😎

---

## 🔍 Çalışma Mantığı
Eklenti, DOM üzerindeki tüm **text node**’ları tarar.  
`instagram.com` ile başlayan veya içinde geçen URL’leri tespit eder ve bunları `<a>` etiketi ile değiştirir.  
Yeni oluşturulan linkler, yeni sekmede açılır ve güvenli bir şekilde yönlendirilir.

---

## 📜 Lisans
Bu proje **Apache-2.0** lisansı altında lisanslanmıştır.  
Detaylı bilgi için `LICENSE` dosyasına göz atabilirsiniz.

---


📌 **Not:** Bu eklenti resmi Instagram ürünü değildir, tamamen bağımsız bir geliştirme çalışmasıdır.
