import { CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';

/* toggle includeExtra */
const includeExtra = true;

export interface Action {
  title: string;
  type: 'capture' | 'library';
  options: CameraOptions | ImageLibraryOptions;
}

export const actions: Action[] = [
  {
    title: 'Take a Pic',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'Choose a Pic',
    type: 'library',
    options: {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
];

export default { actions };
