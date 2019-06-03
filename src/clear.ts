export const clearScreen = () => {
  const elements = document.querySelectorAll('h3');
  const elementsAmount = elements.length;
  for (let i = 0; i < elementsAmount; i++) {
    document.body.removeChild(elements[i]);
  }
};
