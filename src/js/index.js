const sectionImage = document.querySelectorAll('.image-woman')

const switchImage = () => {
  if(window.innerWidth > 768) {
    sectionImage[0].classList.remove('switchImage')
    sectionImage[1].classList.add('switchImage')
  } else {
    sectionImage[1].classList.remove('switchImage')
    sectionImage[0].classList.add('switchImage')
  }
}

window.addEventListener('resize', switchImage)
window.addEventListener('DOMContentLoaded', switchImage)