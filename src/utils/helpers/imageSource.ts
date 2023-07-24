export const imageSource = (image: string | undefined) => {
  const defaultImage = require('~/assets/images/default-image.jpg');

  if (image !== undefined && image !== '') {
    return { uri: image };
  } else {
    return defaultImage;
  }
};
