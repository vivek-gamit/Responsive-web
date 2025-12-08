import React from 'react'

function ResponsiveBox() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div
        className="
          w-[90%] max-w-3xl 
          rounded-xl 
          text-white 
          text-center 
          p-4 
          bg-red-500 
          sm:p-6 
          md:p-8 md:bg-orange-500 
          lg:p-10 lg:bg-green-500
        "
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
          Tailwind Responsive Box
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          Resize the screen:
          <br />
          Red = mobile, Orange = tablet, Green = desktop.
        </p>
      </div>
    </div>
  );
}

export default ResponsiveBox;

