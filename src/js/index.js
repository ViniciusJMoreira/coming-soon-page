const imageWoman = document.querySelectorAll('.image-woman');
const form = document.querySelector('form');

const switchImage = () => {
  if(window.innerWidth > 768) {
    imageWoman[0].classList.remove('switchImage');
    imageWoman[1].classList.add('switchImage');
  } else {
    imageWoman[1].classList.remove('switchImage');
    imageWoman[0].classList.add('switchImage');
  }
};

const validationEmail = (e) => {
  e.preventDefault()
  const inputEmail = document.querySelector('#input-email').value;
  const errorMessage = document.querySelector('.error')
  const iconError = document.querySelector('.icon-error')

  try {
  if(inputEmail.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
    errorMessage.style.display = 'none';
    iconError.style.display = 'none';
  }else {
    throw new Error()
  }
  }catch(error) {
    errorMessage.style.display = 'block';
    iconError.style.display = 'inline';
  }
};

window.addEventListener('resize', switchImage);
window.addEventListener('DOMContentLoaded', switchImage);
form.addEventListener('submit', validationEmail);