// import React, {useState} from 'react'
// import { Form, Row, Col, Card } from 'react-bootstrap';
// import InvoiceItem from './reusable/InvoiceItem';

// function InvoiceForm() {
//   const [state, setState] = useState({
//     isOpen: false,
//     currency: '$',
//     currentDate:"",
//     invoiceNumber: 1,
//     billTo: "",
//     billToAddress: "",
//     billToEmail: "",
//     billFrom: "Priyanshi R",
//     notes: "",
//     billFromEmail: "priyanshirathore0720@gmail.com",
//     billFromAddress: "Indore, MP",
//     subTotal: "0.00",
//     taxRate: 0,
//     taxAmount: "0.00",
//     discountRate: 0,
//     discountAmount: "0.00",
//   })

//   const [total, setTotal] = useState(0.00);

//   const [items, setItems] = useState([{
//     id: "0",
//     name: "",
//     description: "",
//     price: 1.0,
//     quantity: 1, 
//    },
//   ]);


//  const onchange = (event) => {
//   setState(prevState => ({
//   ...prevState,
//   [event.target.name]: event.target.value,
//   }));
//  };

//  const onItemizedItemEdit = (event) => {
//   const individualItem = {
//     id: event.target.id,
//     name: event.target.name,
//     value: event.target.value,
//   };

// //   var newItems = items.map((item)=>{
// //  for(var key in item){
// //   if(key=== individualItem.name && item.id === individualItem.id){
// //     item[key] = individualItem.value
// //   }
// //  }
// //  return item
// //   })
// //   setItems(newItems);
// //  }

// const newItems = items.map((item) => {
//   if (item.id === individualItem.id) {
//     return {
//       ...item,
//       [individualItem.name]: individualItem.value,
//     };
//   }
//   return item;
// });

// setItems(newItems);
// };

//  const handleAddEvent = (e) => {
//   var id = (+new Date() + Math.floor(Math.random()* 999999)).toString(36);
//   var item = {
//     id ,
//     name: "",
//     price: 1.0,
//     description: "",
//     quantity: 1,

//   };
//   setItems((prevItems) => [...prevItems, item]);
//  };

//  const handleRowDel = (item) => {
//   // // var index = items.indexOf(item);
//   // console.log(index,"index")
//   // setItems((items) => [...items.splice(index, 1),
//   //   ...items.splice(index+ 1),
//   // ]);
//   // setItems((items) => [...items, item]);

//   if(items.length > 1){
//     setItems((prevItems) => prevItems.filter((data) => data.id !== item.id));

//   } else{
//     setItems([
//       {
//      id:'0',
//     name: "",
//     description:"",
//     price: 1.0,
//     quantity:1,
//     },
//   ]);
//   }
//  };

//   return  <Form>
//     <Row>
//       <Col md={8} lg = {9} >
//         <Card className='d-flex p-4 p-xl-5 my-3 my-xl-4'>
//           <div className="d-flex flex-row  mb-3">
//             <div className="mb-2">
//               <span className="fw-bold">Current&nbsp;Date:&nbsp</span>
//               <span className="current-date">{new Date().toLocaleDateString()}
//               </span>

//             </div>

//           </div>
//           <div className="d-flex flex-row  mb-3">
//             <div className="mb-2">
//            <span className="fw-bold">Invoice&nbsp;Number:&nbsp;</span>
//            <span className="current-date">{state.invoiceNumber}</span>
//             </div>

//           </div>

//           <hr className="my-4" />
//           <Row className="mb-5">
//             <Col>
//             <Form.Label className= "fw-bold">Customer Details </Form.Label>
//             <Form.Control
//             placeholder= "name"
//             value= {state.billTo}
//             type="text"
//             name= "billTo"
//             className="my-2"
//             onChange= {onchange}
//             autoComplete= "name"
//             required= {true}
//             />
           
//             <Form.Control
//             placeholder= "Your Email id"
//             value= {state.billToEmail}
//             type="text"
//             name= "billTo"
//             className="my-2"
//             onChange= {onchange}
//             autoComplete= "email"
//             required= {true}
//             />
//              {/* <Form.Label ClassName= "fw-bold">Customer Name: </Form.Label> */}
//             <Form.Control
//             placeholder= "Your Address"
//             value= {state.billToAddress}
//             type="text"
//             name= "billTo"
//             className="my-2"
//             onChange= {onchange}
//             autoComplete= "address"
//             required= {true}
//             />
             
