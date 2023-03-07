function isMobile() {
  if (sessionStorage.desktop)
      return false;
  else if (localStorage.mobile)
      return true;
  var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
  for (var i in mobile)
      if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
  return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '3513508302';

formulario.addEventListener('submit', (event) => {
  event.preventDefault()
  buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
  buttonSubmit.disabled = true
  setTimeout(() => {
      let nombre = document.querySelector('#nombre').value
      let apellidos = document.querySelector('#apellidos').value
      let email = document.querySelector('#email').value
      let cantPersonas = document.querySelector('#cantPersonas').value
      let celular = document.querySelector('#celular').value
      let localidad = document.querySelector('#localidad').value
      let mensaje = 'send?phone=' + telefono + '&text=*_Formulario Easy App CODE_*%0A*¿Cual es tu nombre?*%0A' + nombre + '%0A%0A' + apellidos + '%0A%0A' + email  + '%0A%0A'
      + cantPersonas + '%0A%0A' + celular + '%0A%0A' + localidad + '%0A%0A'
      if(isMobile()) {
          window.open(urlMobile + mensaje, '_blank')
      }else{
          window.open(urlDesktop + mensaje, '_blank')
      }
      buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
      buttonSubmit.disabled = false
  }, 3000);
});