import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  // SAFER DATE HANDLING
  const daysAgoFunction = (mongodbTime) => {
    if (!mongodbTime) return "Recently";

    const createdAt = new Date(mongodbTime);
    const currentDate = new Date();
    const differenceInTime = currentDate - createdAt;
    const differenceInDays = Math.floor(
      differenceInTime / (1000 * 3600 * 24)
    );

    return differenceInDays;
  };

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 hover:scale-105 transition-all duration-500 h-full flex flex-col">
      
      {/* TOP SECTION */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      {/* COMPANY INFO */}
      <div className="flex gap-2 items-center my-3">
        <Button variant="outline" size="icon" className="p-6">
          <Avatar>
            <AvatarImage
              src={
                job?.company?.logo ||
                "https://th.bing.com/th/id/OIP.NU9zscMHAn83CpLA9fDjrgHaHa?rs=1&pid=ImgDetMain"
              }
            />
          </Avatar>
        </Button>

        <div>
          <h1 className="font-medium text-lg md:text-xl">
            {job?.company?.companyName || "Company Name"}
          </h1>
          <p className="text-sm text-gray-600">
            {job?.location || "India"}
          </p>
        </div>
      </div>

      {/* JOB DETAILS */}
      <div>
        <h1 className="font-bold text-lg my-2">
          {job?.title}
        </h1>
        <p className="text-sm text-gray-600 line-clamp-3">
          {job?.description}
        </p>
      </div>

      {/* BADGES */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge variant="ghost" className="text-blue-700 font-bold">
          {job?.position || 0} positions
        </Badge>

        <Badge variant="ghost" className="text-[#F83002] font-bold">
          {job?.jobType || "N/A"}
        </Badge>

        <Badge variant="ghost" className="text-[#7209b7] font-bold">
          {typeof job?.salary === "number"
            ? `${job.salary} LPA`
            : "Salary Not Disclosed"}
        </Badge>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex items-center gap-4 mt-auto pt-4">
        <Button
          variant="outline"
          onClick={() => navigate(`/description/${job?._id}`)}
        >
          Details
        </Button>

        <Button className="bg-[#7209b7] hover:bg-[#5a059c]">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
