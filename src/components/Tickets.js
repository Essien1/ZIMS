import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import env from "react-dotenv";
import Paystack from "./paystack";

const Tickets = () => {
  const [showModal, setModal] = useState(false);

  const handleOnClose = () => setModal(false);

  const config = {
    public_key: 'FLWPUBK_TEST-841c10b026f35195c62cfc032d14c5a0-X',
    tx_ref: Date.now(),
    amount: 200,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'enaikeleomoh@gmail.com',
       phone_number: '09073597660',
      name: 'Enaikele Omoh Kelvin',
    },
    customizations: {
      title: 'ZIMS TICKET',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
 const [currency,setCurrency]=useState('NGN')


  return (
    <div className="max-w-[1240px] mx-auto mt-11 py-4 px-4 grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div>
        <h1>
          <span className="italic text-[#3CCF4E]">General</span> Admission
        </h1>
        <p className="py-3 text-[1.1rem]">
          ZIMS is open year-round. The price of admission includes both the
          self-guided drive-thru, the walk-thru, and our various shows.
        </p>
        <p className="py-3 text-[1.1rem]">
          Parking is included in your admission.
        </p>


        <p className="py-3 text-[1.1rem]">
          ZIMS Barnyard “petting zoo” open Friday-Sunday
        </p>
        <div className="py-4 flex gap-7  items-center">
          <button
           className="bg-orange-500  text-white py-4 font-bold px-11"
            onClick={() => {
              setCurrency('NGN')
              setModal(true)}}>
              
              Normal Ticket
            </button>
          <button
           className="bg-[#3CCF4E] text-white py-4 font-bold px-11"
            onClick={() =>{
              setCurrency('USD')
              setModal(true)}}>
            Foreign Ticket
            </button>


{/* <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
               console.log(1);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      
            className="bg-orange-500 text-white py-4 font-bold px-11"
         >
              Buy Tickets Now {process.env.PUBLICKEY}
          
          </button> */}
          <Modal  currency={currency} setModal={setModal} onClose={handleOnClose} visible={showModal} />
        </div>
      </div>

      <div className="bg-zinc-100 py-3 px-5 rounded-xl p-9">
        <div className="flex justify-between py-2 border-b-2 border-zinc-300">
          <p className="text-[1.1rem]">Weekday-Senior (51-62+) Ticket</p>
          <p className="text-[1.1rem] font-thin ">₦3500</p>
        </div>
        <div className="flex justify-between py-2 border-b-2 border-zinc-300">
          <p className="text-[1.1rem]">Weekday-Adult (18-50) Ticket</p>
          <p className="text-[1.1rem] font-thin ">₦4000</p>
        </div>{" "}
        <div className="flex justify-between py-2 border-b-2 border-zinc-300">
          <p className="text-[1.1rem]">Weekday-child (4-17) Ticket</p>
          <p className="text-[1.1rem] font-thin ">₦2500</p>
        </div>{" "}
        <div className="flex justify-between py-2 border-b-2 border-zinc-300">
          <p className="text-[1.1rem]">Weekend-Senior (51-62+) Ticket</p>
          <p className="text-[1.1rem] font-thin ">₦3000</p>
        </div>
        <div
          className="flex justify-between py-2 border-b-2 border-zinc-300"
          border-b-2
          border-zinc-300
        >
          <p className="text-[1.1rem]">Weekend-Adult (18-50) Ticket</p>
          <p className="text-[1.1rem] font-thin ">₦6000</p>
        </div>
        <div className="flex justify-between py-2 border-b-2 border-zinc-300">
          <p className="text-[1.1rem]">Weekend-child (4-17) Ticket</p>
          <p className="text-[1.1rem] font-thin ">₦2000</p>
        </div>
        <div className=" py-2">
          <p className="text-[1.1rem]  text-[#41ba4f]">
          
            children 3 & under are free
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
