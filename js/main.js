// // Получаем элементы из DOM
// const loginLink = document.getElementById('loginLink');
// const modal = document.getElementById('modal');
// const closeModal = document.getElementById('closeModal');

// // Функция для открытия модального окна
// function openModal() {
//     modal.style.display = 'flex';
// }

// // Функция для закрытия модального окна
// function closeModalFunc() {
//     modal.style.display = 'none';
// }

// // Добавляем обработчик события для открытия модального окна
// loginLink.addEventListener('click', function(event) {
//     event.preventDefault(); // Предотвращаем переход по ссылке
//     openModal();
// });

// // Добавляем обработчик события для закрытия модального окна
// closeModal.addEventListener('click', closeModalFunc);

// // Закрытие модального окна при клике вне его
// window.addEventListener('click', function(event) {
//     if (event.target === modal) {
//         closeModalFunc();
//     }
// });


class Menu {
    constructor(menuElement) {
        this.menuElement = menuElement;
        this.lastScrollTop = 0;
        this.isMenuPinned = false;

        // Устанавливаем начальное положение меню
        this.menuElement.style.transform = 'translateY(70px)';
 window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > this.lastScrollTop) {
            // Прокрутка вниз
            if (!this.isMenuPinned) {
                this.menuElement.style.transform = 'translateY(0)';
                this.isMenuPinned = true;
            }
        } else {
            // Прокрутка вверх
            if (this.isMenuPinned && currentScroll === 0) {
                this.menuElement.style.transform = 'translateY(70px)';
                this.isMenuPinned = false;
            }
        }

        this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
}

const menuElement = document.getElementById('fixed-top');
const menu = new Menu(menuElement);


const toggler = document.querySelector('.navbar-toggler');
toggler.addEventListener('click', function () {
    toggler.classList.toggle('collapsed');
});