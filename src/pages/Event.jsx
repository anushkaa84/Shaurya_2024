// App.js
import ReactDOM from 'react-dom';
import logo from '../assets/shaurya.png';

function Event() {
    return (
        <div className="container mx-auto bg-orange-200">
            <div className="relative">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmk6_aF93IuKJgww9H3E1yWzLTNv-bnbUcnA&s" alt="events-heading" className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl text-orange-200 text-center" style={{ fontFamily: "Times New Roman, Times, serif" }}>
            EVENTS
        </h1>
        
</div>


           </div>
                
            <div className="flex items-center justify-center my-8">
                <img src={logo} alt="Logo" className="w-33 h-36 object-cover mr-4" />
                <h2 className="text-3xl font-bold font-serif">GLIMPSES OF 2024 EVENTS</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 px-12">
                <div className="flex flex-col md:flex-row items-center">
                    <img src="\sports day.jpg" alt="National Sports Day poster" className="w-80 h-80 object-cover rounded-sm" />
                    <p className="mt-4 md:mt-0 md:ml-4 text-center md:text-left flex-1 text-lg sm:text-xl px-4 sm:px-8  md:px-12  pr-6 sm:pr-10 md:pr-20">
                        The <b className='text-2xl font-serif'>SPORTS DAY</b> at NIT Raipur, organized by <span className='text-orange-700 font-bold'>SHAURYA - The Sports Committee</span>, is a vibrant celebration of athleticism and team spirit. The event kicks off with a grand inauguration and march past, followed by a variety of competitions including track and field events, team sports like football and basketball, and fun activities such as sack races and tug-of-war. The day ends with a closing ceremony where winners are honored, making it a memorable occasion filled with energy, unity, and sportsmanship.
                    </p>
                </div>


                <div className="flex flex-wrap justify-center py-8">
                    <img src="\dodge ball.jpg" alt="Tug of War illustration" className="w-90 h-80 object-cover m-2 hover:scale-105 duration-300 mx-3 hover:shadow-md hover:shadow-black rounded-sm" />
                    <img src="\tow.png" alt="Engineer's Day Sports Events poster" className="w-80 h-80 object-cover m-2 hover:scale-105 duration-300 mx-3 hover:shadow-md hover:shadow-black rounded-sm" />
                </div>


                <div className="flex flex-col md:flex-row items-center py-12">
                    <img src="\engn day.jpg" alt="Engineers day poster" className="w-80 h-90 object-cover rounded-sm" />
                    <p className="mt-4 md:mt-0 md:ml-4 text-center md:text-left flex-1 text-lg sm:text-xl px-4 sm:px-8 md:px-12 pr-6 sm:pr-10 md:pr-20">
    <b className='text-xl sm:text-2xl font-serif'>ENGINEER'S DAY</b>, is an additional event organized by <span className='text-orange-700 font-bold'>SHAURYA</span>, showcasing the diverse range of activities and competitions that NIT Raipur offers. The event includes various sports and cultural activities, promoting a spirit of unity and enthusiasm among the students. It is a day filled with excitement, teamwork, and memorable experiences, highlighting the vibrant campus life at NIT Raipur.Overall, the event successfully celebrated the synergy between engineering and sports, inspiring participants to appreciate the innovation that drives both fields forward.
</p>

                </div>


                <div className="flex flex-wrap justify-center py-12">
                    <img src="https://i.pinimg.com/564x/ea/af/d2/eaafd241616fa8abc6e5a4cebca4e016.jpg" alt="Muscular arm illustration" className="w-80 h-80 object-cover m-2 hover:scale-105 duration-300 hover:shadow-md hover:shadow-black rounded-md" />
                    <img src="\mchairs.jpg" alt="Musical note illustration" className="w-80 h-80 object-cover m-2 hover:scale-105 duration-300 hover:shadow-md hover:shadow-black rounded-md" />
                    <img src="https://i.pinimg.com/564x/c9/d5/44/c9d54483c7e242c9e817cb77d06bb99a.jpg" alt="Fight illustration" className="w-80 h-80 object-cover m-2 hover:scale-105 duration-300 hover:shadow-md hover:shadow-black rounded-md" />
                </div>


                <div className="flex flex-col md:flex-row items-center mt-8 py-12">
                    <img src="\samar.jpg" alt="Additional Event poster" className="w-80 h-90 object-cover rounded-sm" />
                    <p className="mt-4 md:mt-0 md:ml-4 text-center md:text-left flex-1 text-lg sm:text-xl px-4 sm:px-8 md:px-12 pr-6 sm:pr-10 md:pr-20">
    <b className='text-xl sm:text-2xl font-serif'>SAMAR</b> organized by <span className='text-orange-700 font-bold'>SHAURYA</span>, the sports committee of NIT Raipur, is the institute's premier sports festival, bringing together students to compete in various sports like cricket, football, basketball, volleyball, and athletics. It promotes sportsmanship, teamwork, and fitness while fostering a vibrant atmosphere of competition and camaraderie. With enthusiastic participation and enthusiastic participation, Samar is a celebration of athletic passion and perseverance at NIT Raipur. It stands as a testament to the vibrant sports culture at NIT Raipur, uniting students through competition, camaraderie, and a shared passion for athletics.
</p>

                </div>
            </div>

            <div className="flex flex-wrap justify-center mt-8">
                <img src="\ball.jpg" alt="cricketball illustration" className="w-80 h-80 object-cover m-2 hover:scale-105 duration-300 hover:shadow-md hover:shadow-black rounded-md" />
                <img src="\9.jpg" alt="basketball illustration" className="w-80 h-80 object-cover m-2 hover:scale-105 duration-300 hover:shadow-md hover:shadow-black rounded-md" />
                <img src="https://i.pinimg.com/564x/64/c1/37/64c1373463221d705b308bce2dc0669c.jpg" alt=" volleyball illustration" className="w-80 h-80 object-cover m-2 hover:scale-105 duration-300 hover:shadow-md hover:shadow-black rounded-md" />
            </div>

            <div className="flex flex-wrap justify-center mt-8">
                <img src="\11.jpg" alt="Running athlete illustration" className="w-80 h-80 object-cover m-2 hover:scale-105 duration-300 hover:shadow-md hover:shadow-black rounded-md" />
                <img src="\10.jpg" alt="Horse riding illustration" className="w-80 h-80 object-cover m-2 hover:scale-105 duration-300 hover:shadow-md hover:shadow-black rounded-md" />
            </div>
        </div>
    );
}
export default Event;

