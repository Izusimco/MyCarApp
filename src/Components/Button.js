// Button.js

import React from 'react';

const Button = ({ title, onClick }) => {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <div className="mt-2">
      <button className="btn btn-warning w-100 border border-dark" onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;




// import React from 'react';

// const Button = ({ title, onClick, type, selected }) => {
//   const handleClick = () => {
//     onClick(type === 'color' ? title : title.toLowerCase());
//   };

//   return (
//     <div className={`mt-4 ${selected ? 'selected' : ''}`}>
//       <button
//         className="btn btn-warning w-100 border border-dark"
//         onClick={handleClick}
//       >
//         {title}
//       </button>
//     </div>
//   );
// };

// export default Button;
