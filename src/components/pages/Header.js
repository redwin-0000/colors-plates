import React from 'react';

function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center  md:ml-auto">
      <h6 className="mr-5 hover:text-gray-900 text-2xl">UI Color</h6>
     
      
    </nav>
    <h1 className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <span className="ml-3 text-xl">Colors Plates</span>
    </h1>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    </div>
  </div>
</header>
    </>
  );
}

export default Header;