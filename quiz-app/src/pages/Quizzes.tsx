import ava2 from "../assets/map.jpeg";
import ava7 from "../assets/inventions.png";
import ava9 from "../assets/capitals.jpeg";

function Quizzes() {
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // searchData();
    };

    return (
        <section>
            <h1 className="text-2xl font-bold">Take a Quiz</h1>
            <form onSubmit={handleSubmit} className="mb-10">
                <div className="inline-flex items-center w-full">
                    <input
                        type="text"
                        id="number"
                        name="number"
                        className="border p-2 rounded-l w-11/12"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-r"
                    >
                        Take Quick
                    </button>
                </div>
            </form>
            <div className="mt-50 mb-5">

                <label className="text-2xl font-bold">QUIZZES</label>
            </div>
            <div className="flex flex-row items-center">
                <div className="flex-col border border-gray-500 p-4 m-1 rounded-lg w-1/3">
                    <img src={ava2} className="inline-block " alt="ava2" />
                    <div className="flex-row">
                        <p className="inline-block font-semibold text-left w-5/6">
                            Capitals of Country
                        </p>
                        <p className="inline-block text-right w-1/6">15m</p>
                    </div>
                    <p className="flex-wrap justify-start text-left">
                        Test your knowledge about capitals
                    </p>
                    <button
                        className="p-2 px-4 bg-blue-500 rounded-md text-white mt-4  w-3/4"
                    // onClick={gotoQuizzes}
                    >
                        Start
                    </button>
                </div>
                <div className="flex-col border border-gray-500 p-4 m-1 rounded-lg w-1/3">
                    <img src={ava7} className="inline-block w-fit" alt="ava2" />
                    <div className="flex-row">
                        <p className="inline-block font-semibold text-left w-5/6">
                            Capitals of Country
                        </p>
                        <p className="inline-block text-right w-1/6">15m</p>
                    </div>
                    <p className="flex-wrap justify-start text-left">
                        Test your knowledge about capitals
                    </p>
                    <button
                        className="p-2 px-4 bg-blue-500 rounded-md text-white mt-4  w-3/4"
                    // onClick={gotoQuizzes}
                    >
                        Start
                    </button>
                </div>
                <div className="flex-col border border-gray-500 p-4 m-1 rounded-lg w-1/3">
                    <img src={ava9} className="inline-block w-fit" alt="ava2" />
                    <div className="flex-row">
                        <p className="inline-block font-semibold text-left w-5/6">
                            Capitals of Country
                        </p>
                        <p className="inline-block text-right w-1/6">15m</p>
                    </div>
                    <p className="flex-wrap justify-start text-left">
                        Test your knowledge about capitals
                    </p>
                    <button
                        className="p-2 px-4 bg-blue-500 rounded-md text-white w-3/4 mt-4 "
                    // onClick={gotoQuizzes}
                    >
                        Start
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Quizzes;
