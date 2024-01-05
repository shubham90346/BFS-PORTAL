import { useState } from "react";
import classNames from "classnames";
import Styles from '../pages/page.module.css'

const CollapsibleRow = ({ children, title, onChange, quantity }) => {
  // console.log(quantity);
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr className={`w-full ${Styles.AcoorWidrth}`}>
        <td colSpan={12}   className={classNames( 
              " w-full border-none py-[1px] px-[3px] "
            )}>
          <input
            id="expandCollapse"
            checked={open}
            // defaultChecked={open}
            type="checkbox"
            className="peer sr-only"
          />
          <label
            htmlFor="expandCollapse"
            className={classNames(
              "h-[56px] top-0 left-0 bg-[#f8fafb] border border-solid border-[#f7f7f7] w-full",
              "[font-family:'Montserrat-500'] font-medium text-[#1d1d1d] text-[20px] tracking-[2.00px] leading-[normal] whitespace-nowrap uppercase flex items-center px-[23px] justify-between"
            )}
            onClick={() => {
              onChange?.(!open);
              setOpen((prev) => !prev);
            }}
          >
            {title}
            {quantity ? (
              <div className="w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center leading-tight text-white text-[15px] text-center">
                {quantity}
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                className={classNames("ml-4", {
                  "rotate-180": open,
                })}
              >
                <path
                  d="M21.2847 17.1456L14.1897 10.2871L7.09467 17.1456"
                  stroke="#403A35"
                  strokeWidth={"2"}
                />
              </svg>
            )}
          </label>
        </td>
      </tr>
      {open ? children : null}
    </>
  );
};

export default CollapsibleRow;
