// Smooth scrolling
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if(target) target.scrollIntoView({ behavior: "smooth" });
  });
});

/* MOBILE MENU */
const menuToggle=document.getElementById('mobile-menu'), navLinks=document.querySelector('.nav-links');
if(menuToggle && navLinks){
    menuToggle.addEventListener('click', ()=>{navLinks.classList.toggle('active')});
    document.querySelectorAll('.nav-links a').forEach(l=>{l.addEventListener('click', ()=>{navLinks.classList.remove('active')})});
}

/* IMAGE TOGGLE (Legacy - kept for safety, though specific button was removed) */
let isBefore=false;
function toggleImage(id,b,a,btn){
    const img=document.getElementById(id), span=btn.querySelector('span'), cur=document.documentElement.lang||'fr';
    if(!isBefore){img.src=b;span.textContent=translations[cur].btnAfter;isBefore=true;}
    else{img.src=a;span.textContent=translations[cur].btnBefore;isBefore=false;}
}

/* FAQ ACCORDION LOGIC */
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        header.classList.toggle('active');
        if (header.classList.contains('active')) { body.style.maxHeight = body.scrollHeight + "px"; } 
        else { body.style.maxHeight = 0; }
        document.querySelectorAll('.accordion-header').forEach(otherHeader => {
            if (otherHeader !== header && otherHeader.classList.contains('active')) {
                otherHeader.classList.remove('active');
                otherHeader.nextElementSibling.style.maxHeight = 0;
            }
        });
    });
});

/* REVIEW MODAL */
const reviewModal=document.getElementById('reviewModal'), stars=document.querySelectorAll('.star-input i'), ratingVal=document.getElementById('ratingValue');
function openReviewModal(){if(reviewModal) reviewModal.classList.add('active')}
function closeReviewModal(){if(reviewModal) reviewModal.classList.remove('active')}
if(reviewModal) reviewModal.addEventListener('click', e=>{if(e.target===reviewModal)closeReviewModal()});
stars.forEach(s=>{s.addEventListener('click',()=>{
    const v=parseInt(s.getAttribute('data-value'));if(ratingVal) ratingVal.value=v;
    stars.forEach(st=>{st.classList.toggle('active',parseInt(st.getAttribute('data-value'))<=v)})
})});

