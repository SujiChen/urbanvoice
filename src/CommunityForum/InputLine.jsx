//import React from 'react';
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@800&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const OneLineInput = () => {
    const containerStyle = {
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#f0f8ff', // Light blue background
        // padding: '1rem'
        width: '600px'
      };
    
      const inputStyle = {
        width: '100%',
        maxWidth: '600px',
        padding: '0.75rem',
        fontSize: '1rem',
        color: '#555', // Slightly muted text color
        border: '1px solid #ddd', // Light gray border
        borderRadius: '6px', // Rounded corners
        outline: 'none',
        boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
        transition: 'border-color 0.2s ease-in-out',
        fontFamily: "'Abhaya Libre', serif"
      };
    
      /*const placeholderStyle = {
       // color: '#aaa' // Placeholder color
      };*/
      // const placeholderStyle = { color: 'gray' }; // Commented out as it is unused
    
      return (
        <div style={containerStyle}>
          <input
            type="text"
            style={inputStyle}
            placeholder="Search discussions..."
            onFocus={(e) => e.target.style.borderColor = '#a0a0a0'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>
      );
};

export default OneLineInput;
