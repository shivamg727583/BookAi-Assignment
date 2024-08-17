const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

var a=0;
menuBtn.addEventListener('click',function(event){

    if(a==0){

     gsap.to(menu,{
        duration: 0.5,
        left: 0,
        ease: 'power2.out',

     })

     menuBtn.innerHTML = `<i class="ri-close-large-fill"></i>`

     a=1;
    }
    else{
        gsap.to(menu,{
            duration: 0.5,
            left:120+"%",
            ease: 'power2.out',
            })

            menuBtn.innerHTML = `<i class="ri-menu-line"></i>`
            a=0;

    }

})



const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    themeToggleBtn.innerHTML = '<i class="ri-sun-line"></i>';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggleBtn.innerHTML = '<i class="ri-sun-fill"></i>';
  }
});

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggleBtn.innerHTML = '<i class="ri-sun-line"></i>';
  } else {
    themeToggleBtn.innerHTML = '<i class="ri-sun-fill"></i>';
  }
});
