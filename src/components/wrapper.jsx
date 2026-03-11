import React from 'react';

function Wrapper({children, className}) {
  return (
    <div
      className="flex items-center justify-center w-full
        flex-col md:flex-row md:gap-10">
      {children}
    </div>
  );
}

export default Wrapper;