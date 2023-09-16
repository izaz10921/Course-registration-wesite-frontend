import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const Home = () => {
    const [courseCardData, setCourseCardData] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [remainingCreditHour, setRemainingCredit] = useState(20);
    const [totalPrice,setTotalPrice] =useState(0);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setCourseCardData(data));
    }, []);
    
    const handleSelectCourse = (courseData) => {

        const isAlreadyAdded = selectCourse.find((item) => item.id == courseData.id);

        let credit = courseData.course_credit_hour;
        let price = courseData.course_price;
       
        let remainingCreditHour=20;

        if (isAlreadyAdded) {
            toast.error('Course is already added.');
            return;
          }

        else {
            selectCourse.forEach((item) => {
                
                credit = credit + item.course_credit_hour;
                price =price + item.course_price;
                
            });
            remainingCreditHour =  20-credit ;



            if (credit > 20 && remainingCreditHour < 0) {
                
                toast.error('Total credit limit is over.');
                toast.error('Remaining credit limit is over.');

                return;
                    
                    
               

            } else {
                setTotalCredit(credit);
                setRemainingCredit(remainingCreditHour);
                setTotalPrice(price);

                setSelectCourse([...selectCourse, courseData]);
            }


        }





    };

    return (

        <div className="mx-[60px] ">
            <h2 className="text-[32px] font-bold text-center pt-[50px]">Course Registration</h2>
            <div className="flex gap-6 mt-10 pb-20  ">
                <div className="grid grid-cols-3 gap-10     w-3/4" >

                    {courseCardData.map((courseData) => (
                        <div className="  bg-white rounded-[12px] shadow-lg   " key={courseData.id}>
                            <div>
                                <img className="w-[280px] h-[144px] m-4" src={courseData.course_img} alt="" />
                            </div>
                            <h4 className="ml-4 text-[18px] font-semibold mb-4   ">{courseData.course_title}</h4>
                            <p className="text-[14px] mx-4 font-normal text-gray-400       ">{courseData.course_description}</p>
                            <div className="flex  justify-between mx-4 mt-4 mb-4">
                                <div>$ Price:{courseData.course_price}</div>
                                <div>Credit Hour:{courseData.course_credit_hour}hr</div>
                            </div>

                            <button onClick={() => handleSelectCourse(courseData)} className="bg-blue-500 text-white text-[18px] font-normal px-[112px] m-4 mx-4 py-[9px] rounded-md  ">Select</button>





                        </div>
                    ))}

                </div>
                <div className="w-1/4  px-5">
                    <Cart

                        remainingCreditHour={remainingCreditHour}
                        totalCredit={totalCredit}
                        selectCourse={selectCourse}
                        totalPrice={totalPrice}

                    >

                    </Cart>
                </div>
            </div>
            <ToastContainer />


        </div>
        
    );
};

export default Home;