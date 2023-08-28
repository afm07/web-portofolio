import { Link } from "react-scroll";

const Nav = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };
    return (
        <div className="h-16 flex flex-row sticky items-center top-0 z-40 backgroundColors">
            <div id="left" className="order-1 ml-8 h-8 w-1/4 flex justify-between items-center cursor-pointer sm:w-2/4">
                <div className="flex items-center flex-1">
                    <div className="bg-blue-600 rounded-[22.5px]  h-[30px] w-[30px] sm:h-[20px] sm:w-[20px] sm:rounded-[50.5px] md:h-[20px] md:w-[20px] md:rounded-[50.5px] lg:h-[23px] lg:w-[23px] lg:rounded-[50.5px]" onClick={scrollToTop} />
                    <div className="text-white text-xl sm:text-sm md:text-base lg:text-base font-normal ml-2" onClick={scrollToTop}>afm-area</div>
                </div>
            </div>
            <div id="right" className="order-2 flex items-center justify-end gap-6 list-none mr-8 h-8 w-3/4 md:hidden sm:hidden">
                {/* menu-items */}
                <Link spy={true} to="About">
                    <li className="cursor-pointer text-white text-sm font-semibold hover:text-blue-dark">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Skills">
                    <li className="cursor-pointer text-white text-sm font-semibold hover:text-blue-dark">Skills</li>
                </Link>
                <Link spy={true} smooth={true} to="Experience">
                    <li className="cursor-pointer text-white text-sm font-semibold hover:text-blue-dark">Experience</li>
                </Link>
                <Link spy={true} smooth={true} to="Showcase">
                    <li className="cursor-pointer text-white text-sm font-semibold hover:text-blue-dark">Showcase</li>
                </Link>

                {/* right-icon */}
                <div className="h-[25px] w-[0.5px] bg-slate-600"></div>
                <div className="h-[20px] w-[20px] cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.9303 20.542C30.2703 19.732 29.2986 19.042 28.4836 19.402C26.8545 20.117 25.0943 20.4849 23.3152 20.482C16.3402 20.482 10.6868 14.9419 10.6868 8.10684C10.6842 5.79906 11.3399 3.53841 12.5768 1.59011C13.0501 0.84344 12.4818 -0.189903 11.6151 0.0300988C4.93338 1.73512 0 7.68851 0 14.7702C0 23.182 6.9584 30.0004 15.5435 30.0004C22.0436 30.0004 27.6103 26.092 29.9303 20.542Z" fill="#1F5FEA" />
                        <path d="M21.0184 0.171324C20.135 -0.418682 19.0817 0.634662 19.67 1.518L20.72 3.09302C21.146 3.73163 21.3733 4.48208 21.3733 5.24971C21.3733 6.01734 21.146 6.76778 20.72 7.4064L19.67 8.98141C19.0817 9.86475 20.1367 10.9181 21.02 10.3281L22.5934 9.27808C23.232 8.85213 23.9824 8.62482 24.7501 8.62482C25.5177 8.62482 26.2681 8.85213 26.9068 9.27808L28.4818 10.3281C29.3651 10.9181 30.4185 9.86475 29.8284 8.98141L28.7784 7.4064C28.3525 6.76778 28.1252 6.01734 28.1252 5.24971C28.1252 4.48208 28.3525 3.73163 28.7784 3.09302L29.8284 1.518C30.4185 0.634662 29.3651 -0.418682 28.4801 0.171324L26.9068 1.22133C26.2681 1.64729 25.5177 1.87459 24.7501 1.87459C23.9824 1.87459 23.232 1.64729 22.5934 1.22133L21.0184 0.171324Z" fill="#1F5FEA" />
                    </svg>
                </div>
                <div className="h-[23px] w-[22.43] cursor-pointer">
                    <svg className="fill-slate-400 dark:hover:fill-white hover:fill-slate-600" width="23" height="22.43" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 0C7.83125 0 0 7.83563 0 17.5C0 25.2335 5.01375 31.7917 11.9656 34.1031C12.8406 34.2679 13.1615 33.7269 13.1615 33.2617C13.1615 32.846 13.1469 31.745 13.1396 30.2867C8.27167 31.3425 7.245 27.9387 7.245 27.9387C6.44875 25.919 5.29812 25.3794 5.29812 25.3794C3.71292 24.2944 5.42063 24.3163 5.42063 24.3163C7.17792 24.4388 8.10104 26.1188 8.10104 26.1188C9.66146 28.7948 12.1975 28.0219 13.1979 27.5742C13.3554 26.4425 13.806 25.671 14.3063 25.2335C10.4198 24.796 6.335 23.291 6.335 16.5856C6.335 14.6752 7.01313 13.1148 8.13604 11.8898C7.93917 11.4479 7.34854 9.66875 8.28917 7.25813C8.28917 7.25813 9.75479 6.78854 13.1017 9.05188C14.5017 8.6625 15.9892 8.47 17.4767 8.46125C18.9642 8.47 20.4517 8.6625 21.8517 9.05188C25.1767 6.78854 26.6423 7.25813 26.6423 7.25813C27.5829 9.66875 26.9923 11.4479 26.8173 11.8898C27.9329 13.1148 28.611 14.6752 28.611 16.5856C28.611 23.3085 24.5204 24.7887 20.6267 25.219C21.2392 25.744 21.8079 26.8173 21.8079 28.4565C21.8079 30.7985 21.786 32.6798 21.786 33.2485C21.786 33.7079 22.0923 34.2548 22.9892 34.0798C29.9906 31.7844 35 25.2219 35 17.5C35 7.83563 27.1644 0 17.5 0Z" />
                    </svg>
                </div>

            </div>
        </div>

    );
};

export default Nav;