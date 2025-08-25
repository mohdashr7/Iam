 document.addEventListener('DOMContentLoaded', function() {
            const languageBtn = document.getElementById('languageBtn');
            const languageMenu = document.getElementById('languageMenu');
            
            if (languageBtn && languageMenu) {
                languageBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    languageMenu.classList.toggle('show');
                });
                
                // إغلاق القائمة عند النقر خارجها
                document.addEventListener('click', function() {
                    languageMenu.classList.remove('show');
                });
                
                // منع إغلاق القائمة عند النقر عليها
                languageMenu.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            }
            
            // تحميل اللغة المحفوظة إذا وجدت
            const savedLang = localStorage.getItem('selectedLang');
            if (savedLang && savedLang !== 'ar') {
                switchLanguage(savedLang);
            }
            
            // إضافة مستمعي الأحداث لأزرار اللغة
            document.querySelectorAll('.language-option').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const lang = this.getAttribute('data-lang');
                    switchLanguage(lang);
                });
            });
        });

        // كائن يحتوي على ترجمات للنصوص
        const translations = {
            ar: {
                profile_name: "مُحَمَّد عبد الله",
                profile_title: "مطور واجهات مواقع وطالب ورياضي",
                hero_title: "مُحَمَّدْ أَشْرَفْ مَحْمُودْ طَلَبْ عَبْدُ اللهِ الرِّفَاعِيُّ الهَاشِمِيُّ الشَّرِيفُ",
                chip1: "تعامل مع الضغط",
                chip2: "تنظيم",
                chip3: "محب للرياضة",
                chip4: "واقعية",
                about_title: "مين أنا؟✨",
                about_text: "أنا شمعةٌ تُضيءُ القريبين، إنسان يحب الإتقان… لا يرضى بأنصاف الأمور.<br><br>ميزان من ثبات، يحمل المسؤولية كأنها قدر.<br><br>صمتي عميق، وفعلي أوضح من الكلام.<br><br>منظم كأن الزمن يسير على إيقاعي.<br><br>أحب البساطة… وأبحث عن الصدق في كل شيء.",
                projects_title: "أفضل مشاريعي 😎",
                project_title1: "موقع وزارة الخارجية السورية",
                project_text1: "موقع يحاكي وزارة الخارجية السورية، يعرض معلومات حول الوزارة وخدماتها.",
                project_link1: "زيارة الموقع",
                countdown_title: "العد التنازلي لميلادي 🎉",
                days_label: "أيام",
                hours_label: "ساعات",
                minutes_label: "دقائق",
                seconds_label: "ثوانٍ"
            },
            nl: {
                profile_name: "Mohammad Abdullah",
                profile_title: "Front-end ontwikkelaar, student en atleet",
                hero_title: "Mohammad Ashraf Mahmoud Talab Abdullah Al-Rifai Al-Hashemi Al-Sharif",
                chip1: "Omgaan met druk",
                chip2: "Organisatie",
                chip3: "Sportliefhebber",
                chip4: "Realistisch",
                about_title: "Wie ben ik?✨",
                about_text: "Ik ben een kaars die de naasten verlicht, een persoon die van perfectie houdt... accepteert geen half werk.<br><br>Een balans van standvastigheid, draagt verantwoordelijkheid alsof het lotsbestemming is.<br><br>Mijn stilte is diep, en mijn acties spreken duidelijker dan woorden.<br><br>Georganiseerd alsof de tijd op mijn ritme loopt.<br><br>Ik hou van eenvoud... en zoek naar oprechtheid in alles.",
                projects_title: "Mijn beste projecten 😎",
                project_title1: "Syrische Ministerie van Buitenlandse Zaken Website",
                project_text1: "Een website die het Syrische Ministerie van Buitenlandse Zaken nabootst, met informatie over het ministerie en zijn diensten.",
                project_link1: "Bezoek website",
                countdown_title: "Aftellen naar mijn verjaardag 🎉",
                days_label: "Dagen",
                hours_label: "Uren",
                minutes_label: "Minuten",
                seconds_label: "Seconden"
            }
        };

        // دالة تبديل اللغة
        function switchLanguage(lang) {
            // تغيير اتجاه الصفحة
            document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
            document.documentElement.setAttribute('lang', lang);
            
            // تحديث جميع العناصر التي تحتوي على data-lang
            document.querySelectorAll('[data-lang]').forEach(element => {
                const key = element.getAttribute('data-lang');
                if (translations[lang][key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.value = translations[lang][key];
                    } else {
                        element.innerHTML = translations[lang][key];
                    }
                }
            });
            
            // حفظ اللغة المختارة
            localStorage.setItem('selectedLang', lang);
            
            // إخفاء القائمة
            document.getElementById('languageMenu').classList.remove('show');
        }

        // باقي الكود الأصلي للعد التنازلي
        const targetDate = new Date("2025-12-22T00:00:00").getTime();

        function updateCountdown() {
          const now = new Date().getTime();
          const diff = targetDate - now;

          if (diff <= 0) {
            const countdownElement = document.getElementById("birthday-countdown");
            if (countdownElement) {
                const savedLang = localStorage.getItem('selectedLang') || 'ar';
                const message = savedLang === 'ar' ? 
                    "<h2>عيد ميلاد سعيد 🥳🎂</h2>" : 
                    "<h2>Gelukkige verjaardag 🥳🎂</h2>";
                countdownElement.innerHTML = message;
            }
            return;
          }

          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);

          document.getElementById("days").innerText = days;
          document.getElementById("hours").innerText = hours;
          document.getElementById("minutes").innerText = minutes;
          document.getElementById("seconds").innerText = seconds;
        }

        // تحديث كل ثانية
        setInterval(updateCountdown, 1000);
        updateCountdown();
