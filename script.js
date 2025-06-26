document.addEventListener('DOMContentLoaded', function( ) {
    const languageToggle = document.getElementById('languageToggle');
    const elementsToTranslate = document.querySelectorAll('[data-lang]');

   const translations = {
    'nl': {
        // القائمة الرئيسية
        'nav_who_am_i': 'Wie ben ik?',
        'nav_my_projects': 'Mijn projecten',
        'nav_my_cv': 'Mijn CV',
        'nav_my_diplomas': 'Mijn diploma\'s',
        'nav_contact': 'Contact',

        // قسم عني
        'hero_name': 'Mohammad Abdullah',
        'hero_slogan': 'Ik bouw websites en jaag mijn dromen na... Tussen code en een rondje hardlopen, dit is mijn verhaal',
        'about_description': 'Een 16-jarige student, front-end developer en sporter. Ik geloof dat eenvoud dichter bij schoonheid ligt dan elke versiering.',

        // قسم المشاريع
        'projects_title': 'Wat zijn mijn persoonlijke projecten?',
        'syrian_gov': 'Ik heb een web voor syrian regering💚',
        'eid': 'En ook Ik heb een offerfeest groetsite gemaakt.',
        'project_digital_immortality_title': 'Digitale Onsterfelijkheid',
        'project_digital_immortality_status': '🚧 In ontwikkeling - project wordt nog gebouwd',
        'project_digital_immortality_desc': 'Een platform dat herinneringen op een humane en moderne manier digitaal wil bewaren. Binnenkort beschikbaar...',
     'project_digital_immortality_button': 'Binnenkort',

        //قسم الشهادات
         'diplomas_title': 'Mijn Diploma\'s',
        'cert_poiesz_dkw_gkw_desc': 'Poiesz: DKW en GKW',
        'cert_poiesz_situatie_baas_desc': 'Poiesz: De situatie de baas',
        'cert_poiesz_diefstalpreventie_desc': 'Poiesz: Diefstalpreventie',
        'cert_poiesz_haccp_desc': 'Poiesz: HACCP',
        'cert_poiesz_welkom_desc': 'Welkom bij Poiesz',
        'cert_poiesz_veiligheidsmodule_desc': 'Poiesz: Veiligheidsmodule Winkel',
        'cert_shiyar_html_desc': 'Shiyar Academy: HTML Course',
        'cert_shiyar_css_desc': 'Shiyar Academy: CSS Course',
                'cert_pdf_fallback': 'Your browser does not support PDFs. Download the PDF.', // رسالة احتياطية

                //cv
                  'download': 'CV Downloaden',
        'ver': 'Word (DOCX) versie',
        '': 'Bestand wordt gedownload...',
        'progr':'Front-end Developer en toekomst full stack devoleper',
        'oud':'16 jaar oud',
        'ho':'ervaring : 3 jaar',

               'footer_text': 'Volg mij op Instagram:',


    },
    'ar': {
        // القائمة الرئيسية
        'nav_who_am_i': 'من أنا؟',
        'nav_my_projects': 'مشاريعي',
        'nav_my_cv': 'السيرة الذاتية',
        'nav_my_diplomas': 'شهاداتي',
        'nav_contact': 'تواصل معي',

        // قسم عني
        'hero_name': 'مُحَمَّد عَبْدُ ٱللَّٰه',
        'hero_slogan': 'أبني صفحات الويب، وأركض خلف الأحلام… بين كود وجولة، هذه قصتي',
        'about_description': 'طالب مدرسي أبلغ من العمر 16 سنة، مطوّر واجهات، ورياضي. أؤمن بأن البساطة أقرب إلى الجمال من أيّ زخرفة.',

        // قسم المشاريع
        'projects_title': 'ماهي مشاريعي الشخصية؟',
        'syrian_gov': 'سويت موقع للوزارة الخارجية السورية💚',
        'eid': 'وبرضو سويت موقع تهنئة لعيد الاضحى',
        'project_digital_immortality_title': 'خلود رقمي',
        'project_digital_immortality_status': '🚧 قيد العمل - المشروع تحت التطوير',
        'project_digital_immortality_desc': 'منصة تهدف لتخليد الذكريات رقمياً بطريقة إنسانية وحديثة. قريباً ستنطلق...',
        'project_digital_immortality_button': 'قريباً',

        // قسم الشهادات
        'diplomas_title': 'شهاداتي',
        'cert_poiesz_dkw_gkw_desc': 'بويز: DKW و GKW',
        'cert_poiesz_situatie_baas_desc': 'بويز: إتقان الموقف',
        'cert_poiesz_diefstalpreventie_desc': 'بويز: منع السرقة',
        'cert_poiesz_haccp_desc': 'بويز: HACCP',
        'cert_poiesz_welkom_desc': 'أهلاً بك في بويز',
        'cert_poiesz_veiligheidsmodule_desc': 'بويز: وحدة السلامة للمتجر',
        'cert_shiyar_html_desc': 'أكاديمية شيار: دورة HTML',
        'cert_shiyar_css_desc': 'أكاديمية شيار: دورة CSS',
                'cert_pdf_fallback': 'متصفحك لا يدعم ملفات PDF. قم بتنزيل الملف.', // رسالة احتياطية
                  'Download CV': 'تحميل السيرة الذاتية',
        'Word (DOCX) version': 'نسخة Word (DOCX)',
        'Download gestart...': 'جاري تحميل الملف...',
        'download':'تحميل الملف',
        'ver':'نسخة word',
        'progr':'مطور واجهة مواقع وقريبا واجهة وخلفية',
        'oud':'عمري 16 سنة',
        'ho':'خبرة : 3سنين',

        
        'footer_text': 'تواصل معي على انستغرام:',

    
    }
};


    // تحميل اللغة المحفوظة
    const savedLang = localStorage.getItem('language') || 'nl';
    changeLanguage(savedLang);

    // تبديل اللغة عند النقر
    languageToggle.addEventListener('click', function() {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'nl' ? 'ar' : 'nl';
        changeLanguage(newLang);
    });

    // تغيير اللغة وتحديث النصوص
    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}"`);
            }
        });

        // تحديث نص الزر
        languageToggle.textContent = lang === 'nl' ? 'NL / العربية' : 'العربية / NL';
        localStorage.setItem('language', lang);
    }
});

document.querySelector('.download-btn').addEventListener('click', function() {
    // إنشاء رابط تنزيل لملف السيرة الذاتية
    const link = document.createElement('a');
    link.href = 'Mohammad_Abdullah_CV.docx';
    link.download = 'Mohammad_Abdullah_CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // إضافة رسالة تأكيد للمستخدم
    const lang = document.documentElement.lang;
    const message = lang === 'ar' ? 'جاري تحميل الملف...' : 'Download gestart...';
    alert(message);
});