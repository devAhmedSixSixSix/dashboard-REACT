import React from "react";
import { Link } from "react-router-dom";
import SideNavbarItem from "./SideNavbarItem";
import { AiOutlineHome } from "react-icons/ai";
import { RiInboxArchiveLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { GoListOrdered } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { FaQuestion } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";

function SideNavebar({ showPop }) {
  const style = {
    width: "25px",
    height: "25px",
  };

  return (
    <div className="bg-white h-100">
      <Link to="/" className="text-decoration-none">
        <SideNavbarItem
          title="Dashboard"
          icon={<AiOutlineHome style={style} />}
        />
      </Link>
      <Link to="announced" className="text-decoration-none">
        <SideNavbarItem
          title="Announced"
          icon={<RiInboxArchiveLine style={style} />}
        />
      </Link>
      <Link to="preparation" className="text-decoration-none">
        <SideNavbarItem title="Preparation" icon={<TfiWrite style={style} />} />
      </Link>
      <Link to="sorted" className="text-decoration-none">
        <SideNavbarItem title="Sorted" icon={<GoListOrdered style={style} />} />
      </Link>
      <hr className="my-4" />
      <Link to="profile" className="text-decoration-none">
        <SideNavbarItem title="Profile" icon={<BsPerson style={style} />} />
      </Link>
      <Link to="notification" className="text-decoration-none">
        <SideNavbarItem
          title="Notification"
          icon={<MdNotificationsNone style={style} />}
        />
      </Link>
      <Link to="setting" className="text-decoration-none">
        <SideNavbarItem title="Setting" icon={<FiSettings style={style} />} />
      </Link>
      <Link to="faq" className="text-decoration-none">
        <SideNavbarItem title="FAQ" icon={<FaQuestion style={style} />} />
      </Link>
      <div onClick={showPop}>
        <SideNavbarItem
          title="Logout"
          icon={<HiOutlineLogout style={style} />}
        />
      </div>
    </div>
  );
}

export default SideNavebar;
