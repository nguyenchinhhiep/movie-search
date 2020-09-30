import { elements } from "./base"

export const displayDialog = () => {
    elements.dialogContainer.classList.add('open');
}

export const closeDialog = () => {
    elements.dialogContainer.classList.remove('open');
}

export const clearDialogBody = () => {
    elements.dialogBody.innerHTML = '';
}