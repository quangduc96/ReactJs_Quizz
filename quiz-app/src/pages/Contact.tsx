import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";


function Contact() {
    const { name, age } = useParams();

    useEffect(() => {
        console.log(name, age);
    }, [name, age]);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <section>
            <h1 className="text-2xl font-bold">Contact</h1>
            <div>
                <div className="inline-block card w-1/2 p-5">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="card-header p-3 flex flex-col items-start">
                            <h2 className="text-xl font-semibold text-left">Feedback</h2>
                            <p className="flex flex-wrap text-sm text-gray-600 text-left">Please fill out the form below to send us your feedback. We will get back to you as soon as posible. </p>
                        </div>
                        <div className="card-body p-3  flex flex-wrap">
                            <div className="form-group block w-full ">
                                <label htmlFor="name" className="block mb-1 text-left">Name</label>
                                <input type="text" id="name" name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    className="py-3 border border-slate-300 rounded-sm w-full" />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-red-500">{typeof formik.errors.name === 'string' ? formik.errors.name : ''}</div>
                                ) : null}
                            </div>
                            <div className="form-group w-full ">
                                <label htmlFor="email" className="block mb-1 text-left">Email</label>
                                <input type="number" id="email" name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className="py-3 border border-slate-300 rounded-sm w-full" />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-500">{typeof formik.errors.email === 'string' ? formik.errors.email : ''}</div>
                                ) : null}
                            </div>
                            <div className="form-group w-full ">
                                <label htmlFor="message" className="block mb-1 text-left">Message</label>
                                <input type="number" id="message" name="message"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                    className="py-3 border border-slate-300 rounded-sm w-full" />
                                {formik.touched.message && formik.errors.message ? (
                                    <div className="text-red-500">{typeof formik.errors.message === 'string' ? formik.errors.message : ''}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="card-footer p-3 flex justify-between">
                            <button type="button" className="p-2 px-4 bg-blue-500 hover:bg-slate-300 rounded-md text-white" >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
                <div className="inline-block card w-1/2 p-5 items-start align-top">
                    <div className="card-header flex flex-col items-start">
                        <h2 className="text-xl font-bold text-left">Our Information</h2>
                        <p className="flex flex-wrap text-sm text-gray-600 text-left">We are always here to help you. You can contact us through the following ways.</p>

                    </div>
                    <ul className="card-body flex flex-col text-left">
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Mail: example@example.com
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Phone: +1-234-567-890
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Location: 123 Example St, City,
                        </li>
                        <li className="mt-4">
                            <FontAwesomeIcon icon={faTiktok} className="mr-2 fa-2x" />
                            <FontAwesomeIcon icon={faFacebook} className="mr-2 fa-2x" />
                            <FontAwesomeIcon icon={faYoutube} className="mr-2 fa-2x" />
                            <FontAwesomeIcon icon={faLinkedin} className="mr-2 fa-2x" />

                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contact;