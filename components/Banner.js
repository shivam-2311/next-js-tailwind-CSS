import Image from 'next/image'
import resort from '../public/images/resort.jpg';
function Banner() {
    return (
        <div className="relative h-[300px] 
        sm:h-[450px] md:h-[500px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
        >
            <Image src={resort} layout='fill' objectFit='cover' />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='sm:text-lg lg:text-5xl text-green-500 text-center font-serif mb-4 '>Welcome To the Royal Palace...</p>
                <button className='text-purple-500 bg-white px-10 py-4 shadow-md
                rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Explore</button>
            </div>
        </div>
    )
}

export default Banner
