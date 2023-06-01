import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings, SlPeople } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineShoppingCart, HiOutlineDocumentText } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import './SideBar.css'
import { AuthContext } from "../../AuthProviders/AuthProviders";

const Sidebar = () => {
  const { handleLogout } = useContext(AuthContext);
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();


  const handleLogoutNow = () => {
    console.log('clicked');
    handleLogout()
      .then(() => {
        console.log('logout successfull')
      })
      .then(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  // For Responsive Design
  const Nav_animation = isTabletMid
    ? {
      open: {
        x: 0,
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
          delay: 0.15,
        },
      },
    }
    : {
      open: {
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        width: "4rem",
        transition: {
          damping: 40,
        },
      },
    };



  return (
    // All Side Bar
    <div id="sidebar">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
          } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img
            src="https://freelogopng.com/images/all_img/1655830761shopify-logo-png.png"
            width={100}
            alt=""
          />
          <span className="text-xl whitespace-pre -mb-1 font-medium">- Admin</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li className="no-underline">
              <NavLink to={"/"} className="flex items-center no-underline p-3 rounded-md">
                <AiOutlineAppstore size={23} className="min-w-max pr-1 mr-4" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/products"} className="flex items-center no-underline p-3 rounded-md">
                <BsPerson size={23} className="min-w-max  pr-1 mr-4" />
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to={"/orders"} className="flex items-center no-underline p-3 rounded-md">
                <HiOutlineShoppingCart size={23} className="min-w-max pr-1 mr-4" />
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink to={"/reports"} className="flex items-center no-underline p-3 rounded-md">
                <HiOutlineDocumentText size={23} className="min-w-max pr-1 mr-4" />
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink to={"/customers"} className="flex items-center no-underline p-3 rounded-md">
                <SlPeople size={23} className="min-w-max pr-1 mr-4" />
                Customers
              </NavLink>
              <NavLink to={"/settings"} className="flex items-center no-underline p-3 rounded-md">
                <SlSettings size={23} className="min-w-max pr-1 mr-4" />
                Settings
              </NavLink>
            </li>
          </ul>
          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Logout</p>
                  <small>log out your account</small>
                </div>
                <Link onClick={handleLogoutNow} className="btn btn-sm bg-blue-400 text-white">Logout</Link>
              </div>
            </div>
          )}
        </div>

        {/* Hide Side Bar Icon */}
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                x: 0,
                y: 0,
                rotate: 0,
              }
              : {
                x: -10,
                y: -200,
                rotate: 180,
              }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
