// import { PaystackButton } from 'react-paystack';

// const config = {
//     reference: (new Date()).getTime().toString(),
//     email: "user@example.com",
//     amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
//     publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
//   };

// const Paystack = () => {
//     const handlePaystackSuccessAction = (reference) => {
//         // Implementation for whatever you want to do with reference and after success call.
//         console.log(reference);
//       };
  
//       // you can call this function anything
//       const handlePaystackCloseAction = () => {
//         // implementation for  whatever you want to do when the Paystack dialog closed.
//         console.log('closed')
//       }
  
//       const componentProps = {
//           ...config,
//           text: 'Paystack Button Implementation',
//           onSuccess: (reference) => handlePaystackSuccessAction(reference),
//           onClose: handlePaystackCloseAction,
//       };

// return (
//     <PaystackButton {...componentProps} />
// )
// }

// export default Paystack



// // function payWithPaystack(e) {
// // //    e.preventDefault();
// //     let email = document.getElementById("email-address").value;
// //     let key = document.getElementById("key").value;
// //     let base_amount = document.getElementById("base-amount").value;
// //     let amount = document.getElementById("ngn-amount").value;
// //     amount = amount.split(/\s+/).slice(-1)[0].split(/[₦,]/g).join("")
// //     amount = parseInt(parseFloat(amount) * 100);
// //     let source = document.getElementById("referer").value;
// //     let type = document.getElementById("type").value;
// //     let element = document.getElementById("element").value;
// //     let extra = document.getElementById("extra").value;
// //     const code = [...Array(7)].map(() => Math.random().toString(36)[2]).join('');
// //     let reference = `pst-${code}`;

// //     let handler = PaystackPop.setup({

// //     key: key,
// //     email: email,
// //     amount: amount,
// //     ref: reference,
// //     // label: "Optional string that replaces customer email"
// //     onClose: function(){
// //       alerT('Window closed', red);
// //     },
// //     callback: function(response){
// //       alerT('Please wait while we confirm the transaction.', 'purple');
// //       countDown(secs=30);
// //       let log_data = {'source': source, 'email': email, 'type': type, 'price': base_amount,
// //       'element': element, 'reference': response.reference, 'extra': extra}
// //       verifyPaystackTransaction(reference, log_data)

// // //      alerT(message);

// //     }
// //   });

// //   handler.openIframe();
// // }


// // function verifyPaystackTransaction(reference, log_data) {
// // //  const amount = 517650; // replace with actual amount
// //   const url = `paystack/find/${reference}/`;

// //   fetch(url)
// //     .then(response => response.json())
// //     .then(data => {
// //       counter.style.display = 'none';
// //       const message = data.message;

// //       if (data.success === true) {
// // //        alerT(message);
// //         logPayment(log_data);
// //       } else {
// //         alerT(message, 'maroon');
// //       }
// //     })
// //     .catch(error => {
// //         counter.style.display = 'none';
// //         console.error(error);
// //         alerT('Network error. We could not validate your transaction. Contact us or try again.', 'maroon');
// //         });
// // }


