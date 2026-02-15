export const MESSAGES = {
    WELCOME: (pushname: string) => `Merhaba *${pushname}*,
 
*Yüksek İhtisas Üniversitesi Sürekli Eğitim Merkezi (YİÜSEM)* WhatsApp hattına hoş geldiniz. 
 
Size en kısa sürede yardımcı olmak için buradayız. Lütfen aşağıdaki bilgileri paylaşınız:
 
• *Adınız Soyadınız:*
• *İlgilendiğiniz eğitim programı:*
• *İletişim e-posta adresiniz:*
 
🕒 *Çalışma saatlerimiz:*
Hafta içi 08:30 - 17:30 

🚨 *Acil durumlar için:* +90 501 700 20 28
📧 *E-posta:* sem@yuksekihtisas.edu.tr (Daha hızlı yanıt alabilirsiniz)
 
Saygılarımızla,
*YİÜSEM*`,

    MONDAY_DELAY: (pushname: string) => `Sayın [İsim Soyisim],

Yüksek İhtisas Üniversitesi Sürekli Eğitim Merkezi'ne hoş geldiniz.

Hafta sonu mesaj birikimi nedeniyle yanıt süremiz uzayabilir.

⏰ TAHMİNİ YANIT SÜRESİ:
• Sabah 08:30-12:00 arası mesaj sıralaması
• Öğleden sonra 13:00-17:30 arası yanıtlar

📞 HIZLI DESTEK İÇİN ARAYIN:
+90 501 700 20 28 (Mesai saatlerinde)
08:30-17:30 arası doğrudan ulaşım sağlayabilirsiniz

📧 E-POSTA TERCİH EDİN:
sem@yuksekihtisas.edu.tr (Daha hızlı yanıt alabilirsiniz)

🎯 ACİL DURUMLAR:
Eğitimine bugün/bu hafta başlayacak katılımcılar önceliklidir.

Anlayışınız için teşekkür ederiz.

Saygılarımızla,
YİÜSEM
`,



    OFF_HOURS: (pushname: string) => `Sayın ${pushname},

Mesajınız Yüksek İhtisas Üniversitesi Sürekli Eğitim Merkezi'ne ulaşmıştır.

⏰ ÇALIŞMA SAATLERİMİZ DIŞINDASINIZ:
Mesajınız ilk iş günü en kısa sürede yanıtlanacaktır.

🚨 ACİL DURUMLAR İÇİN:
• E-posta: sem@yuksekihtisas.edu.tr (Daha hızlı yanıt alabilirsiniz)
• Telefon: +90 501 700 20 28 (Mesai saatlerinde)

📅 ÇALIŞMA SAATLERİMİZ:
Hafta içi: 08:30 - 17:30
Cumartesi-Pazar: Kapalı

Anlayışınız için teşekkür ederiz.

Saygılarımızla,
YİÜSEM
`,
    HOLIDAY: "Bugün resmi tatil nedeniyle kapalıyız.",
    MENU: "\n\nSize nasıl yardımcı olabilirim?\n1. Eğitimler\n2. Sertifika Sorgula\n3. İptal Talebi"
};

export const WORK_HOURS = {
    START: 9,
    END: 18
};