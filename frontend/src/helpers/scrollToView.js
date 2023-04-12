
export const scrollToElementByID = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
};
export const scrollToTop=()=>{
    const element = document.getElementById('nav');
    element.scrollIntoView();
}
