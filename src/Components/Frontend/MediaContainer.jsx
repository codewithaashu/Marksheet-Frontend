import React from "react";

const MediaContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-5 w-[694px] px-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-[28px] font-semibold border-b-[1px] border-gray-400">
            Media
          </h1>
          <div className="grid grid-cols-5 justify-between gap-y-5 gap-x-3">
            <img src="https://rios.ac.in/images-2/media/13.jpg" alt="Media1" />
            <img src="https://rios.ac.in/images-2/media/14.jpg" alt="Media2" />
            <img src="https://rios.ac.in/images-2/media/14.jpg" alt="Media3" />
            <img src="https://rios.ac.in/images-2/media/15L.jpg" alt="Media4" />
            <img src="https://rios.ac.in/images-2/media/17.jpg" alt="Media5" />
            <img src="https://rios.ac.in/images-2/media/18.jpg" alt="Media6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaContainer;
