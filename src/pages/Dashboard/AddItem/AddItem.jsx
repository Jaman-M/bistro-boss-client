import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const AddItem = () => {
    return (
        <div className='w-5/6'>
            <SectionTitle subHeading="What's new" heading="Add an Item"></SectionTitle>
            <form >
                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    </label>
                </div>
                {/* category start from here */}
                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Category*</span>

                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>

                    </label>
                </div>
                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Pricee*</span>

                        </div>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    </label>
                </div>
                <div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text font-semibold">Recipe Details</span>

                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                    </label>
                </div>
                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Item Image*</span>
                            
                        </div>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        
                    </label>
                </div>
                <input className='btn btn-warning mt-4' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;