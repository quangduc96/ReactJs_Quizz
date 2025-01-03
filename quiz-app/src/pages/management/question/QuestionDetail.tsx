import { faEraser, faRotateLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import { QuestionService } from "../../../services/question.service";
import { QuestionType } from "../../../enums/question-type";
import { EnumHelper } from "../../../helpers/enum.helper";
import { QuestionViewModel } from "../../../view-models/question/question.view-model";

function QuestionDetail({ item, onCancel }: { item: QuestionViewModel, onCancel: any }) {
    const formik = useFormik({
        initialValues: {
            content: item?.content || '',
            type: item?.questionType || QuestionType.SingleChoice,
            isActive: item?.isActive || true,
            numberOfAnswers: item?.numberOfAnswers || 0,
        },

        validationSchema: Yup.object({
            content: Yup.string()
                .required('Content is required')
                .min(5, 'Content must be at least 5 characters long'),
            type: Yup.mixed<QuestionType>()
                .oneOf(Object.values(QuestionType) as QuestionType[], 'Invalid question type')
                .required('Question type is required'),
            isActive: Yup.boolean().required('Status is required'),
            numberOfAnswers: Yup.number()
                .required('Number of answers is required')
                .min(1, 'There must be at least one answer')
        }),



        onSubmit: async (values) => {
            let response: any;
            // Convert string to number
            if (item) {
                response = await QuestionService.update(item.id, values);
            } else {
                response = await QuestionService.create(values);
            }

            if (response) {
                onCancel();
            } else {
                console.error('Error:', response);
            }
        }
    });

    return (
        <div></div>
        // <div className="w-full mb-64">
        //     {/* Detail */}
        //     <div className="card border border-slate-300 rounded-md">
        //         <div className="card-header p-3">
        //             <h2 className="text-xl font-semibold">{item ? "Edit" : "Create"} Room</h2>
        //         </div>
        //         <form onSubmit={formik.handleSubmit}>
        //             <div className="card-body p-3 border-y border-slate-300 flex flex-wrap">
        //                 <div className="form-group w-1/2 p-2">
        //                     <label htmlFor="number" className="block mb-3">Number</label>
        //                     <input type="text" id="number" name="number"
        //                         onChange={formik.handleChange}
        //                         onBlur={formik.handleBlur}
        //                         value={formik.values.number}
        //                         className="p-2 border border-slate-300 rounded-sm w-full" />
        //                     {formik.touched.number && formik.errors.number ? (
        //                         <div className="text-red-500">{typeof formik.errors.number === 'string' ? formik.errors.number : ''}</div>
        //                     ) : null}
        //                 </div>
        //                 <div className="form-group w-1/2 p-2">
        //                     <label htmlFor="price" className="block mb-3">Price</label>
        //                     <input type="number" id="price" name="pricePerNight"
        //                         onChange={formik.handleChange}
        //                         onBlur={formik.handleBlur}
        //                         value={formik.values.pricePerNight}
        //                         className="p-2 border border-slate-300 rounded-sm w-full" />
        //                     {formik.touched.pricePerNight && formik.errors.pricePerNight ? (
        //                         <div className="text-red-500">{typeof formik.errors.pricePerNight === 'string' ? formik.errors.pricePerNight : ''}</div>
        //                     ) : null}
        //                 </div>

        //                 <div className="form-group w-1/2 p-2">
        //                     <label htmlFor="type" className="block mb-3">Type</label>
        //                     <select id="type" name="type" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.type} className="p-2 border border-slate-300 rounded-sm w-full">
        //                         {EnumHelper.convertEnumToArray(RoomType).map((type) => (
        //                             <option key={type.key} value={type.key}>{type.value}</option>
        //                         ))}
        //                     </select>
        //                     {formik.touched.type && formik.errors.type ? (
        //                         <div className="text-red-500">{typeof formik.errors.type === 'string' ? formik.errors.type : ''}</div>
        //                     ) : null}
        //                 </div>

        //                 <div className="form-group w-1/2 p-2">
        //                     <label htmlFor="status" className="block mb-3">Status</label>
        //                     <select id="status" name="status" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.status} className="p-2 border border-slate-300 rounded-sm w-full">
        //                         {EnumHelper.convertEnumToArray(RoomStatus).map((status) => (
        //                             <option key={status.key} value={status.key}>{status.value}</option>
        //                         ))}
        //                     </select>
        //                     {formik.touched.status && formik.errors.status ? (
        //                         <div className="text-red-500">{typeof formik.errors.status === 'string' ? formik.errors.status : ''}</div>
        //                     ) : null}
        //                 </div>

        //                 <div className="form-group w-1/2 p-2">
        //                     <label htmlFor="capacity" className="block mb-3">Capacity</label>
        //                     <input type="number" id="capacity" name="capacity"
        //                         onChange={formik.handleChange}
        //                         onBlur={formik.handleBlur}
        //                         value={formik.values.capacity}
        //                         className="p-2 border border-slate-300 rounded-sm w-full" />
        //                     {formik.touched.capacity && formik.errors.capacity ? (
        //                         <div className="text-red-500">{typeof formik.errors.capacity === 'string' ? formik.errors.capacity : ''}</div>
        //                     ) : null}
        //                 </div>

        //                 <div className="form-group w-1/2 p-2">
        //                     <label htmlFor="isActive" className="block mb-3">Active</label>
        //                     <input type="checkbox" id="isActive" name="isActive"
        //                         onChange={formik.handleChange}
        //                         onBlur={formik.handleBlur}
        //                         checked={formik.values.isActive}
        //                         className="p-2 border border-slate-300 rounded-sm" />
        //                     {formik.touched.isActive && formik.errors.isActive ? (
        //                         <div className="text-red-500">{typeof formik.errors.isActive === 'string' ? formik.errors.isActive : ''}</div>
        //                     ) : null}
        //                 </div>
        //             </div>
        //             <div className="card-footer p-3 flex justify-between">
        //                 <button type="button" className="p-2 px-4 bg-slate-200 hover:bg-slate-300 rounded-full" onClick={onCancel}>
        //                     <FontAwesomeIcon icon={faRotateLeft} className="mr-2" /> Cancel
        //                 </button>
        //                 <div className="search-actions space-x-3">
        //                     <button type="reset" className="p-2 px-4 bg-slate-300 text-white hover:bg-slate-500 rounded-full" onClick={formik.handleReset}>
        //                         <FontAwesomeIcon icon={faEraser} className="mr-2" /> Clear
        //                     </button>
        //                     <button type="submit" className="p-2 px-4 bg-blue-500 text-white hover:bg-blue-700 rounded-full">
        //                         <FontAwesomeIcon icon={faSearch} className="mr-2" /> Save
        //                     </button>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </div>
    );
}

export default QuestionDetail;