/* TRANSLATIONS */
const translations = {
  en:{
      home:"Home", about:"About Us", services:"Services", projects:"Projects", contact:"Contact", getQuote:"Get a Quote", faqMenu: "FAQ",
      heroTitle:"Building Your Vision", heroDesc:"Construction, Renovation & Real Estate Services",
      aboutText:"AL-BADR MRNA IMMO is a professional company specializing in construction, renovation, and finishing works. We turn your dreams into reality with expert precision and quality materials.",
      yearsExp:"Years Experience", projComp:"Projects Completed", clientSat:"Client Satisfaction",
      serviceConstruction:"Construction", serviceConstructionDesc:"Residential and commercial building.",
      serviceRenovation:"Renovation", serviceRenovationDesc:"Modern renovation solutions.",
      serviceFinishing:"Finishing", serviceFinishingDesc:"Interior and exterior finishing.",
      serviceElectric:"Electricity", serviceElectricDesc:"Professional installations.",
      catRenovation:"Renovation", catFinishing:"Finishing", catConstruction:"Construction",
      proj1Title:"Luxury Villa", proj1Desc:"Complete renovation of a villa in Bouskoura. Facade modernization, interior redesign, and swimming pool.",
      proj2Title:"Apartment Finishing", proj2Desc:"High-end finishing for a 120m² apartment in Maarif district. Painting, tiling, and custom carpentry.",
      proj3Title:"Office Build", proj3Desc:"Construction of a commercial office space on 2 levels in Agdal. Reinforced concrete structure and modern amenities.",
      btnBefore:"Show Before", btnAfter:"Show Result",
      testimonialsTitle: "What Our Clients Say", btnLeaveReview: "Leave a Review",
      modalTitle: "Your Feedback", modalPlaceholder: "Describe your experience...",
      formName:"Your Name", formEmail:"Email", formPhone:"Phone", formMessage:"Message", formSubmit:"Send Message",
      review1:"\"I renovated my villa with AL-BADR and I am delighted. Adherence to deadlines and quality of materials are top-notch. A trustworthy team.\"",
      review2:"\"Excellent finishing work on my apartment. The attention to detail makes all the difference. I highly recommend their services.\"",
      review3:"\"A reliable partner for our construction projects. Responsiveness and professionalism are the keywords of this company.\"",
      faqTitle: "Frequently Asked Questions",
      faqQ1: "Is the quote free?", faqA1: "Yes, absolutely. We offer a free initial consultation and estimate.",
      faqQ3: "How long does a project take?", faqA3: "It depends. Renovations take 3-6 weeks, villas take several months.",
      faqQ4: "Do you have a warranty?", faqA4: "Yes, all our structural work is covered by a professional warranty to ensure your peace of mind."
  },
  fr:{
      home:"Accueil", about:"À Propos", services:"Services", projects:"Projets", contact:"Contact", getQuote:"Demander un devis", faqMenu: "FAQ",
      heroTitle:"Construire Votre Vision", heroDesc:"Services de Construction, Rénovation & Immobilier",
      aboutText:"AL-BADR MRNA IMMO est une société professionnelle spécialisée dans la construction, la rénovation et les travaux de finition. Nous transformons vos rêves en réalité avec une précision experte et des matériaux de qualité.",
      yearsExp:"Années d'Expérience", projComp:"Projets Réalisés", clientSat:"Satisfaction Client",
      serviceConstruction:"Construction", serviceConstructionDesc:"Construction résidentielle et commerciale.",
      serviceRenovation:"Rénovation", serviceRenovationDesc:"Solutions modernes de rénovation.",
      serviceFinishing:"Finitions", serviceFinishingDesc:"Finitions intérieures et extérieures.",
      serviceElectric:"Électricité", serviceElectricDesc:"Installations professionnelles.",
      catRenovation:"Rénovation", catFinishing:"Finitions", catConstruction:"Construction",
      proj1Title:"Rénovation Villa de Luxe", proj1Desc:"Rénovation complète d'une villa à Bouskoura. Modernisation de la façade, réaménagement intérieur et piscine.",
      proj2Title:"Finition Appartement", proj2Desc:"Finition haut de gamme pour un appartement de 120m² au quartier Maarif. Peinture, carrelage et menuiserie sur mesure.",
      proj3Title:"Bureau Commercial", proj3Desc:"Construction d'un espace de bureau commercial sur 2 niveaux à Agdal. Structure en béton armé et aménagements modernes.",
      btnBefore:"Voir Avant", btnAfter:"Voir Résultat",
      testimonialsTitle: "Ce que disent nos clients", btnLeaveReview: "Donner votre avis",
      modalTitle: "Votre Avis Compte", modalPlaceholder: "Décrivez votre expérience...",
      formName:"Votre Nom", formEmail:"Email", formPhone:"Téléphone", formMessage:"Message", formSubmit:"Envoyer",
      review1:"\"Nous avons confié la rénovation de notre villa à AL-BADR. Le résultat dépasse nos attentes. Équipe très professionnelle et respectueuse des délais.\"",
      review2:"\"Qualité de finition irréprochable pour mon appartement. Ils ont su transformer l'espace avec goût. Je recommande vivement leurs services.\"",
      review3:"\"Un partenaire fiable pour nos projets de construction. Réactivité et professionnalisme sont les maîtres mots de cette entreprise.\"",
      faqTitle: "Questions Fréquentes",
      faqQ1: "Le devis est-il gratuit ?", faqA1: "Oui, absolument. Nous offrons une première consultation et une estimation gratuite.",
      faqQ3: "Quelle est la durée d'un projet ?", faqA3: "Cela dépend. Une rénovation prend 3-6 semaines, une villa plusieurs mois.",
      faqQ4: "Avez-vous une garantie ?", faqA4: "Oui, tous nos travaux de gros œuvre sont couverts par une garantie professionnelle, assurant la tranquillité d'esprit de nos clients."
  },
  ar:{
      home:"الرئيسية", about:"عنا", services:"خدماتنا", projects:"مشاريعنا", contact:"اتصل", getQuote:"طلب عرض", faqMenu: "أسئلة شائعة",
      heroTitle:"بناء رؤيتك", heroDesc:"خدمات البناء والتجديد والعقارات",
      aboutText:"شركة AL-BADR MRNA IMMO هي شركة محترفة متخصصة في البناء والتجديد وأعمال التشطيب. نحول أحلامكم إلى واقع بدقة متناهية ومواد عالية الجودة.",
      yearsExp:"سنوات الخبرة", projComp:"مشاريع منجزة", clientSat:"رضاء العملاء",
      serviceConstruction:"البناء", serviceConstructionDesc:"خدمات البناء السكنية والتجارية.",
      serviceRenovation:"التجديد", serviceRenovationDesc:"حلول حديثة للتجديد.",
      serviceFinishing:"التشطيبات", serviceFinishingDesc:"تشطيبات داخلية وخارجية.",
      serviceElectric:"الكهرباء", serviceElectricDesc:"تركيبات احترافية.",
      catRenovation:"تجديد", catFinishing:"تشطيبات", catConstruction:"بناء",
      proj1Title:"تجديد فيلا فاخرة", proj1Desc:"تجديد كامل لفيلا في بوسكورة. تحديث الواجهة، إعادة تصميم داخلي ومسبح.",
      proj2Title:"تشطيب شقة", proj2Desc:"تشطيب عالي الجودة لشقة بمساحة 120 متر مربع في حي المعاريف. صباغة، تبليط ونجارة حسب الطلب.",
      proj3Title:"بناء مكتب", proj3Desc:"بناء مساحة مكتبية تجارية من طابقين في أكدال. هيكل خرساني مسلح وتجهيزات حديثة.",
      btnBefore:"عرض قبل", btnAfter:"عرض النتيجة",
      testimonialsTitle: "آراء عملائنا", btnLeaveReview: "إعطاء رأيك",
      modalTitle: "رأيك يهمنا", modalPlaceholder: "صف تجربتك...",
      formName:"الاسم", formEmail:"البريد", formPhone:"الهاتف", formMessage:"الرسالة", formSubmit:"إرسال",
      review1:"\"قمت بتجديد فيلتي مع البدر وأنا سعيد جداً. الالتزام بالمواعيد وجودة المواد ممتازة. فريق جدير بالثقة.\"",
      review2:"\"عمل تشطيب ممتاز لشقتي. الاهتمام بالتفاصيل يصنع الفرق. أنصح بخدماتهم بشدة.\"",
      review3:"\"شريك موثوق لمشاريع البناء الخاصة بنا. الاستجابة والاحترافية هي شعار هذه الشركة.\"",
      faqTitle: "الأسئلة الشائعة",
      faqQ1: "هل التقدير مجاني؟", faqA1: "نعم بالتأكيد. نقدم استشارة أولية وتقدير مجاني لجميع المشاريع.",
      faqQ3: "كم تستغرق المشاريع؟", faqA3: "يعتمد ذلك على الحجم. التجديدات تستغرق 3-6 أسابيع، والفيلات عدة أشهر.",
      faqQ4: "هل لديكم ضمان؟", faqA4: "نعم، جميع أعمال البناء لدينا مغطاة بضمان مهني لضمان راحة بالك."
  }
};

