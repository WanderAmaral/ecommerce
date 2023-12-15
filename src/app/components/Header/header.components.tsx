import {BsCart} from 'react-icons/bs'

const Header = () => {
    return (
      <div className="bg-[#212529] w-full flex justify-between p-4 text-[#f8f9fa]"> {/* Header-container */}
        <div className="flex items-center"> {/* Header-items-container */}
          <h1 className="text-lg mr-4">Ecommerce</h1> {/* header-title */}
        </div>
        <div className="flex items-center gap-8"> {/* Header-items */}
          <div className="font-semibold text-sm">Login</div> {/* Header-item */}
          <div className="font-semibold text-sm">Explorar</div> {/* Header-item */}
          <div className="font-semibold text-sm">Conta</div> {/* Header-item */}
          <div className="flex font-semibold text-sm"><BsCart size={20}/><p className='ml-1'>5</p></div> {/* Header-item */}
        </div>
      </div>
    );
  };
  
  

export default Header;