//             </Col>
//             <Col>
//             <Form.Label className= "fw-bold">Your Bill : </Form.Label>
//             <Form.Control value= {state.billFrom} className="my-2" disabled={true} />
//             <Form.Control value= {state.billFromEmail} className="my-2" disabled={true} />
//             <Form.Control value= {state.billFromAddress} className="my-2" disabled={true} />
             
//            </Col>
//           </Row>

//           <InvoiceItem items={items} onItemizedItemEdit={onItemizedItemEdit} onRowAdd={handleAddEvent} onRoleDel = {handleRowDel} currency={state.currency} />

//         </Card>
//       </Col>
//     </Row>
//   </Form> 

// }

// export default InvoiceForm



import React, { useState } from 'react';
import { Form, Row, Col, Card } from 'react-bootstrap';
import InvoiceItem from './reusable/InvoiceItem';

function InvoiceForm() {
  const [state, setState] = useState({
    isOpen: false,
    currency: '$',
    currentDate: '',
    invoiceNumber: 1,
    billTo: '',
    billToAddress: '',
    billToEmail: '',
    billFrom: 'Priyanshi R',
    notes: '',
    billFromEmail: 'priyanshirathore0720@gmail.com',
    billFromAddress: 'Indore, MP',
    subTotal: '0.00',
    taxRate: 0,
    taxAmount: '0.00',
    discountRate: 0,
    discountAmount: '0.00',
  });

  const [total, setTotal] = useState(0.0);

  const [items, setItems] = useState([
    {
      id: '0',
      name: '',
      description: '',
      price: 1.0,
      quantity: 1,
    },
  ]);

  const onchange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onItemizedItemEdit = (event) => {
    const individualItem = {
      id: event.target.id,
      name: event.target.name,
      value: event.target.value,
    };

    const newItems = items.map((item) => {
      if (item.id === individualItem.id) {
        return {
          ...item,
          [individualItem.name]: individualItem.value,
        };
      }
      return item;
    });

    setItems(newItems);
  };

  const handleAddEvent = (e) => {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const item = {
      id,
      name: '',
      price: 1.0,
      description: '',
      quantity: 1,
    };
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleRowDel = (item) => {
    if (items.length > 1) {
      setItems((prevItems) => prevItems.filter((data) => data.id !== item.id));
    } else {
      setItems([
        {
          id: '0',
          name: '',
          description: '',
          price: 1.0,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <Form>
      <Row>
        <Col md={8} lg={9}>
          <Card className="d-flex p-4 p-xl-5 my-3 my-xl-4">
            <div className="d-flex flex-row mb-3">
              <div className="mb-2">
                <span className="fw-bold">Current Date:&nbsp;</span>
                <span className="current-date">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="d-flex flex-row mb-3">
              <div className="mb-2">
                <span className="fw-bold">Invoice Number:&nbsp;</span>
                <span className="current-date">{state.invoiceNumber}</span>
              </div>
            </div>
            <hr className="my-4" />
            <Row className="mb-5">
              <Col>
                <Form.Label className="fw-bold">Customer Details</Form.Label>
                <Form.Control
                  placeholder="Name"
                  value={state.billTo}
                  type="text"
                  name="billTo"
                  className="my-2"
                  onChange={onchange}
                  autoComplete="name"
                  required
                />
                <Form.Control
                  placeholder="Email"
                  value={state.billToEmail}
                  type="text"
                  name="billToEmail"
                  className="my-2"
                  onChange={onchange}
                  autoComplete="email"
                  required
                />
                <Form.Control
                  placeholder="Address"
                  value={state.billToAddress}
                  type="text"
                  name="billToAddress"
                  className="my-2"
                  onChange={onchange}
                  autoComplete="address"
                  required
                />
              </Col>
              <Col>
                <Form.Label className="fw-bold">Your Bill</Form.Label>
                <Form.Control
                  value={state.billFrom}
                  className="my-2"
                  disabled
                />
                <Form.Control
                  value={state.billFromEmail}
                  className="my-2"
                  disabled
                />
                <Form.Control
                  value={state.billFromAddress}
                  className="my-2"
                  disabled
                />
              </Col>
            </Row>
            <InvoiceItem
              items={items}
              onItemizedItemEdit={onItemizedItemEdit}
              onRowAdd={handleAddEvent}
              onRowDel={handleRowDel}
              currency={state.currency}
            />
          </Card>
        </Col>
      </Row>
    </Form>
  );
}

export default InvoiceForm;
