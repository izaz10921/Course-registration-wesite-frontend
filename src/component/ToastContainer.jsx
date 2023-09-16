import React from 'react';

const ToastContainer = () => {
    return (
        <div>
            toast('🦄 Wow so easy!', {
                position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
});
        </div>
    );
};

export default ToastContainer;