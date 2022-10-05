const logout = document.querySelector('#logout');
  logout.addEventListener('click', () => {
   sessionStorage.removeItem('mEmail');
   fetch('logout');
   location = `${getContextPath()}/index.html`;
 });

 function getContextPath() {
  return window.location.pathname.substring(0, window.location.pathname.indexOf('/', 2));
 }