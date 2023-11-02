import React from 'react';
import aboutImg from '../assets/icons/mobile-login.png';
import maecenas from '../assets/icons/Tlogo.png';

import company1 from '/src/assets/company1.png';
import company2 from '/src/assets/company2.png';
import company3 from '/src/assets/company3.png';
import company4 from '/src/assets/company4.png';
import company5 from '/src/assets/company5.png';
import company6 from '/src/assets/company6.png';

const Product = () => {
    return (
        <div >
           <div>
            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                            <h2 className='text-4xl text-neutralD_Grey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                            <p className='md:3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                            <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* company stats */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img src={maecenas} alt="" />
                    </div>

                    {/* stats */}
                    <div className='md:w-2/3 mx-auto' id='testimonial'>
                    <div >
                        <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere sint, illum nam voluptatum explicabo dolor 
                            consequuntur natus praesentium, atque possimus tempore a unde consequatur quo. Eum, dolores architecto 
                            tenetur ullam impedit quam molestias voluptatem similique, voluptates minima, quasi numquam explicabo 
                            modi amet ea asperiores fugit nesciunt consectetur deserunt
                            rem! Nesciunt unde quasi fugiat error dicta praesentium molestiae accusamus dolor qui.</p>  
                            <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>  
                            <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>
                            <div>
                                <div className='flex items-center flex-wrap gap-10'>
                                    <img src={company1} alt=""className='cursor-pointer'/>
                                    <img src={company2} alt=""className='cursor-pointer'/>
                                    <img src={company3} alt=""className='cursor-pointer'/>
                                    <img src={company4} alt=""className='cursor-pointer'/>
                                    <img src={company5} alt=""className='cursor-pointer'/>
                                    <img src={company6} alt=""className='cursor-pointer'/>
                                    <div className='flex items-center gap-8'>
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" className='inline-block' viewBox="0 0 17 11" fill="none">
<path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="#4CAF4F" stroke-width="1.5" stroke-linecap="round"/>
</svg></a> 
                                    </div>
                                </div>
                            </div>
                    </div>   
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Product;