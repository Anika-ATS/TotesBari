import React from "react";

const Accordian = () => {
  return (
    <div className="m-5 gap-3 mb-5">
      <div className="collapse collapse-arrow bg-base-200 mb-3 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className=" collapse-content ">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
