import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";
import decor from "../assets/quiz-bg-01.jpeg";
import ava2 from "../assets/map.jpeg";
import ava7 from "../assets/inventions.png";
import ava9 from "../assets/capitals.jpeg";

const Home = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const gotoQuizzes = () => {
        navigate("/management/dashboard");
    };

    return (
        <section>
            <h1 className="text-2xl font-semibold">
                Welcome {isAuthenticated ? "Yes" : "No"}
            </h1>
            <div className="flex flex-row items-center">
                <div className="flex flex-col w-1/2 justify-start">
                    <div>
                        <p className="brand block text-2xl justify-start font-bold">
                            Welcome to Quizz App
                        </p>
                    </div>
                    <div className="mt-4">
                        <p className="flex-wrap justify-start text-left">
                            At Quizzes, we believe that learning can be both fun and
                            challenging. Whether you're a trivia buff, a student looking to
                            test your knowledge, or just someone who enjoys a good brain
                            teaser, our app has something for everyone.
                        </p>
                    </div>
                    <button
                        className="p-2 px-4 bg-blue-500 rounded-md text-white w-1/4 mt-4"
                        onClick={gotoQuizzes}
                    >
                        Take a Quiz
                    </button>
                </div>
                <div className="flex w-1/2 ">
                    <img src={decor} className="inline-block w-fit" alt="decor" />
                </div>
            </div>
            <p className="text-xl font-semibold mb-2">QUIZZES</p>
            <div className="flex flex-row items-center">
                <div className="flex-col border border-gray-500 p-4 m-1 rounded-md w-1/3">
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
                        onClick={gotoQuizzes}
                    >
                        Start
                    </button>
                </div>
                <div className="flex-col border border-gray-500 p-4 m-1 rounded-md w-1/3">
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
                        onClick={gotoQuizzes}
                    >
                        Start
                    </button>
                </div>
                <div className="flex-col border border-gray-500 p-4 m-1 rounded-md w-1/3">
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
                        onClick={gotoQuizzes}
                    >
                        Start
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
