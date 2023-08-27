import './Home.css'
import Image from 'next/image'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';

export default function page() {
  return (
      <>
          <header className=" fixed top-0 left-0 w-full bg-[#010a5e] py-5">
              <nav className=" flex justify-between mx-[3em] items-center">
                  <div className="logo uppercase font-bold text-2xl">
                    <a href="">Bur<span className="text-yellow-400 ">Ger</span></a>
                  </div>
                  <ul className="lg:flex hidden">
                      <li><a href="">Home</a></li>
                      <li><a href="">About Us</a></li>
                      <li><a href="">Menu</a></li>
                      <li><a href="">Review</a></li>
                      <li><a href="">Contact Us</a></li>
                  </ul>
                  <ul className='lg:hidden'>
                      <li><MenuIcon className='text-4xl cursor-pointer'/></li>
                  </ul>
              </nav>
          </header>
          
          <section className='bg-[#010a5e] lg:h-[100vh] flex justify-center'>
                <div className="luar lg:flex lg:flex-row flex flex-col items-center lg:mt-[2em] mt-[8em] w-[70em]">
                    <Image src="/img/home-image.png" alt="Burger Logo" width={200} height={1} loading='lazy'/>
                    <div className="teks_1  mt-[2em]">
                      <p className='text-1 font-extrabold'>HAPPY TUMMY WITH  <span className='text-red-600'>TASTY</span> BURGER</p>
                      <p className='text-justify mx-6 mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, quasi? Iure debitis ducimus voluptatibus rerum adipisci consequuntur sint alias delectus labore quo eligendi vitae blanditiis libero harum, error quaerat facilis nihil ex nesciunt voluptates consequatur quas. Illo ratione consequuntur earum expedita neque ipsam facere vero autem nobis est? Facere dolor asperiores, culpa enim ullam dolorum voluptatum repellat voluptas aut, optio quas error repudiandae officiis. Aspernatur quisquam, ullam voluptate aliquam ab sequi, aperiam praesentium ut id aliquid quas! Obcaecati totam odit quaerat debitis, est porro! Voluptatum, ducimus aut porro a possimus iure est. Repudiandae nam magnam fugit quas repellat quia ullam.</p>
                      <div className='Icons mt-4 flex-wrap flex lg:justify-start justify-center lg:mt-6 items-center '>
                          <div className="icon_name">
                              <RestaurantMenuIcon className='lg:text-[60px] text-green-600 text-[70px] ' /> <h4>Delicious</h4>
                          </div>
                          <div className="icon_name">
                            <WaterDropIcon className='lg:text-[60px] text-blue-500 text-[70px]' /> <h4>Fresh</h4>
                          </div>
                          <div className="icon_name">
                            <FavoriteIcon className='lg:text-[60px] text-red-600 text-[70px]' /> <h4>Lover</h4>
                          </div>
                          
                          <button className='bg-yellow-400 rounded-lg mt-5 text-black px-10 font-bold h-[60px] hover:bg-yellow-500'> Learn More!!</button>

                        </div>

                    </div>
                </div>
          </section>

      
      </>
  )
}
