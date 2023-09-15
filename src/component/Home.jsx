import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
    const [courseCardData,setCourseCardData]=useState([]);

    useEffect(()=> {
        fetch("../../public/data.json")
        .then((res)=> res.json())
        .then((data)=> setCourseCardData(data) );
    },[]);

    return (

        <div className="mx-[60px] ">
            <h2 className="text-[32px] font-bold text-center pt-[50px]">Course Registration</h2>
            <div className="flex gap-6 mt-10 pb-20  "> 
                <div className="grid grid-cols-3 gap-10     w-3/4" >
                    
                    {courseCardData.map((courseData)=>(
                        <div className="  bg-white rounded-[12px] shadow-lg   " key={courseData.id}>
                            <div>
                                <img className="w-[280px] h-[144px] m-4" src={courseData.course_img} alt="" />
                            </div>
                            <h4 className="ml-4 text-[18px] font-semibold mb-4   ">{courseData.course_title}</h4>
                            <p className="text-[14px] mx-4 font-normal text-gray-400       ">{courseData.course_description}</p>
                            <div className="flex  justify-between mx-4 mt-4 mb-4">
                                <div>Price:{courseData.course_price}</div>
                                <div>Credit Hour:{courseData.course_credit_hour}</div>
                            </div>

                            <button className="bg-blue-500 text-white text-[18px] font-normal px-[112px] m-4 mx-4 py-[9px] rounded-md  ">Select</button>
        




                        </div>
                    ))}

                </div>
                <div className="w-1/4  px-5">
                    <div className="p-4 border-b-2 bg-white ">
                        <h1 className="text-[18px] text-blue-500 font-medium ">Credit Hour Remaining </h1>
                    </div>
                    <div className="p-4 border-b-2  bg-white ">
                        <h1 className="text-[18px] text-black
                         font-bold ">Course</h1>
                    </div>
                    <div className="px-4  pt-4  bg-white ">
                        <h1 className="text-[16px] font-normal">Total Credit Hour :</h1>
                        <br />
                        <hr/>
                    </div>
                    <div className="p-4  bg-white ">
                        <h1 className="text-[16px] font-normal">Total Price : </h1>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;