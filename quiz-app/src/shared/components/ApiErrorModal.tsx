import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Status401 = () => (
    <div>
        <h4>Error 401: Unauthorized</h4>
        <p>You need to log in to access this resource.</p>
    </div>
);

const Status403 = () => (
    <div>
        <h4>Error 403: Forbidden</h4>
        <p>You don't have permission to access this resource.</p>
    </div>
);

const Status404 = () => (
    <div>
        <h4>Error 404: Not Found</h4>
        <p>The resource you are looking for could not be found.</p>
    </div>
);

function apiErrorModal(status: string | number) {
    switch (status) {
        case 401:
            toast.error(<Status401 />, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break;
        case 403:
            toast.error(<Status403 />, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break;
        case 404:
            toast.error(<Status404 />, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break;
        default:
            toast.error("An unexpected error occurred.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break;
    }
}

export default apiErrorModal;