/* LANG & SCROLL */
const langBtn=document.getElementById("langButton"), langOpts=document.getElementById("langOptions");
if(langBtn && langOpts){
    langBtn.addEventListener("click", ()=>langOpts.style.display=langOpts.style.display==="flex"?"none":"flex");
    document.querySelectorAll(".langOption").forEach(o=>{o.addEventListener("click",()=>{
        const l=o.getAttribute("data-lang");document.documentElement.lang=l;langOpts.style.display="none";langBtn.textContent=o.textContent;
        document.querySelectorAll("[data-key]").forEach(e=>{
            if(translations[l][e.getAttribute("data-key")]){
                if(e.tagName==="INPUT"||e.tagName==="TEXTAREA")e.placeholder=translations[l][e.getAttribute("data-key")];
                else e.textContent=translations[l][e.getAttribute("data-key")];
            }
        });
        document.body.dir=l==="ar"?"rtl":"ltr";document.body.style.textAlign=l==="ar"?"right":"left";
    })});
}

/* FORMS */
const cf=document.getElementById("contactForm"), rf=document.getElementById("reviewForm");
async function hSub(e,f){e.preventDefault();try{if((await fetch(f.action,{method:"POST",body:new FormData(f),headers:{"Accept":"application/json"}})).ok){alert("✅ Envoyé!");f.reset();if(f.id==='reviewForm')closeReviewModal()}else alert("⚠️ Erreur.")}catch{alert("⚠️ Erreur.")}}
if(cf)cf.addEventListener("submit",e=>hSub(e,cf));if(rf)rf.addEventListener("submit",e=>hSub(e,rf));

/* ANIMATIONS */
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('show-el')})});
document.querySelectorAll('section,.card,.project-card,.about-stats div,.testi-card,.accordion-item').forEach(e=>{e.classList.add('hidden-el');obs.observe(e)});

