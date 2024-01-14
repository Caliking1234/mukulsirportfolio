import React from "react";

const Insta = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-around py-5">
      <blockquote className=" mx-auto instagram-media bg-white border border-3 border-solid rounded-3 shadow-sm max-w-screen-md min-w-screen-sm p-0 w-99.375 w-calc w-[280px]">
        <div className="p-16">
          <a
            href="https://www.instagram.com/p/Cz_sfAqJUFl/?utm_source=ig_embed&amp;utm_campaign=loading"
            className="bg-white line-height-0 p-0 text-center no-underline w-full"
            target="_blank"
          >
            <div className="flex items-center">
              <div className="bg-gray-200 rounded-full flex-grow-0 h-40 mr-14 w-40"></div>
              <div className="flex flex-col flex-grow-1 justify-center">
                <div className="bg-gray-200 rounded flex-grow-0 h-14 mb-6 w-100"></div>
                <div className="bg-gray-200 rounded flex-grow-0 h-14 w-60"></div>
              </div>
            </div>
            <div className="p-19"></div>
            <div className="block h-50 mx-auto mb-12 w-50">
              <svg
                width="50"
                height="50"
                viewBox="0 0 60 60"
                xmlns="https://www.w3.org/2000/svg"
                // xmlns:xlink="https://www.w3.org/1999/xlink"
              >
                {/* ...SVG path data */}
              </svg>
            </div>
            {/* ...Remaining code */}
          </a>
        </div>
      </blockquote>
      <blockquote
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/CzflZzCrVbH/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        className=" mx-auto instagram-media bg-white border border-3 border-solid rounded-3 shadow-sm max-w-screen-md min-w-screen-sm p-0 w-99.375 w-calc w-[280px]"
      >
        <div className="p-16">
          <a
            href="https://www.instagram.com/p/CzflZzCrVbH/?utm_source=ig_embed&amp;utm_campaign=loading"
            className="bg-white line-height-0 p-0 text-center no-underline w-full"
            target="_blank"
          >
            <div className="flex items-center">
              <div className="bg-gray-200 rounded-full flex-grow-0 h-40 mr-14 w-40"></div>
              <div className="flex flex-col flex-grow-1 justify-center">
                <div className="bg-gray-200 rounded flex-grow-0 h-14 mb-6 w-100"></div>
                <div className="bg-gray-200 rounded flex-grow-0 h-14 w-60"></div>
              </div>
            </div>
            <div className="p-19"></div>
            <div className="block height:50px margin:0 auto mb-12 width:50px">
              <svg
                className="w-50 h-50"
                viewBox="0 0 60 60"
                xmlns="https://www.w3.org/2000/svg"
                // xmlns:xlink="https://www.w3.org/1999/xlink"
              >
                {/* ... SVG Path */}
              </svg>
            </div>
            <div className="pt-8">
              <div
                className="text-blue-500 font-bold text-sm"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                View this post on Instagram
              </div>
            </div>
            {/* ... Rest of the Instagram Embed Code */}
          </a>
        </div>
      </blockquote>
      <blockquote className="instagram-media bg-white border border-3 border-solid rounded-3 shadow-sm mx-auto max-w-screen-md min-w-screen-sm p-0 w-99.375 w-calc w-[280px]">
        <div className="p-4">
          <a
            href="https://www.instagram.com/p/CzTaCKlPqMv/?utm_source=ig_embed&amp;utm_campaign=loading"
            className="block bg-white line-height-0 p-0 text-center text-decoration-none w-full"
            target="_blank"
          >
            <div className="flex items-center">
              <div className="bg-gray-300 border-radius-50% flex-grow-0 h-10 mr-4 w-10"></div>
              <div className="flex flex-col flex-grow-1 justify-center">
                <div className="bg-gray-300 border-radius-4 flex-grow-0 h-4 mb-2 w-20"></div>
                <div className="bg-gray-300 border-radius-4 flex-grow-0 h-4 w-12"></div>
              </div>
            </div>
            <div className="pt-19%"></div>
            <div className="block height-50px mx-auto mb-12 width-50px">
              {/* Include your SVG here */}
            </div>
            <div className="pt-8">
              <div className="text-blue-500 font-bold text-14px">
                View this post on Instagram
              </div>
            </div>
            <div className="pt-12.5%"></div>
            {/* Include the rest of your content */}
          </a>
          {/* Include the rest of your content */}
        </div>
      </blockquote>
      <script async src="//www.instagram.com/embed.js"></script>
    </div>
  );
};

export default Insta;
