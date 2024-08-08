import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { FaBlog } from 'react-icons/fa';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { AuthContext } from '../context/AuthProvider';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const {user} =useContext(AuthContext);
    console.log(user);

    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])



    //navItemshere
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" }
    ]

    return (
        <header className='fixed top-0 left-0 right-0 w-full transition-all duration-300 ease-in bg-transparent '>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ?"sticky top-0 left-0 right-0 bg-blue-300 ":""}`}>
                <div className='flex items-center justify-between gap-8 text-base'>
                    {/*logo*/}
                    <Link to="/" className='flex items-center gap-2 font-bold text-blue-700 text-2x1'><FaBlog className='inline-block' />Books</Link>

                    {/*nav items for large devices*/}
                    <ul className='hidden space-x-12 md:flex'>
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path}
                             className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)

                        }
                    </ul>
                    {/*Button for lg devices*/}
                    <div className='items-center hidden space-x-12 lg:flex'>
                        <button>
                            <FaBarsStaggered className='w-5 hover:text-blue-700'></FaBarsStaggered>
                        </button>
                      {/*  {user ? <span>{user.email}</span> : ' '}*/} 
                    </div>

                    {/* Button for mobile devices */}
                     <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                           {
                            isMenuOpen? <FaXmark className='w-5 h-5 text-black' /> : <FaBarsStaggered
                             className='w-5 h-5 text-black'/>
                           }
                        </button>

                     </div>
                     </div>
                     {/* nav items for small devices */}
                     <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        {
                     navItems.map(({ link, path }) => <Link key={path} to={path}
                             className='block text-base text-white uppercase cursor-pointer'>{link}</Link>)
                             }
                     </div>
            </nav>
        </header>
    )
}

export default Navbar