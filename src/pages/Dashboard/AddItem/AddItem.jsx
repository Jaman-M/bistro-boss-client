import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form'

const AddItem = () => {
    // react-hook form start here
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    console.log(errors);
    // react-hook form start end
    return (
        <div className='w-5/6'>
            <SectionTitle subHeading="What's new" heading="Add an Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="form-control w-full my-4">
                        <div className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>

                        </div>
                        <input type="text" placeholder="Recipe Name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />

                    </label>
                </div>
                {/* category start from here */}
                <div className='flex my-4'>
                    <div className='grow'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold">Category*</span>

                            </div>
                            <select {...register("category", { required: true })} className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Salad</option>
                                <option>Drinks</option>
                                <option>Dessert</option>
                            </select>

                        </label>
                    </div>
                    <div className="divider "> </div>
                    <div className='grow'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text font-semibold">Pricee*</span>

                            </div>
                            <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                    </div>
                </div>
                <div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text font-semibold">Recipe Details</span>

                        </div>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                    </label>
                </div>
                <div className='mt-4'>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Item Image*</span>

                        </div>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />

                    </label>
                </div>
                <input className='btn btn-warning mt-4' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;