// src/utilidades.js
export const importAllImages = (r) => {
    let image = {};
    r.keys().forEach((item) => { image[item.replace('./', '')] = r(item); });
    return image;
  };
  