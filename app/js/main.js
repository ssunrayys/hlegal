(function(){
	const headerBurgerBtn = document.querySelector('.header__burger');
	const headerNavigation = document.querySelector('.header__nav');
	const headerButtonCloseNav = document.querySelector('.header__nav-close');

	headerBurgerBtn.addEventListener('click', e => {
		headerNavigation.classList.add('active');
	});

	headerButtonCloseNav.addEventListener('click', e => {
		headerNavigation.classList.remove('active');
	});

})();

(function () {
  const tabsItem = document.querySelectorAll(".block__name-link");
  const tabsBlock = document.querySelectorAll(".block__inform");
  tabsItem.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      tabsBlock.forEach((content) => {
        content.classList.remove("active");
      });
      tabsItem.forEach((tab) => {
        tab.classList.remove("block__active-link");
      });
      tabsItem[index].classList.add("block__active-link");
      tabsBlock[index].classList.add("active");
    });
  }); 
})();

const swiperContainer = document.querySelector('.swiper');

if (swiperContainer) {
  const swiper = new Swiper('.swiper', {

    loop: true,
    spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
  }
});
}
