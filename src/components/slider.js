/** @format */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "./pics/sde.png";

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Slider() {
	return (
		<div id='slider' className='container  h-1/2 my-6'>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				cssMode={true}
				navigation={true}
				pagination={true}
				mousewheel={true}
				keyboard={true}
				autoplay={{
					delay: 500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
				className='mySwiper  rounded-lg'>
				<SwiperSlide>
					<img
						className='object-cover h-96 w-full'
						src={img1}
						alt='Slider-1'
						width='100%'
						height='100%'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='object-cover h-96 w-full'
						src={img1}
						alt='Slider-1'
						width='100%'
						height='100%'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='object-cover h-96 w-full'
						src={img1}
						alt='Slider-1'
						width='100%'
						height='100%'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='object-cover h-96 w-full'
						src={img1}
						alt='Slider-1'
						width='100%'
						height='100%'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
