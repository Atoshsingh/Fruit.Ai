import React, { useEffect } from 'react';
import ChatBot from 'react-simple-chatbot'; // Ensure this is the correct import
import styles from "./Chat.module.css";
import { useNavigate } from 'react-router-dom';
const fruitData = {
  
  Apple: {
    description: "Apples are nutritious and rich in vitamins.",
    price: "₹100/kg",
    goodThing: "An apple a day keeps the doctor away!",
  },
  Banana: {
    description: "Bananas are high in potassium and energy-boosting.",
    price: "₹40/kg",
    goodThing: "Bananas are a great source of energy and help with digestion!",
  },
  Orange: {
    description: "Oranges are known for their vitamin C content.",
    price: "₹80/kg",
    goodThing: "Oranges boost your immune system with high vitamin C!",
  },
  Mango: {
    description: "Mangoes are sweet and delicious, the king of fruits!",
    price: "₹120/kg",
    goodThing: "Mangoes are rich in antioxidants and boost skin health!",
  },
  Grapes: {
    description: "Grapes are small but packed with antioxidants.",
    price: "₹90/kg",
    goodThing: "Grapes improve heart health and are great for hydration!",
  },
  Pineapple: {
    description: "Pineapples are tropical and high in vitamin C.",
    price: "₹150/kg",
    goodThing: "Pineapples are anti-inflammatory and aid digestion!",
  },
};

const steps = [
  {
    id: '1',
    message: 'What is your first name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: 'greet',
  },
  {
    id: 'greet',
    message: 'Hello {previousValue}, nice to meet you!',
    trigger: 'ask-see-fruits',
  },
  {
    id: 'ask-see-fruits',
    message: 'Would you like to see all the fruits we have in stock with their prices?',
    trigger: 'see-fruits-options',
  },
  {
    id: 'see-fruits-options',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'show-fruit-list' },
      { value: 'no', label: 'No', trigger: 'no-help' },
    ],
  },
  {
    id: 'show-fruit-list',
    message: 'Here are the fruits we have in stock with their prices:',
    trigger: 'fruit-list',
  },
  {
    id: 'fruit-list',
    options: Object.keys(fruitData).map((fruit) => ({
      value: fruit,
      label: `${fruit} - ${fruitData[fruit].price}`,
      trigger: 'fruit-selected',
    })),
  },
  {
    id: 'fruit-selected',
    message: 'Thanks for choosing {previousValue}. This will be delivered shortly!',
    trigger: 'fruit-good-thing',
  },
  {
    id: 'fruit-good-thing',
    message: ({ previousValue }) => {
      const fruit = fruitData[previousValue];
      return `${fruit.goodThing}`;
    },
    end: true,
  },
  {
    id: 'no-help',
    message: 'How may I assist you today?',
    trigger: 'user-needs',
  },
  {
    id: 'user-needs',
    options: [
      { value: 'order-status', label: 'Check my order status', trigger: 'order-status' },
      { value: 'return', label: 'Request a return', trigger: 'return' },
      { value: 'recommend', label: 'Get fruit recommendations', trigger: 'recommend' },
    ],
  },
  {
    id: 'order-status',
    message: "You can check your order status by visiting your account page.",
    end: true,
  },
  {
    id: 'return',
    message: "To request a return, please contact our support team.",
    end: true,
  },
  {
    id: 'recommend',
    message: "I recommend trying Mangoes! They are delicious and full of nutrients.",
    end: true,
  },
];

const Chat = () => {
  const nav = useNavigate();
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token"))
        if(!token){
            nav("/login")
        }
    },[])
  return (
    <div className={styles.mainDiv}>
      <div className={styles.innerDiv}>
        <span className={styles.text}>Hello <span className={styles.chat}>Chat.</span> </span>
           <ChatBot 
      steps={steps}
      floating={true}
      botDelay={1000}
      headerTitle="Fruit.Ai ChatBot"
    />
      </div>
    </div>
  );
}

export default Chat;
