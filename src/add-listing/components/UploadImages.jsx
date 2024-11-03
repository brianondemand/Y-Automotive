/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { CarImages } from './../../../configs/schema';
import { storage } from './../../../configs/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { db } from './../../../configs';
import { eq } from 'drizzle-orm';

function UploadImages({ triggerUploadImages, setLoader, carInfo, mode }) {
    const [selectedFileList, setSelectedFileList] = useState([]);
    const [editCarImageList, setEditCarImageList] = useState([]);

    useEffect(() => {
        if (mode === 'edit') {
            const images = carInfo?.images.map(image => image?.imageUrl) || [];
            setEditCarImageList(images);
        }
    }, [carInfo, mode]);

    useEffect(() => {
        if (triggerUploadImages) {
            UploadImagesToServer();
        }
    }, [triggerUploadImages]);

    const onFileSelected = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFileList(prev => [...prev, ...files]); // Append new files to the existing list
    };

    const onImageRemove = (file) => {
        const result = selectedFileList.filter(item => item.name !== file.name); // Filter by file name
        setSelectedFileList(result);
    };

    const onImageRemoveFromDB = async (image) => {
        const imageToDelete = carInfo?.images.find(img => img.imageUrl === image);
        if (imageToDelete) {
            await db.delete(CarImages).where(eq(CarImages.id, imageToDelete.id)).returning({ id: CarImages.id });
            const updatedEditCarImageList = editCarImageList.filter(item => item !== image);
            setEditCarImageList(updatedEditCarImageList);
        }
    };

    const UploadImagesToServer = async () => {
        setLoader(true);
        for (const file of selectedFileList) {
            const fileName = Date.now() + '-' + file.name; // Use original file name
            const storageRef = ref(storage, 'car-images/' + fileName);
            const metaData = {
                contentType: file.type // Use the correct content type
            };
            await uploadBytes(storageRef, file, metaData);
            const downloadUrl = await getDownloadURL(storageRef);
            await db.insert(CarImages).values({
                imageUrl: downloadUrl,
                carListingId: triggerUploadImages
            });
        }
        setLoader(false);
        setSelectedFileList([]); // Clear selected files after upload
    };

    return (
        <div>
            <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                {mode === 'edit' && editCarImageList.map((image, index) => (
                    <div key={index} className='relative'>
                        <IoIosCloseCircleOutline 
                            className='absolute m-2 text-lg text-red-500' 
                            onClick={() => onImageRemoveFromDB(image)} // Call remove from DB
                        />
                        <img src={image} className='w-full h-[130px] object-cover rounded-xl' alt={`Car Image ${index}`} />
                    </div>
                ))}
                {selectedFileList.map((file, index) => (
                    <div key={index} className='relative'>
                        <IoIosCloseCircleOutline 
                            className='absolute m-2 text-lg text-red-500' 
                            onClick={() => onImageRemove(file)} 
                        />
                        <img src={URL.createObjectURL(file)} className='w-full h-[130px] object-cover rounded-xl' alt={`Selected Image ${index}`} />
                    </div>
                ))}
                <label htmlFor='upload-images'>
                    <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
                        <h2 className='text-lg text-center text-primary'>+</h2>
                    </div>
                </label>
                <input type='file' multiple={true} id='upload-images' 
                    onChange={onFileSelected}
                    className='opacity-0' />
            </div>
        </div>
    );
}

export default UploadImages;
