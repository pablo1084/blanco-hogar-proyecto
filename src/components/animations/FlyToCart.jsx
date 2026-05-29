export const flyToCart = (imageElement) => {
  return new Promise((resolve) => {
    if (!imageElement) {
      resolve();
      return;
    }
    const cart = document.getElementById("cart-button");
    if (!cart) {
      resolve();
      return;
    }
    const imageRect = imageElement.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();
    const clone = imageElement.cloneNode(true);
    clone.style.position = "fixed";
    clone.style.left = `${imageRect.left}px`;
    clone.style.top = `${imageRect.top}px`;
    clone.style.width = `${imageRect.width}px`;
    clone.style.height = `${imageRect.height}px`;
    clone.style.objectFit = "cover";
    clone.style.borderRadius = "16px";
    clone.style.pointerEvents = "none";
    clone.style.zIndex = "999999";
    clone.style.transition = ` transform 800ms cubic-bezier(0.22, 1, 0.36, 1), opacity 800ms ease `;
    document.body.appendChild(clone);
    requestAnimationFrame(() => {
      const translateX =
        cartRect.left -
        imageRect.left +
        cartRect.width / 2 -
        imageRect.width / 2;
      const translateY =
        cartRect.top -
        imageRect.top +
        cartRect.height / 2 -
        imageRect.height / 2;
      clone.style.transform = ` translate(${translateX}px, ${translateY}px) scale(0.15) `;
      clone.style.opacity = "0.25";
    });
    setTimeout(() => {
      clone.remove();
      resolve();
    }, 800);
  });
};
