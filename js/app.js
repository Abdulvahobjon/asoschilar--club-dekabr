function responsiveMenuJs () {
  const responsiveMenuBtn = document.querySelector('.responsive-menu-btn')
  const responsiveMenu = document.querySelector('.responsive-menu')
  const headerHamburger = document.querySelector('.header-hamburger')
  const navListLinks = document.querySelectorAll('.nav-list .nav-link')

  // Menu toggle on header hamburger click
  headerHamburger.addEventListener('click', () => {
    responsiveMenu.classList.add('active')
    document.body.classList.add('active')
  })

  // Close menu on responsive button click
  responsiveMenuBtn.addEventListener('click', () => {
    responsiveMenu.classList.remove('active')
    document.body.classList.remove('active')
  })

  // Close menu when any nav link is clicked
  navListLinks.forEach(link => {
    link.addEventListener('click', () => {
      responsiveMenu.classList.remove('active')
      document.body.classList.remove('active')
    })
  })
}

// Initialize menu functionality if the required element exists
if (document.querySelector('.responsive-menu-btn')) {
  responsiveMenuJs()
}
