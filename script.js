// app.js

const languageToggleBtn = document.getElementById('languageToggle');
let currentLanguage = 'ar'; // اللغة الافتراضية هي العربية

// كائن الترجمات
const translations = {
    'ar': {
        nav_about: 'من انا؟',
        nav_skills: 'مهاراتي',
        nav_projects: 'مشاريعي',
        nav_certificates: 'شهاداتي',
        nav_contact: 'تواصل معي',
        hero_name: 'مُحَمَّد عبد الله',
        hero_tittle: 'مطور واجهات امامية',
        hero_description: 'طالب ابلغ من العمر 16 ربيعا, مطور واجهات امامية و رياضي اؤمن بأن البساطة اهم من اي شيء',
        view_projects: 'مشاهدة المشاريع',
        contact_me: 'تواصل معي',
        hero_role: 'مطور واجهة امامي و رياضي',
        age: 'العمر',
        experience: 'سنوات خبرة',
        projects: 'مشروع',
        skills_tittle: 'مهاراتي',
        skills_subtitle: 'مجموعة المهارات الي عندي من خلال االبرمجة',
        frontend_title: 'تطوير الواجهات الامامية',
        frontend_desc: 'تطوير واجهات مواقع تفاعلية وسريعة',
        design_title: 'تصميم واجهات المستخدم',
        design_desc: 'انشاء تصاميم حديثة وجذابة',
        projects_tittle: 'مشاريعي',
        projects_subtitle: 'استعرض بعض المشاريع التي عملت عليها',
        project1_title: 'موقع يشابه الوزارة الخارجية السورية',
        completed: 'مكتمل',
        project1_desc: 'موقع ويب رسمي للحكومة السورية',
        view_project: 'عرض المشروع',
        project2_title: 'تهنئة عيد الأضحى',
        project2_desc: 'موقع ويب بسيط لتهنئة عيد الأضحى المبارك',
        project3_title: 'الخلود الرقمي',
        in_progress: 'قيد التطوير',
        project3_desc: 'منصة لتخليد الذكريات بطريقة رقمية حديثة وإنسانية',
        certificates_tittle: 'شهاداتي',
        certificates_subtitle: 'استعرض بعض الشهادات التي حصلت عليها',
        cert1_title: 'دورة htm5',
        cert1_org: 'أكاديمية شيار',
        cert2_title: 'دورة css3',
        cert2_org: 'أكاديمية شيار',
        cert3_title: 'عدة دورات عن سلامة وامن المتاجر',
        cert3_org: 'Poiesz',
        contact_title: 'تواصل معي',
        contact_subtitle: 'انا متاح دائما للعمل على مشاريع جديدة',
        contact_text: 'هل لديك مشروع في ذهنك؟ دعنا نعمل معًا لتحويله إلى حقيقة!',
        // أضف المزيد من الترجمات هنا
    },
    'nl': {
        nav_about: 'Over mij',
        nav_skills: 'Mijn vaardigheden',
        nav_projects: 'Mijn projecten',
        nav_certificates: 'Mijn certificaten',
        nav_contact: 'Neem contact op',
        hero_name: 'Mohammad Abdullah',
        hero_tittle: 'Frontend Ontwikkelaar',
        hero_description: 'Een 16-jarige student, frontend ontwikkelaar en atleet. Ik geloof dat eenvoud belangrijker is dan wat dan ook.',
        view_projects: 'Bekijk projecten',
        contact_me: 'Neem contact met mij op',
        hero_role: 'Frontend Ontwikkelaar & Atleet',
        age: 'Leeftijd',
        experience: 'Jaren ervaring',
        projects: 'Projecten',
        skills_tittle: 'Mijn vaardigheden',
        skills_subtitle: 'De vaardigheden die ik heb opgedaan door programmeren',
        frontend_title: 'Frontend Ontwikkeling',
        frontend_desc: 'Ontwikkeling van interactieve en snelle webinterfaces',
        design_title: 'UI Ontwerp',
        design_desc: 'Creëren van moderne en aantrekkelijke ontwerpen',
        projects_tittle: 'Mijn projecten',
        projects_subtitle: 'Bekijk enkele projecten waaraan ik heb gewerkt',
        project1_title: 'Website vergelijkbaar met het Syrische Ministerie van Buitenlandse Zaken',
        completed: 'Voltooid',
        project1_desc: 'Officiële website voor de Syrische regering',
        view_project: 'Bekijk project',
        project2_title: 'Eid al-Adha felicitatie',
        project2_desc: 'Een eenvoudige website om Eid al-Adha te feliciteren',
        project3_title: 'Digitale Onsterfelijkheid',
        in_progress: 'In ontwikkeling',
        project3_desc: 'Een platform om herinneringen op een moderne en humane digitale manier te vereeuwigen',
        certificates_tittle: 'Mijn certificaten',
        certificates_subtitle: 'Bekijk enkele certificaten die ik heb behaald',
        cert1_title: 'HTML5 Cursus',
        cert1_org: 'Shayar Academy',
        cert2_title: 'CSS3 Cursus',
        cert2_org: 'Shayar Academy',
        cert3_title: 'Verschillende cursussen over winkelveiligheid en beveiliging',
        cert3_org: 'Poiesz',
        contact_title: 'Neem contact met mij op',
        contact_subtitle: 'Ik ben altijd beschikbaar voor nieuwe projecten',
        contact_text: 'Heeft u een project in gedachten? Laten we samenwerken om het werkelijkheid te maken!',
        // أضف المزيد من الترجمات هنا
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    currentLanguage = lang;
    // تحديث نص زر تبديل اللغة
    languageToggleBtn.querySelector('span').textContent = lang === 'ar' ? 'العربية|NL' : 'NL|العربية';
    // تحديث اتجاه الصفحة
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

// تبديل اللغة عند النقر على الزر
languageToggleBtn.addEventListener('click', () => {
    const newLang = currentLanguage === 'ar' ? 'nl' : 'ar';
    setLanguage(newLang);
});

// تعيين اللغة الافتراضية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});

// Fade-in effect for sections
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
