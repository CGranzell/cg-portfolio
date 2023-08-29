import React from 'react';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { IoLocationOutline } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';

const ExperienceItem = ({
  title,
  type,
  employer,
  location,
  dateFrom,
  dateTo,
}) => {
  return (
    <div className=" border-b-4 py-6 ">
      <div className="flex flex-col md:flex-row justify-between pb-4">
        <h3 className="text-xl">{title}</h3>
        <div className="flex justify-center items-center h-10 w-40 bg-light-green text-dark-green rounded-xl">
          <p>{type}</p>
        </div>
      </div>
      <div className="flex md:justify-between flex-col md:flex-row ">
        <div className=" flex w-full md:w-2/6">
          <HiOutlineBuildingOffice />
          <p className="pl-6">{employer}</p>
        </div>
        <div className="flex md:justify-between">
          <IoLocationOutline />
          <p className="pl-6">{location}</p>
        </div>
        <div className="flex md:justify-between sm:w-60 ">
          <FaRegCalendarAlt />
          <p className="pl-6">{dateFrom}</p>
          {''} - {''} <p className="pl-6"> {dateTo}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
