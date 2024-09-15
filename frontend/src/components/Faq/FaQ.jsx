// import React from 'react'
// import styles from "./FaQ.module.css";
// import Card from './Card';
// const FaQ = () => {
//   const fruits = [
//     {
//       name: "Blueberry",
//       description: "Blueberries are rich in antioxidants and vitamin C, which help improve brain function and support heart health.",
//       image: "url-to-blueberry-image" // Replace with actual URL
//     },
//     {
//       name: "Papaya",
//       description: "Papayas are loaded with enzymes that aid digestion and are a great source of vitamin C, helping to boost the immune system.",
//       image: "url-to-papaya-image" // Replace with actual URL
//     },
//     {
//       name: "Kiwi",
//       description: "Kiwis are packed with vitamins C and E, promoting better skin health and supporting the immune system with their antioxidant properties.",
//       image: "url-to-kiwi-image" // Replace with actual URL
//     },
//     {
//       name: "Pomegranate",
//       description: "Pomegranates are high in antioxidants and vitamin C, which may help reduce inflammation and improve heart health.",
//       image: "url-to-pomegranate-image" // Replace with actual URL
//     },
//     {
//       name: "Strawberry",
//       description: "Strawberries are rich in vitamin C and manganese, which support heart health and have anti-inflammatory properties.",
//       image: "url-to-strawberry-image" // Replace with actual URL
//     },
//     {
//       name: "Grapefruit",
//       description: "Grapefruits are a great source of vitamin C and fiber, which can help support the immune system and improve digestion.",
//       image: "url-to-grapefruit-image" // Replace with actual URL
//     }
//   ];
  
  
//   return (
//     <div className={styles.mainDiv}>
//      <div className={styles.dynamicContent}>  <h1>hello world </h1> </div>
//      <div className={styles.innerDiv}>
//      {
//         fruits.map((fruit,id)=>(
//           <Card key={id} image={fruit.image} name={fruit.name} description={fruit.description}/>
//         ))
//       }
//      </div>
//     </div>
//   )
// }
// export default FaQ

// import React, { useState, useEffect } from 'react';
// import styles from "./FaQ.module.css";
// import Card from './Card';
// import { getFAQs, createFAQ } from './api'; // Ensure these functions are correctly implemented in your `api.js`

// const FaQ = () => {
//   const [faqs, setFAQs] = useState([]);
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');

//   useEffect(() => {
//     const fetchFAQs = async () => {
//       try {
//         const data = await getFAQs(); // Fetch FAQs from backend
//         setFAQs(data); // Update state with fetched data
//       } catch (error) {
//         console.error('Error fetching FAQs:', error);
//       }
//     };
//     fetchFAQs();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!question || !answer) return; // Ensure both fields are filled

//     const newFAQ = { question, answer, image: 'default-image-url' }; // Placeholder image URL
//     try {
//       await createFAQ(newFAQ); // Send new FAQ to backend
//       setFAQs([...faqs, newFAQ]); // Update local state
//       setQuestion('');
//       setAnswer('');
//     } catch (error) {
//       console.error('Error adding FAQ:', error);
//     }
//   };

//   return (
//     <div className={styles.mainDiv}>
//       <div className={styles.dynamicContent}>
//         <h1>Add a New FAQ</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Question"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             required
//           />
//           <textarea
//             placeholder="Answer"
//             value={answer}
//             onChange={(e) => setAnswer(e.target.value)}
//             required
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <div className={styles.innerDiv}>
//         { faqs && faqs.map((faq, id) => (
//           <Card 
//             key={id} 
//             image={faq.image || 'default-image-url'} 
//             name={faq.question} 
//             description={faq.answer} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FaQ;


// //CORRECT 
// import React, { useState, useEffect } from 'react';
// import styles from "./FaQ.module.css";
// import Card from './Card';
// import { getFAQs, createFAQ } from './api'; // Ensure these functions are correctly implemented in your `api.js`

// const FaQ = () => {
//   const [faqs, setFAQs] = useState([]);
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');



//   useEffect(() => {
//     const fetchFAQs = async () => {
//       try {
//         const data = await getFAQs(); // Fetch FAQs from backend
//         setFAQs(data); // Update state with fetched data
//       } catch (error) {
//         console.error('Error fetching FAQs:', error);
//       }
     
//     };
//     fetchFAQs();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!question || !answer) return; // Ensure both fields are filled

