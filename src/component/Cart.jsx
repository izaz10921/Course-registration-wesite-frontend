import PropTypes from 'prop-types';

const Cart = ({ selectCourse,totalCredit,remainingCreditHour,totalPrice }) => {
    return (
        <div >
            <div className="px-4  pt-4 bg-white shadow-lg rounded-t-lg   ">
                <h1 className="text-[18px] text-blue-500 font-medium ">Credit Hour Remaining {remainingCreditHour} hr </h1>
                <br />
                <hr />
            </div>
            <div className="px-4  pt-4  bg-white shadow-lg  ">
                <h1 className="text-[18px] text-black
                         font-bold ">Course Name</h1>

                {selectCourse.map((courseData) => (
                    
                        <li key={courseData.id} className='text-black  '>{courseData.course_title}</li>
                    
                ))}
                <br />
                <hr />
            </div>
            <div className="px-4  pt-4  bg-white shadow-lg  ">
                <h1 className="text-[16px] font-normal">Total Credit Hour :{totalCredit}</h1>
                <br />
                <hr />
            </div>
            <div className="p-4  bg-white shadow-lg rounded-b-lg  ">
                <h1 className="text-[16px] font-normal">Total Price :{totalPrice}USD </h1>
            </div>
        </div>
    );
};

Cart.propTypes = {
    selectCourse: PropTypes.object,
    totalCredit:PropTypes.object,
    remainingCreditHour:PropTypes.object,
    totalPrice:PropTypes.object
}


export default Cart;