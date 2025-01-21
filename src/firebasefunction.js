import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase-config'; 


export const uploadImage = async (imageFile,id) => {
  if (!imageFile) {
    console.error('No image file selected.');
    return;
  }else{
    const storageRef = ref(storage, `images/${id}.png`); 

    try {
  
      await uploadBytes(storageRef, imageFile);
      console.log('Image uploaded successfully!');
      const url = await getDownloadURL(storageRef);
      return url; 
    } catch (error) {
      console.error('Error uploading image:', error);
      throw new Error('Image upload failed');
    }
  }

  
};