//     const newFAQ = { question, answer, image: 'default-image-url' }; // Placeholder image URL
//     try {
//       await createFAQ(newFAQ); // Send new FAQ to backend
//       setFAQs([...faqs, newFAQ]); // Update local state
//       setQuestion('');
//       setAnswer('');
//     } catch (error) {
//       console.error('Error adding FAQ:', error);
//     }
//   };

//   return (
//     <div className={styles.mainDiv}>
//       <div className={styles.dynamicContent}>
//         <h1>Add a New FAQ</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Question"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             required
//           />
//           <textarea
//             placeholder="Answer"
//             value={answer}
//             onChange={(e) => setAnswer(e.target.value)}
//             required
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <div className={styles.innerDiv}>
//         {faqs && faqs.map((faq, id) => (
//           <Card 
//             key={id} 
//             image={faq.image || 'default-image-url'} 
//             name={faq.question} 
//             description={faq.answer} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FaQ;

import allUp from "../../assets/fruitsPic/allUp.jpg"
import apple from "../../assets/fruitsPic/apple.jpg"
import kiwi from "../../assets/fruitsPic/kiwi.jpg"
import Grapefruit from "../../assets/fruitsPic/Grapefruit.jpg"
import Pomegranate from "../../assets/fruitsPic/Pomegranate.jpg"
import ppya from "../../assets/fruitsPic/ppya.jpg"
import Strawberry from "../../assets/fruitsPic/Strawberry.jpg";
import Blueberry from "../../assets/fruitsPic/Blueberry.jpg";
import { ToastContainer, toast } from 'react-toastify';

import React, { useState, useEffect } from 'react';
import styles from "./FaQ.module.css";
import Card from './Card';
import { getFAQs, createFAQ } from './api'; // Ensure these functions are correctly implemented in your `api.js`
import { useNavigate } from "react-router-dom"

const FaQ = () => {
  const initialFAQs = [
    {
      name: " How is Blueberry healthy?",
      description: "Blueberries are rich in antioxidants and vitamin C, which help improve brain function and support heart health.",
      image: Blueberry
    },
    {
      name: "Papaya How is Papaya healthy?",
      description: "Papayas are loaded with enzymes that aid digestion and are a great source of vitamin C, helping to boost the immune system.",
      image: ppya
    },
    {
      name: "How is Kiwi healthy?",
      description: "Kiwis are packed with vitamins C and E, promoting better skin health and supporting the immune system with their antioxidant properties.",
      image: kiwi
    },
    {
      name: " How is Pomegranate healthy?",
      description: "Pomegranates are high in antioxidants and vitamin C, which may help reduce inflammation and improve heart health.",
      image: Pomegranate
    },
    {
      name: " How is Strawberry healthy?",
      description: "Strawberries are rich in vitamin C and manganese, which support heart health and have anti-inflammatory properties.",
      image: Strawberry
    },
    {
      name: " How is Grapefruit healthy?",
      description: "Grapefruits are a great source of vitamin C and fiber, which can help support the immune system and improve digestion.",
      image: Grapefruit
    }
  ];

  const [faqs, setFAQs] = useState(initialFAQs);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const nav = useNavigate();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"))
    if(!token){
        nav("/login")
    }
    const fetchFAQs = async () => {
      try {
        const data = await getFAQs();
        setFAQs([...data,...initialFAQs]);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };
    fetchFAQs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question || !answer) return; 

    const newFAQ = { question, answer, image: allUp }; // Placeholder image URL
    try {
      await createFAQ(newFAQ); // Send new FAQ to backend
      setFAQs([...faqs, newFAQ]); // Update local state
      setQuestion('');
      setAnswer('');
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.dynamicContent}>
      
        <h1>FaQ Section</h1>

        <form className={styles.forms} onSubmit={handleSubmit}>
          <input
            type="text" className={styles.inputQuestion}
            placeholder="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <textarea
          className={styles.inputAnswer}
            placeholder="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          <input className={styles.inputQuestion} type="text" placeholder="imageUrl" />
          <button type="submit" className={styles.submitBtn}>ADD</button>
        </form>
      </div>
      <div className={styles.innerDiv}>
        {faqs && faqs.map((faq, id) => (
          <Card 
            key={id} 
            image={faq.image || 'default-image-url'} 
            name={faq.name || faq.question} 
            description={faq.description || faq.answer} 
          />
        ))}
      </div>
    </div>
  );
};

export default FaQ;
