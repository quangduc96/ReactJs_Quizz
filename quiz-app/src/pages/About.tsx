import decor from "../assets/quiz-bg-01.jpeg";
import logo from "../assets/logo.png";
import ava2 from "../assets/avatar-2.png";
import ava7 from "../assets/avatar-7.png";
import ava9 from "../assets/avatar-9.png";

function About() {
    return (
        <section>
            <h1 className="text-2xl font-semibold">About Page</h1>
            <div className="flex flex-row items-center">
                <div className="flex flex-col w-1/2 justify-start">
                    <div>
                        <p className="brand block text-2xl justify-start">
                            <img src={logo} alt="Logo" className="inline-block h-14 mr-2" />
                            Quizzes
                        </p>
                    </div>
                    <div>
                        <p className="flex-wrap justify-start items-center">
                            Quizzes is a platform for creating and managing quizzes
                        </p>
                    </div>
                </div>
                <div className="flex w-1/2 ">
                    <img src={decor} className="inline-block w-fit" alt="decor" />
                </div>
            </div>
            <p className="text-xl font-semibold mb-2">Our Team</p>
            <div className="flex flex-row items-center">
                <div className="flex-col border border-gray-500 p-4 m-1 rounded-md">
                    <img src={ava2} className="inline-block w-fit" alt="ava2" />
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm">CEO</p>
                </div>
                <div className="flex-col border border-gray-500 p-4 m-1 rounded-md">
                    <img src={ava7} className="inline-block w-fit" alt="ava2" />
                    <p className="font-semibold">Jane Doe</p>
                    <p className="text-sm">CTO</p>
                </div>
                <div className="flex-col border border-gray-500 p-4 m-1 rounded-md">
                    <img src={ava9} className="inline-block w-fit" alt="ava2" />
                    <p className="font-semibold">John Smith</p>
                    <p className="text-sm">CFO</p>
                </div>
            </div>
        </section>
    );
}

export default About;
