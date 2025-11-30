
document.querySelectorAll('.lang-switch button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    alert('Language switched to '+btn.dataset.lang);
  });
});