window.addEventListener('load',()=>{const p=document.getElementById('preloader');if(p){p.style.opacity='0';setTimeout(()=>p.style.display='none',500)}});
window.addEventListener('scroll',()=>{
    const nav=document.querySelector('.navbar'); if(nav) nav.classList.toggle('scrolled',window.scrollY>50);
    const scrollBar = document.querySelector('.scroll-progress');
    if(scrollBar) scrollBar.style.width=((document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight))*100)+'%';
});

/* COUNTERS */
const stObs=new IntersectionObserver((e,o)=>{e.forEach(x=>{if(x.isIntersecting){
    x.target.querySelectorAll('h3').forEach(c=>{
        const t=+c.getAttribute('data-target'), i=t/200; let n=0;
        const u=()=>{if(n<t){n+=i;c.innerText=Math.ceil(n)+(t===100?'%':'+');setTimeout(u,15)}else c.innerText=t+(t===100?'%':'+')};u();
    });o.unobserve(x.target);
}})});
const stSec=document.querySelector('.about-stats');if(stSec)stObs.observe(stSec);

/* =========================================
   GALERIE DYNAMIQUE (IMAGE + VIDEO)
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("dynamic-gallery-grid");
  const gallerySection = document.getElementById('gallery');

  if (galleryGrid) {
    fetch('get_images.php')
      .then(response => {
        if (!response.ok) throw new Error("Erreur réseau");
        return response.json();
      })
      .then(files => {
        galleryGrid.innerHTML = ''; 

        // IF NO FILES, HIDE THE SECTION
        if (!files || files.length === 0) {
            if(gallerySection) gallerySection.style.display = 'none';
            return;
        }

        // RENDER EACH FILE
        files.forEach(fileUrl => {
            const card = document.createElement('div');
            card.className = 'project-card hidden-el'; 
            
            // Check if it's a video file
            const isVideo = fileUrl.match(/\.(mp4|webm|ogg)$/i);
            
            let contentHtml = '';
            if (isVideo) {
                // Video HTML
                contentHtml = `
                    <video controls style="width:100%; height:100%; object-fit:cover; background:#000;">
                        <source src="${fileUrl}" type="video/mp4">
                    </video>
                    <span class="category-badge" style="background:gold; color:black;"><i class="fas fa-play"></i> Vidéo</span>
                `;
            } else {
                // Image HTML
                contentHtml = `
                    <img src="${fileUrl}" alt="Projet" style="width:100%; height:100%; object-fit:cover;">
                    <span class="category-badge" style="background:gold; color:black;">Récent</span>
                `;
            }

            card.innerHTML = `<div class="image-wrapper" style="height: 300px;">${contentHtml}</div>`;
            galleryGrid.appendChild(card);
            
            // Add animation
            if(typeof obs !== 'undefined') obs.observe(card);
        });
      })
      .catch(err => {
          console.error("Erreur galerie:", err);
          if(gallerySection) gallerySection.style.display = 'none';
      });
  }
});

/* =========================================
   DYNAMIC IMAGE SLIDER (AUTO & MANUAL)
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    const sliderImg = document.getElementById('img-1');
    
    if (sliderImg) {
        const imgAfter = sliderImg.getAttribute('data-after');
        const imgBefore = sliderImg.getAttribute('data-before');
        let isShowingAfter = true;
        let slideInterval;

        // Function to switch images with fade effect
        function swapImage() {
            // 1. Fade out
            sliderImg.style.opacity = '0';
            
            setTimeout(() => {
                // 2. Change Source
                if (isShowingAfter) {
                    sliderImg.src = imgBefore;
                    isShowingAfter = false;
                } else {
                    sliderImg.src = imgAfter;
                    isShowingAfter = true;
                }
                
                // 3. Fade in
                sliderImg.style.opacity = '1';
            }, 500); // Wait 500ms (matches CSS transition)
        }

        // Start the automatic loop (every 3 seconds)
        function startSlider() {
            slideInterval = setInterval(swapImage, 3000); 
        }

        // Stop the loop (when interacting)
        function stopSlider() {
            clearInterval(slideInterval);
        }

        // Initialize
        startSlider();

        // MANUAL: Click to swap immediately and pause briefly
        sliderImg.addEventListener('click', () => {
            stopSlider(); // Stop auto
            swapImage();  // Swap immediately
            startSlider(); // Restart auto timer
        });
    }
});