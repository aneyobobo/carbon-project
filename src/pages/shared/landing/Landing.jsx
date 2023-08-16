import Button from "../../../components/Button/Button";
import Landingpage from '../../../assets/landingpage.jpg'
import Navbar from "../../../components/Navbar";


const Landing = () => {
  return (
    <>

    <Navbar/>

        <div className="flex   ">
          <div className="flex  justify-center items-center w-[50%] sm:w-[100%] md:w-[100%] mt-[20rem]  ">
            <div className="flex flex-col ">
              <h1 className="text-[5rem] sm:text-[3rem] md:text-[3.5rem] text-[#2b007a] font-bold  ">
                Digital Banking For All
              </h1>
              <h2 className="text-[5rem]  sm:text-[3rem] md:text-[3rem] text-white  font-semibold  bg-green-500 rounded-lg w-[22rem] md:w-[13rem] mt-[1rem] ">
                Lifestyles
              </h2>
              <p className=" text-[2rem] sm:text-[1.5rem]  text-gray-700 w-[40rem] sm:w-[30rem] mt-[3rem] my-10 ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien. 
              </p>
              <Button 
                text="Get Started"
                bgclr="bg-[#4300C2] text-white  text-2xl px-[4rem] py-[1rem] rounded-md w-[17rem]"
              />
            </div>
          </div>
          
            <img src={Landingpage} alt="" className="max-h-screen md:h-screen w-[50%] sm:hidden "/>
          
        </div>
       
        

      
    
      
      

    </>
  );
};

export default Landing;
