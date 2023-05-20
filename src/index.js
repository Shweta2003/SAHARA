import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App />
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// import React, { useState, useEffect, useRef } from 'react';

// function AnimatedText() {
//   const [isVisible, setIsVisible] = useState(false);
//   const animatedTextRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       });
//     });

//     observer.observe(animatedTextRef.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className="section">
//       <h1 className={isVisible ? 'animated-text show' : 'animated-text'} ref={animatedTextRef}>Hello, World!</h1>
//     </div>
//   );
// }