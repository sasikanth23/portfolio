document.querySelectorAll('.lang-switch button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const lang = btn.dataset.lang;
    document.querySelectorAll('[data-en]').forEach(el=>{
      el.textContent = el.getAttribute(`data-${lang}`);
    });
  });
});
