export const smoothScroll = () => {
    const html = document.querySelector('html');
    if (html) {
       html.style.scrollBehavior = 'smooth';
    }
 };
 export const removeSmoothScroll = () => {
    const html = document.querySelector('html');
    if (html) {
     setTimeout(() => {
         html.style.scrollBehavior = 'unset';
     }, 0);
   }
 };