import React, { useState } from "react";
import { BsXLg, BsChevronDown } from "react-icons/bs";
import { menuDatas } from "../../Data/Data";

function MenuNavigation({ menuToggle, setMenuToggle }) {
  const [activeData, setActiveData] = useState(null);
  const handleClick = (id) => {
    setActiveData(id === activeData ? null : id);
  };
  return (
    <div className={`${menuToggle ? "menuNavigation open" : "menuNavigation"}`}>
      <div className="menu">
        <div className="minim">Minim</div>
        <div
          className="menuX"
          onClick={(prev) => {
            setMenuToggle(!prev);
          }}
        >
          <BsXLg />
        </div>
      </div>
      <div className="menuDatas">
        {menuDatas.map((menuData, id) => {
          return (
            <div
              className="dataGroup"
              key={menuData.id}
              onClick={() => handleClick(id)}
            >
              <div className="dataGroupName">
                <div>{menuData.dataGroupName}</div>
                <BsChevronDown
                  className={`${id === activeData ? "rotate180" : "rotate0"}`}
                />
              </div>
              {id === activeData && (
                <div className="dataItems">
                  {menuData.dataItems.map((dataItems, index) => (
                    <a href="" key={index}>
                      {dataItems}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="callUs">Call Us 01125533492</div>
      <div className="openHours">Operating Hour 9:00AM to 7:30PM</div>
    </div>
  );
}

export default MenuNavigation;
