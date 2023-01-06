import React from 'react'
import './dropdowd.css'
import { GrUnorderedList } from "react-icons/gr"

const DropdonwSelect = () => {
    const handleMenuOne = () => {
        console.log('clicked one');
      };
    
      const handleMenuTwo = () => {
        console.log('clicked two');
      };
    
      return (
        <Dropdown
          trigger={ <GrUnorderedList size="1.5rem" className='icon-list-menu'/> }
          menu={[
            <button onClick={handleMenuOne}>Nombre</button>,
            <button onClick={handleMenuTwo}>Precio</button>,
          ]}
        />
      );
    };
    
    const Dropdown = ({ trigger, menu }) => {
      const [open, setOpen] = React.useState(false);
    
      const handleOpen = () => {
        setOpen(!open);
      };
    
      return (
        <div className="dropdown">
          {React.cloneElement(trigger, {
            onClick: handleOpen,
          })}
          {open ? (
            <ul className="menu">
              {menu.map((menuItem, index) => (
                <li key={index} className="menu-item">
                  {React.cloneElement(menuItem, {
                    onClick: () => {
                      menuItem.props.onClick();
                      setOpen(false);
                    },
                  })}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      );
}

export default DropdonwSelect



