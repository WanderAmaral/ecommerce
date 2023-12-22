import React from 'react';

const LoginPage = () => {
  return (
    <div className="h-full flex items-center justify-center">
      {/* LoginContainer */}
      <div className="flex flex-col items-center border w-450px">
        {/* LoginContent */}
        <div className="font-semibold text-sm text-primary">
          {/* LoginHeadline */}
          <p className="font-weight-600 text-1.3rem mb-20 text-dark">Login Headline</p>

          {/* LoginSubtitle */}
          <div className="text-dark pb-20 border-b-1 border-zinc-900 w-full mt-20 text-center font-medium mb-20">
            <h1 className="text-primary">Hello world</h1>

            {/* LoginInputContainer */}
            <div className="w-full mb-10">
              <p className="font-weight-600 mb-5">Label 1</p>
              <input className="w-full border-black" />
            </div>

            <div className="w-full">
              <p className="font-weight-600 mb-5">Label 2</p>
              <input className="w-full" />
            </div>
            {/* End LoginInputContainer */}

            {/* Button */}
            {/* Add your button component or Tailwind CSS classes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
