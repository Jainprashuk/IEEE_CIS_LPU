import React from "react";

const ConferenceCard = (props) => {
    return (
      <div className="p-8">
        <div className="lg:flex shadow rounded-lg border border-gray-400 p-5 mt-8">
        <div className=" rounded-lg lg:w-2/12 py-4 block h-full shadow-inner">
          <div className="text-center tracking-wide">
            <div className="text-gray-900 font-bold text-4xl">{props.date}</div>
            <div className="text-gray-900 font-normal text-2xl">{props.month}</div>
          </div>
        </div>
        <div className="w-full lg:w-11/12 xl:w-full px-1 py-5 lg:px-2 lg:py-2 tracking-wide">
          <div className="flex flex-row lg:justify-start justify-center">
            <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
              <i className="far fa-clock"></i> {props.time}
            </div>
            <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
               {props.organizer}
            </div>
          </div>
          <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
            {props.eventname}
          </div>
  
          <div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
            {props.vanue}
          </div>
        </div>
        <div className="flex flex-row items-center w-full lg:w-1/3  lg:justify-end justify-center px-2 py-4 lg:px-0">
          <span className="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
            {props.status}
          </span>
        </div>
      </div>
      </div>
    );
  };
  
  export default ConferenceCard;
  