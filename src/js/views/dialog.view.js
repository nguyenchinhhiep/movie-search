import { elements } from "./base"

export const displayDialog = () => {
    elements.dialogContainer.classList.add('open');
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

export const closeDialog = () => {
    elements.dialogContainer.classList.remove('open');
    document.getElementsByTagName('body')[0].removeAttribute('style');
}

export const clearDialogBody = () => {
    elements.dialogBody.innerHTML = '';
}