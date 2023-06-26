import React from "react";

const Tab = ({
    id,
    name,
    type,
    date,
    status
}) => {
  return (
    <div>
     
      <tbody className="border-4 w-full">
          <tr
            className="bg-white hover:bg-gray-50 focus:bg-gray-300"
           
          >
            <td className="">{id}</td>
            <td className="">{name}</td>
            <td className="">{type}</td>
            <td className="">{date}</td>
            <td className="">
              <span className="bg-green-400 text-gray-50 rounded-md px-2">
                {status}
              </span>
            </td>
          </tr>
        </tbody>
    </div>
  );
};

export default Tab;
