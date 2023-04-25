

const Projects = () => {
    return(
        <section className="h-screen flex items-center flex-col text-white snap-center">
            <h2 className="text-grey text-xl tracking-[8px]  pt-14 mb-[80px]">PROJECTS</h2>
            <div className="w-[80%] flex overflow-x-scroll  snap-x snap-mandatory">
                <div className=" px-4 py-8 border-grey border-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] min-w-full snap-center">
                    <div className="flex justify-center mb-4">
                        <img src="https://img.icons8.com/color/65/null/shopee.png" alt="e-commerce icon" />
                    </div>
                    <div>
                        <h3 className="text-[22px]">E-Commerce Website</h3>
                        <p className="text-[18px]">Capstone</p>
                        <div className="flex w-[40%] justify-between my-2">
                            <img src="https://img.icons8.com/color/24/null/react-native.png" alt="React Js" />
                            <img src="https://img.icons8.com/color/24/null/sass.png" alt="Sass" />
                            <img src="https://img.icons8.com/color/24/null/firebase.png" alt="Firebase" />
                        </div>
                        <ul className="list-disc text-sm opacity-80 ml-5">
                            <li>Designed and developed a clean and modern e-commerce website using React.js, Sass, Firebase</li>
                            <li>Used best practices structure and write clean and efficient code</li>
                            <li>Deployed using Netlify</li>
                        </ul>
                    </div>
                </div>
                <div className=" px-4 py-8 border-grey border-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] min-w-full snap-center">
                    <div className="flex justify-center mb-4">
                        <img src="https://img.icons8.com/color/65/null/shopee.png" alt="e-commerce icon" />
                    </div>
                    <div>
                        <h3 className="text-[22px]">E-Commerce Website</h3>
                        <p className="text-[18px]">Capstone</p>
                        <div className="flex w-[40%] justify-between my-2">
                            <img src="https://img.icons8.com/color/24/null/react-native.png" alt="React Js" />
                            <img src="https://img.icons8.com/color/24/null/sass.png" alt="Sass" />
                            <img src="https://img.icons8.com/color/24/null/firebase.png" alt="Firebase" />
                        </div>
                        <ul className="list-disc text-sm opacity-80 ml-5">
                            <li>Designed and developed a clean and modern e-commerce website using React.js, Sass, Firebase</li>
                            <li>Used best practices structure and write clean and efficient code</li>
                            <li>Deployed using Netlify</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;