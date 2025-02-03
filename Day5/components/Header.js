// Format 1 for Component

// function Header(){
//     return(
//         <div>
//             <p>
//                 My first react application
//             </p>
//         </div>
//     )
// }
// export default Header;


// Format 2 for Component

import React from 'react';
import './style.css';
class Header extends React.Component{
    render(){
        return(
            <div>
                <p className='para'>
                    <b>Header component.</b> Welcome to the React Session.
                </p>
                
                <button className='btn'>Click Me</button>
            </div>
        )
    }
}
export default Header;


// format 3 for component
// const Header = () => {
//     return (
//         <div>
//             <h1>Header</h1>
//         </div>
//     )
// }
// export default Header;
