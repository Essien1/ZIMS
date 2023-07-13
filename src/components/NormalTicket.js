import React from "react";
import UpdateTicketType from "./UpdateTicketType";
import { Link } from "react-router-dom";

const NormalTicket = () => {
  return (
    <div className="absolute left-[13.5%] w-[81%] mt-40 ml-11 p-8 bg-zinc-100 ">
      <h3 className="font-bold text-xl">View Details of Tickets</h3>
      <div className="w-full">
        <table className="w-full text-center">
          <thead className="bg-zinc-100">
            <tr className="border-b border-gray-400">
              <th className="text-md px-6 py-3">Ticket ID</th>
              <th className="text-md px-6 py-3">Name</th>
              <th className="text-md px-6 py-3">Ticket Type</th>
              <th className="text-md px-6 py-3">Price</th>
              <th className="text-md px-6 py-3">currency</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 items-center">
              <td className="text-md px-6 py-3">73430998</td>
              <td className="text-md px-6 py-3">Effiom Ekepyong</td>
              <td className="text-md px-6 py-3">Weekend Normal Adult</td>
              <td className="text-md px-6 py-3"> ₦4000  </td>
              <td className="text-md px-6 py-3"> NGN</td>
            </tr>

            <tr className="border-b border-gray-300 items-center">
              <td className="text-md px-6 py-3">65430998</td>
              <td className="text-md px-6 py-3">Nelson Odidi</td>
              <td className="text-md px-6 py-3">Weekday Normal Adult</td>
              <td className="text-md px-6 py-3">₦3500</td>
              <td className="text-md px-6 py-3">NGN
              </td>
            </tr> 
            <tr className="border-b border-gray-300 items-center">
              <td className="text-md px-6 py-3">11430998</td>
              <td className="text-md px-6 py-3">Odidi Emmanuel</td>
              <td className="text-md px-6 py-3">Weekend Foreigner Adult</td>
              <td className="text-md px-6 py-3"> $10</td>
              <td className="text-md px-6 py-3">USD</td>
            </tr>
             <tr className="border-b border-gray-300 items-center">
              <td className="text-md px-6 py-3">82430998</td>
              <td className="text-md px-6 py-3">Favour Zipamor</td>
              <td className="text-md px-6 py-3">Weekday normal Adult</td>
              <td className="text-md px-6 py-3">₦4000</td>
              <td className="text-md px-6 py-3">NGN</td>
            </tr>
            <tr className="border-b border-gray-300 items-center">
              <td className="text-md px-6 py-3">23430998</td>
              <td className="text-md px-6 py-3">Lawal Timilehin </td>
              <td className="text-md px-6 py-3">Weekday Foreigner Adult</td>
              <td className="text-md px-6 py-3">$30</td>
              <td className="text-md px-6 py-3">USD</td>
            </tr>
            <tr className="border-b border-gray-300 items-center">
              <td className="text-md px-6 py-3">54430998</td>
              <td className="text-md px-6 py-3">HUMPHREYNWOKOLO</td>
              <td className="text-md px-6 py-3">Weekday normal Adult</td>
              <td className="text-md px-6 py-3">₦3500</td>
              <td className="text-md px-6 py-3">NGN</td>
            </tr>
            <tr className="border-b border-gray-300 items-center">
              <td className="text-md px-6 py-3">66430998</td>
              <td className="text-md px-6 py-3">Faith Odidi</td>
              <td className="text-md px-6 py-3">Weekday normal Adult</td>
              <td className="text-md px-6 py-3">$10</td>
              <td className="text-md px-6 py-3">USD</td>
            </tr>  
            <tr className="border-b border-gray-300 items-center">
              <td className="text-md px-6 py-3">53430998</td>
              <td className="text-md px-6 py-3">Stephen Toka</td>
              <td className="text-md px-6 py-3">Weekday normal Adult</td>
              <td className="text-md px-6 py-3">₦3500</td>
              <td className="text-md px-6 py-3">NGN</td>
            </tr>
            <tr className="border-b border-gray-300 items-center">
              <td className="text-md px-6 py-3">99330998</td>
              <td className="text-md px-6 py-3">Iyare Gbemiga</td>
              <td className="text-md px-6 py-3">Weekday normal Adult</td>
              <td className="text-md px-6 py-3">₦3500</td>
              <td className="text-md px-6 py-3">NGN</td>
            </tr>
          </tbody>
        </table> 
      </div>

{/* <UpdateTicketType/> */}
    </div>
  );
};

export default NormalTicket;
