import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
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


export const deleteImage = async (id) => {
  console.log(id);
  
  if (!id) {
    console.error('No image ID provided.');
    return;
  }

  const imageRef = ref(storage, `images/${id}.png`);

  try {
    await deleteObject(imageRef);
    console.log('Image deleted successfully!');
  } catch (error) {
    console.error('Error deleting image:', error);
    throw new Error('Image deletion failed');
  }
};
