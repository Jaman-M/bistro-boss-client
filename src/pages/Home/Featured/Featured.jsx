import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg';
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed bg-slate-500 bg-opacity-60 text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading='Featured item'></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2023</p>
                    <p className="uppercase"> Where can i get some</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod est ullam corporis error. Voluptas impedit quo vel fugiat velit eligendi recusandae culpa odio aliquid natus illo atque, in, et perspiciatis ex facilis sit iure nihil minus. Explicabo corrupti reiciendis commodi quas maiores quae dolorum, impedit iste, neque quisquam delectus!
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;