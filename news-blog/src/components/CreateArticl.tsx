import { useState } from "react";
import Raect from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import ImageUploading from 'react-images-uploading';
import { blogServise } from "../api/blogService";


export const CreateArticle: React.FC = () => {


    const [images, setImages] = useState([]);


    const { register, handleSubmit, watch, formState: { errors, touchedFields }, } = useForm()



    const onSubmit: SubmitHandler<any> = (data) => {

        blogServise.createArticl({
            img: data.image,
            text: data.text,
            title: data.title,

        })


    }



    const onChange = (imageList: any, addUpdateIndex: any) => {

        setImages(imageList);
    };

    return <div className="wrapper">

        <div className="mb-3 form-check">
            <label className="form-label">Image</label>
            <ImageUploading
                value={images}
                onChange={onChange}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button className="btn btn-secondary"
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                        </button>
                        &nbsp;
                        <button className="btn btn-secondary" onClick={onImageRemoveAll}>Remove all images</button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <button className="btn btn-secondary" onClick={() => onImageUpdate(index)}>Update</button>
                                    <button className="btn btn-secondary" onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )
                }
            </ImageUploading>
        </div>
        <div className="mb-3 form-check">
            <label className="form-label" >Text</label>
            <input type="text" className="form-control" {...register("text", { required: true })} />
            {touchedFields.text && errors.text && <div className="form-text text-danger">Text is required fill it up please</div>}
        </div>


        <div className="mb-3 form-check">
            <label className="form-check-label"  >Title</label>
            <input className="form-control"{...register("title", { required: true })} />
            {touchedFields.title && errors.title && <div className="form-text text-danger">title is required fill it up please</div>}

        </div>
        <div className="mb-3 form-check">
            <label className="form-check-label" >Description</label>
            <input className="form-control" {...register("description")} />
            {touchedFields.description && errors.description && <div className="form-text text-danger">description is required fill it up please</div>}

        </div>
        <button onClick={handleSubmit(onSubmit)} type="button" className="btn btn-primary">Submit</button>
    </div>
}
