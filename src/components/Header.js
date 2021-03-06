import { Icon } from '@iconify/react';
import nasaIcon from '@iconify/icons-mdi/fire';

const Header = () => {
   return (
      <header className="header">
         <h1>
         <span>
            <Icon icon={nasaIcon}/>
         </span>
            MAti Nature Tracker  events (NASA Api) 
         </h1>
         
      </header>
   )
}

export default Header
