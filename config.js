const config = {
  TOKEN: "",

  prefix: "!",
  guild: "", //Sunucu ID Yazın
  channel: "", //Başvuru Yap Mesajının Atılacağı Kanal ID Yazın

  log: {
    staff: "", //Başvuru Onaylayıp-Reddedecek Yetkili Rol ID Yazın!
    channel: "" //Başvuruların Loglanacağı Kanal ID Yazın
  },

  sonuc: {
    staffRole: ["","",""], //Sunucunuzdaki Başlangıç Yetkili Rolü veya Rolleri, Birden Fazla Rol Eklemek İçin ["rol id 1", "rol id2"] Başvuru Onaylanınca Buraya Yazılan Rol veya Roller Kullanıcıya Verilecek
    sRole: "", //Verilecek En Düşük Yetkili Rol ID Yazın
    successMessage: "Hey Tebrikler Yetkili Oldun!", //Başvuru Onaylanınca Kullanıcıya Atılacak Mesajı Yazın
    deleteMessage: "Üzgünüm Başvurun Reddedildi!", //Başvuru Reddedilince Kullanıcıya Atılacak Mesajı Yazın
    timeout: 20000 //Başvurusu Reddedilen Birisi Nekadar Süre Sonra Başvuru Yapa Bilsin? 1000=1 Saniye (Milisaniye Türünden Yazın)
  },

  embed: {
    title: "AstroWise Başvuru Sistemi", //Başvuru Mesajı Başlık Kısmında Yazmasını İstediğiniz Şey
    color: "BLUE", //Embed Rengi, Örnek: BLUE,RED,YELLOW,GREEN Olarak veya Direkt #ff00ff Gibi Renk Kodu Yazın
    description: "Yetkili Başvurusu Yapa Bilmek İçin Lütfen Aşşağıdaki Butona Basınız!" //Başvuru Mesajı Açıklama Kısmında Yazmasını İstediğiniz Şey
  },

  sorular: ["Günde Kaç Saat Aktif Olabilirsin?", "Neden Yetkili Olmak İstiyorsun?", "Günde Kaç İnvite Yapabilirsin?", "Yaşın Kaç?", "Önceden Başka Sunucuda Yetkili Oldunmu Olduysan Sunucu Kaç Kişiydi Ve Mesela Hangi Roldeydin Örnek: Üst Yönetim Gibi", "Ne Zamandan Beri Discord Kullanıyorsun"] //Sorulacak Sorular
};

module.exports = config;
