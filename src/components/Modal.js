import { useEffect, useState } from "react";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { uid } from 'uid';
import logo from '../assets/logo.png'

const Modal = ({ visible, onClose,currency,setModal }) => {

  // const [name, setName] = useState('');
  const [items, setItems] = useState('');
  // const [price, setPrice] = useState('');
  const [receiptUrl, setReceiptUrl] = useState('');
 

  const [priceNaira,setPriceNaira]=useState(3500)
  const [priceDollar,setPriceDollar]=useState(10)
  const[payPriceNaira,setPayPriceNaira]=useState(Number(priceNaira))
  const[payPriceDollar,setPayPriceDollar]=useState(Number(priceDollar))
  const[MainpayPriceDollar,setMainPayPriceDollar]=useState(Number(priceDollar))
  const[MainpayPriceNaira,setMainPayPriceNaira]=useState(Number(priceNaira))

  
  const[counterN,setCounterN]=useState(1)
  const[counterD,setCounterD]=useState(1)
  const [name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[phoneNumber,setPhonenumber]=useState('')


  useEffect(()=>{
    setCounterN(1)
    console.log('1');
  },[priceNaira])


  useEffect(()=>{
   setPayPriceNaira(3500)
   setCounterD(1)
   setCounterN(1)
   setPayPriceDollar(10)
  
  },[currency])


  useEffect(()=>{
    setCounterN(1)
  },[priceNaira])


  useEffect(()=>{
    setCounterD(1)
   },[priceDollar])



  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

// const date=new Date()

  const configNaira = {
    //LiVE KEY
    public_key: `${process.env.REACT_APP_PUBLICKEY}`,


    //Test Key
    // public_key: `FLWPUBK_TEST-68ad9039442537771588529815472097-X`,
    // public_key: `FLWPUBK_TEST-841c10b026f35195c62cfc032d14c5a0-X`,
    tx_ref: Date.now(),
    amount: payPriceNaira,
    currency,
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email,
       phone_number: phoneNumber,
      name,
    },
    customizations: {
      title: `ZIMS TICKETS  `,
      description: 'e'
      // `
      // *************************************
      // ZIMS TICKET
      // *************************************
      // Ticket ID: ${uid}
      // Name: ${name}
      // Date: ${date.getUTCDate()}
     
      
      // *************************************
      // Thank you for attending the Our ZOO 🐒🐼🦍🐯🐯!
      
      
      // `
      ,
      logo: '../assets/logo.png',
      
    },
  };
  const configDollar = {
    //LiVE KEY
    public_key: `${process.env.REACT_APP_PUBLICKEY}`,


    //Test Key
    // public_key: `FLWPUBK_TEST-841c10b026f35195c62cfc032d14c5a0-X`,
    tx_ref: Date.now(),
    amount: payPriceDollar,
    currency,
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email,
       phone_number: phoneNumber,
      name,
    },
    customizations: {
      title: `ZIMS TICKETS  `,
      description: 'e'
      // `
      // *************************************
      // ZIMS TICKET
      // *************************************
      // Ticket ID: ${uid}
      // Name: ${name}
      // Date: ${date.getUTCDate()}
     
      
      // *************************************
      // Thank you for attending the Our ZOO 🐒🐼🦍🐯🐯!
      
      
      // `
      ,
      logo: '../assets/logo.png',
      
    },
  };

  const fwConfigNaira = {
    ...configNaira,
    text: 'Pay Now',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };
  const fwConfigDollar = {
    ...configDollar,
    text: 'Pay Now',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  
  
  const handleIncrementPriceN=()=>{
    // console.log(priceNaira);
    setPayPriceNaira(payPriceNaira + Number(MainpayPriceNaira))
    // console.log(payPriceNaira);
    // console.log(Number(priceNaira));
    // console.log(payPriceNaira);
    setCounterN(counterN+1)
 
    }
  const handleIncrementPriceD=()=>{
    setPayPriceDollar( payPriceDollar + Number(MainpayPriceDollar))
    setCounterD(counterD+1)
    }

    const handleDecrementPriceN=(currency)=>{
       //   NORMAL TICKET +++++ NAIRA DECREMNET
      

         if(payPriceNaira>MainpayPriceNaira){
      if(counterN>0 ){
        setCounterN(counterN-1)
             setPayPriceNaira((priceNaira)=> priceNaira-(MainpayPriceNaira))
            }
     }
 
  }

    const handleDecrementPriceD=(currency)=>{
      
     
    
 //   FOREIGN TICKET +++++ DOLLAR DECREMNET
     if(payPriceDollar>MainpayPriceDollar){
      if(counterD>0 ){
        setCounterD(counterD-1)
    
             setPayPriceDollar((priceDollar)=> priceDollar-(MainpayPriceDollar))
            }}      

    

  }
     
    
     
     






  return (
    <div
      onClick={handleOnClose}
      id="container"
      className="fixed top-[5em] inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-[10] "
    >
      <div className="relative h-[550px] w-[350px] md:max-h-[640px] md:w-[600px]  bg-white p-5 text-black place-items-center rounded-xl ">
      <form onSubmit={(e)=>e.preventDefault()}  className='flex flex-col h-[460px]  overflow-scroll overflow-x-hidden'>
        <button 
        onClick={()=>{
        setModal(false)
        // console.log(3)
        }
        }
        className=" h-[50px] w-fit  rounded-full px-4 absolute  top-[.1em] right-[.1em] border border-b-4 opacity-70 cursor-pointer hover:opacity-100 
            font-[500] text-[1.4em] font-mono text-white py-2">x</button>

            <label  className='pt-4' >Full Name</label>
            <input required value={name} onChange={(e)=>setName(e.target.value)} className='rounded-lg  h-12 bg-[#e9e9e9] p-2' type='text' placeholder="Full Name" name=" your name"></input>
            <label className='pt-4' >Email</label>

            <input required value={email} onChange={(e)=>setEmail(e.target.value)} className='rounded-lg h-12 bg-[#e9e9e9] p-2' type='email' placeholder="email" name="email"></input>

            <label className='pt-4' >Phone No</label>
            <input required value={phoneNumber} onChange={(e)=>setPhonenumber(e.target.value)} className='rounded-lg h-12 bg-[#e9e9e9] p-2' type='tel' placeholder="phone no" name="Phone no"></input>

            <label className='pt-4 pb-4'  for="cars">Select Ticket type</label>

             {
              currency==="NGN"? 
              <select onChange={(e)=>{
                setPayPriceNaira(100)
                setPriceNaira(Number(e.target.value))
                 setPayPriceNaira(Number(e.target.value))
                 setMainPayPriceNaira(e.target.value)
               }} className="bg-[#e9e9e9] h-11 p-2 " name="cars" id="cars">
  
                  <option value={100} ><p className="text-[1.1rem]">Weekday-Senior (51-62+) - ₦100</p></option>
                  <option value={4000}><p className="text-[1.1rem]">Weekday-Adult (18-50) - ₦4000</p> </option>
                  <option value={2500}><p className="text-[1.1rem]">Weekday-Child (4-17) - ₦2500</p></option>
                  <option  value={3000}><p className="text-[1.1rem]">Weekend-Senior (51-62+) - ₦3000</p></option>
                  <option  value={6000}><p className="text-[1.1rem]">Weekend-Adult (18-50) - ₦6000</p></option>
                  <option value={2000}><p className="text-[1.1rem]">Weekend-Child (4-17) - ₦2000</p></option>
  
  
                </select>
                :
                <select onChange={(e)=>{
                  setPayPriceDollar(10)
                  setPriceDollar(Number(e.target.value))
                   setPayPriceDollar(Number(e.target.value))
                   setMainPayPriceDollar(e.target.value)
    
                 }} className="bg-[#e9e9e9] h-11 p-2 " name="cars" id="cars">
    
                    <option value={10} ><p className="text-[1.1rem]">Weekday-Senior (51-62+) - $10</p></option>
                    <option value={10}><p className="text-[1.1rem]">Weekday-Adult (18-50) - $10</p> </option>
                    <option value={8}><p className="text-[1.1rem]">Weekday-Child (4-17) - $8</p></option>
                    <option  value={11}><p className="text-[1.1rem]">Weekend-Senior (51-62+) - $11</p></option>
                    <option  value={10}><p className="text-[1.1rem]">Weekend-Adult (18-50) - $10</p></option>
                    <option value={8}><p className="text-[1.1rem]">Weekend-Child (4-17) - $8</p></option>
    
    
                  </select>

             }
            
              <div className="mt-[1.4em]"> 
               <p>Select for multiple Tickets</p>
                 <div className=" flex flex-col md:flex-col justify-between p-5 gap-4 items-center w-full">
                <button className=" bg-orange-900/20 ">
                   <p className=" bg-white/60 p-1 rounded-md  w-full break-words   text-[1.1em] font-bold text ">
                    
                   

                    {currency==='NGN'?
                    <>
                     Total Price: ₦{payPriceNaira ? payPriceNaira:3500}
                    </>
                     
                  :
                  <>
                  Total Price: ${payPriceDollar ? payPriceDollar:10}
                 </>

                  }
                  
                   
                   </p>
                </button>
                
                 <div className="flex justify-center items-center gap-6 ">
                  {
                  currency==="NGN"?

                   <button onClick={()=>handleDecrementPriceN(currency)} className="w-fit h-fit border-b-4  border border-b-black/10 shadow-black font-bold text-[1.3em] text-white">- </button> 
:
                  <button onClick={()=>handleDecrementPriceD(currency)} className="w-fit h-fit border-b-4  border border-b-black/10 shadow-black font-bold text-[1.3em] text-white">- </button> 
                  }
                
                 <p>
                  
                 {currency==="NGN"?
                <p className="text-[.6em] font-bold">
                  {counterN} Ticket(s) added
                </p>
                :
                <>
                  {counterD} Ticket(s) added
                </>
              }
                
                  
                  </p> 
                  {
                    currency==="NGN"?
                     <button onClick={handleIncrementPriceN} className="w-fit h-fit border-b-4  border border-b-black/10 shadow-black font-bold text-[1.3em] text-white">+</button>
                     :
                     <button onClick={handleIncrementPriceD} className="w-fit h-fit border-b-4  border border-b-black/10 shadow-black font-bold text-[1.3em] text-white">+</button>
                  }
                 
                
                 </div>
               
  
              </div>
              <p className=" flex justify-end">
                {currency==="NGN"?
                <>
                  {counterN} Ticket(s) added
                </>
                :
                <>
                  {counterD} Ticket(s) added
                </>
              }
                
               
                
                </p>
           
              </div>
               
              {/* <div className="flex justify-between w-full bg-red-600 py-2 border-b-2 border-zinc-300">
          <p className="text-[1.1rem]">Weekday-Senior (51-62+) Ticket</p>
          <p className="text-[1.1rem] font-thin ">4000</p>
             </div> */}
            {currency==='NGN'?
              <FlutterWaveButton  className='text-white mt-8  w-[90%] mx-auto bg-orange-500 py-3   rounded-lg' {...fwConfigNaira} />
      :

        <FlutterWaveButton  className='text-white mt-8  w-[90%] mx-auto bg-orange-500 py-3   rounded-lg' {...fwConfigDollar} />
      
            
          }
        
          </form>
          
        
        {/* <button onClick={onClose}>x</button> */}
      </div>
    </div>
  );
};

export default Modal;