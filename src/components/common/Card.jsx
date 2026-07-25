import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ListCard = ({
  images,
  title
}) => {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow">
      <div
        className=" group w-full h-20 bg-white rounded-xl px-4 flex items-center justify-between transition-all duration-300 cursor-pointer "
      >
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-xl bg-sky-50 flex items-center justify-center p-2">
            <img
              src={images}
              alt="English"
              className=" object-cover"
            />
          </div>

          <p className="text-base font-medium text-slate-700">
            {title}
          </p>
        </div>

        <NavigateNextIcon
          className="
            text-slate-400
            transition-all duration-300
            group-hover:translate-x-1
            group-hover:text-sky-500
          "
        />
      </div>
    </div>
  );
};

export default ListCard;