// import React from 'react'
// import axios from 'react-axios';
// import { onMessageListener } from './firebaseInit';
// import { toast } from 'react-toastify';


// export const Messaging = () => {
//     const [messages, setMessages] = React.useState([]);
//     const [requesting, setRequesting] = React.useState(false);
    
//         React.useEffect(() => {
//         setRequesting(true);
//         axios.get("/messages").then((resp) => {
//             setMessages(resp.data.messages);
//             setRequesting(false);
//         });
//         }, []);

//         onMessageListener()
//             .then((payload) => {
//             const { title, body } = payload.data;
//             toast.info(`${title}; ${body}`);
//             })
//             .catch((err) => {
//             toast.error(JSON.stringify(err));
//             });
    
//         return (
//         <div>
//             {/* form goes here */}
//             <div className="message-list">
//             <h3>Messages</h3>
//             {requesting ? (
//                 <span className="sr-only">Loading...</span>
//             ) : (
//                 <div>
//                 {messages.map((m, index) => {
//                     const { name, message } = m;
//                     return (
//                     <div key={index}>
//                         {name}: {message}
//                     </div>
//                     );
//                 })}
//                 </div>
//             )}
//             </div>
//         </div>
//         );
//     };