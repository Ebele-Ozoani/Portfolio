

const slide =  function() { 
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".links");
    const links = document.querySelectorAll('.links li');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
        links.forEach((link, index)=>{
            // console.log(link)
            if (link.style.animation){
                link.style.animation = '';
            }else {
                link.style.animation = `linksFade 0.5s ease forwards ${index/7 + 1}s`;
            }
        })
        hamburger.classList.toggle('toggle')
    });
  
}
slide();