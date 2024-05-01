"use client";
import { FaLinkedin } from "react-icons/fa";
import { linkedinData } from "@/data";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  function getMonthShortName(monthNumber: number) {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    // Check if the input is a valid month number (1-12)
    if (monthNumber < 1 || monthNumber > 12) {
      return "Invalid month number";
    }

    // Return the corresponding month name from the array
    return months[monthNumber - 1];
  }
  const user = linkedinData[10];
  const [showAllSummarry, setShowAllSummary] = useState<boolean>(false);
  const [showAllCertificate, setShowAllCertificate] = useState<boolean>(false);
  const [showAllPostions, setShowAllPostions] = useState<boolean>(false);
  const [showAllEducation, setShowAllEducation] = useState<boolean>(false);
  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);
  const [showAllSkills, setShowAllSkilss] = useState<boolean>(false);

  return (
    <main className="h-full w-full text-white ">
      <div
        className="h-full w-full flex flex-col px-12 pt-14 bg-cover  "
        style={{ backgroundImage: "url('1280_-_MAX.jpg')" }}
      >
        <div className="flex w-full">
          <h1 className="w-4/5 text-9xl">
            {user.firstName.toUpperCase()}
            <br />
            {user.lastName.toUpperCase()}
          </h1>
          <div className="w-1/5 flex space-x-8 justify-end items-start text-2xl ">
            <span className="cursor-pointer">Hin</span>
            <span className="text-yellow-300 cursor-pointer">Eng</span>
          </div>
        </div>
        <div className="my-8 w-full h-16 border-y-4 border-white flex justify-between  px-6">
          <div className="flex h-full space-x-8 text-xl justify-center items-center">
            {user.position && <span className="cursor-pointer">Postions</span>}
            {user.educations && (
              <span className="cursor-pointer">Education</span>
            )}
            {(user.certifications || user.courses) && (
              <span className="cursor-pointer">Certicate & Courses</span>
            )}
            {(user.languages || user.skills) && (
              <span className="cursor-pointer">Skills & Language</span>
            )}
          </div>
          <div className="flex justify-end items-center">
            <Link href={`https://www.linkedin.com/in/${user.username}`}>
              <FaLinkedin className="text-3xl cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between">
          <div className=" flex flex-col space-y-8">
            <h2 className="text-3xl border-l-4 border-white pl-3 font-semibold mt-5">
              {user.headline.toUpperCase()}
            </h2>
            <h2 className="text-2xl font-light " style={{ wordSpacing: "6px" }}>
              {user.summary
                .slice(0, showAllSummarry ? user.summary.length : 400)
                .toUpperCase()}
              {user.summary.length > 400 && (
                <span
                  className="underline pl-2 cursor-pointer"
                  onClick={() => {
                    setShowAllSummary((prev) => !prev);
                  }}
                >
                  {showAllSummarry ? "show less" : "show more"}
                </span>
              )}
            </h2>
          </div>
          <div className="pl-14 pr-6 flex justify-end ">
            <div
              className="w-[450px] h-96 bg-cover bg-no-repeat rounded-xl grayscale"
              style={{
                backgroundImage: `url(${user.profilePicture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
        <div className="h-20"></div>
        <div className=" h-full  grid grid-cols-2 grid-rows-auto  border-t-4 border-white ">
          {/* postions */}
          {user.position && (
            <div className="flex flex-col w-full h-auto px-12  ">
              <div className="flex justify-start items-center h-44 ">
                <h2 className="text-6xl">POSTIONS</h2>
              </div>
              {user.position
                .slice(0, showAllPostions ? user.position.length : 2)
                .map((postion, i) => (
                  <div
                    key={
                      postion.start.day +
                      postion.start.month +
                      postion.start.year
                    }
                    className="flex space-x-6 "
                  >
                    <div className="flex flex-col ">
                      <img
                        src={
                          postion.companyLogo
                            ? postion.companyLogo
                            : "default-image.jpeg"
                        }
                        className="w-24 h-24 min-w-24 min-h-24 rounded-full border-2 border-white"
                      />
                      {i !== user.position.length - 1 && (
                        <div
                          className={`flex w-full justify-center items-center h-auto min-h-20`}
                        >
                          <div className="h-full border"></div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col justify-start items-start ">
                      <span className="text-xs">
                        {postion.start.month && postion.start.year
                          ? `${getMonthShortName(postion.start.month)}.${
                              postion.start.year
                            }`
                          : ""}
                        {postion.end.month && postion.end.year
                          ? ` ·   ${getMonthShortName(postion.end.month)}.${
                              postion.end.year
                            }`
                          : ""}
                      </span>
                      <h3 className="text-lg font-semibold">{postion.title}</h3>
                      <h3 className="text-xs font-semibold">
                        {postion.companyName.toUpperCase()}
                      </h3>
                      <span className="text-xs">
                        {postion.companyIndustry &&
                          `Industry : ${postion.companyIndustry}`}
                      </span>
                      <span className="text-xs">{postion.location}</span>
                      <span className="text-xs">
                        {postion.companyStaffCountRange &&
                          `Company Staff Range : ${postion.companyStaffCountRange}`}
                      </span>
                      <span className="text-xs ">
                        {postion.description.slice(0, 200)}
                      </span>
                    </div>
                  </div>
                ))}
              {user.position.length > 2 ? (
                <span
                  className="text-base underline cursor-pointer"
                  onClick={() => setShowAllPostions((prev) => !prev)}
                >
                  {showAllPostions ? "show less" : "show more"}
                </span>
              ) : (
                ""
              )}
            </div>
          )}

          {/* education */}
          {user.educations && (
            <div className="flex flex-col w-full px-12 ">
              <div className="flex justify-start  items-center h-44 ">
                <h2 className="text-6xl">Education</h2>
              </div>
              {user.educations
                .slice(0, showAllEducation ? user.educations.length : 2)
                .map((education, i) => (
                  <div
                    key={
                      education.start.day +
                      education.start.year +
                      education.schoolId
                    }
                    className="flex space-x-6 "
                  >
                    <div className="flex flex-col ">
                      <img
                        src={`https://media.licdn.com/dms/image/D560BAQHK5zP2639Puw/company-logo_200_200/0/1692179579650/reva_university_logo?e=1722470400&v=beta&t=zhYxj1cIiRhltf-0kiU6hB2jMKi4ILzS_un33UiS2PU`}
                        className="w-24 h-24 min-w-24 min-h-24 rounded-full border-2 border-white"
                      />
                      {i !== user.educations.length - 1 && (
                        <div
                          className={`flex w-full justify-center items-center h-auto min-h-20`}
                        >
                          <div className="h-full border"></div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-start items-start ">
                      <span className="text-xs">
                        {education.start.year ? `${education.start.year}` : ""}
                        {education.end.year ? ` · ${education.end.year}` : ""}
                      </span>
                      <h3 className="text-lg font-semibold">
                        {education.degree}
                      </h3>
                      <h3 className="text-xs font-semibold">
                        {education.schoolName.toUpperCase()}
                      </h3>

                      <span className="text-xs">
                        {education.fieldOfStudy
                          ? `Field Of Study : ${education.fieldOfStudy}`
                          : ""}
                      </span>
                      <span className="text-xs">
                        {education.grade ? `grade : ${education.grade}` : ""}
                      </span>
                      {/* <span className="text-xs">
                      {postion.companyStaffCountRange &&
                        `Company Staff Range : ${postion.companyStaffCountRange}`}
                    </span> */}
                      <span className="text-xs w-3/6">
                        {education.description.slice(0, 200)}
                      </span>
                    </div>
                  </div>
                ))}
              {user.educations.length > 2 ? (
                <span
                  className="text-base underline cursor-pointer"
                  onClick={() => setShowAllEducation((prev) => !prev)}
                >
                  {showAllEducation ? "show less" : "show more"}
                </span>
              ) : (
                ""
              )}
            </div>
          )}

          {/* certifications  */}
          {user.certifications && (
            <div className="flex flex-col w-full px-12 ">
              <div className="flex justify-start  items-center h-44 ">
                <h2 className="text-6xl">Certifications</h2>
              </div>

              <div className="flex flex-col ">
                {user.certifications
                  .slice(0, showAllCertificate ? user.certifications.length : 2)
                  .map((data, i) => (
                    <div key={data.name} className="flex space-x-6">
                      <div className="flex flex-col ">
                        <img
                          src={
                            data.company.logo
                              ? data.company.logo
                              : "default-image2.png"
                          }
                          className="w-24 h-24 min-w-24 min-h-24 rounded-xl border-2 border-white"
                        />
                        {i !== user.certifications.length - 1 && (
                          <div
                            className={`flex w-full justify-center items-center h-auto min-h-16`}
                          >
                            <div className="h-full border"></div>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col justify-start items-start w-4/6 pt-3">
                        <h3 className={`font-semibold text-lg`}>{data.name}</h3>
                        <h4 className=" text-sm">{data.authority}</h4>
                        <span className=" text-xs">
                          {getMonthShortName(data.start.month)}.
                          {data.start.year}
                        </span>
                      </div>
                    </div>
                  ))}
                {user.certifications.length > 2 ? (
                  <span
                    className="text-base underline cursor-pointer"
                    onClick={() => setShowAllCertificate((prev) => !prev)}
                  >
                    {showAllCertificate ? "show less" : "show more"}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}

          {/* courses  */}
          {user.courses && (
            <div className="flex flex-col w-full px-12  ">
              <div className="flex justify-start  items-center h-44 ">
                <h2 className="text-6xl">Courses</h2>
              </div>
              <div className="flex flex-col gap-6">
                {user.courses
                  .slice(0, showAllCourses ? user.courses.length : 5)
                  .map((course) => (
                    <div key={course.name} className="flex space-x-5">
                      <div className="h-3 w-3 sm:h-4 sm:w-4 min-h-3 min-w-3 sm:min-h-4 sm:min-w-4 bg-white rounded-full"></div>
                      <h3 className={` text-2xl `}>{course.name}</h3>
                    </div>
                  ))}
                {user.courses.length > 5 ? (
                  <span
                    className="text-base underline cursor-pointer"
                    onClick={() => setShowAllCourses((prev) => !prev)}
                  >
                    {showAllCourses ? "show less" : "show more"}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}

          {/* skills */}

          {user.skills && (
            <div className="flex flex-col w-full px-12">
              <div className="flex justify-start  items-center h-44 ">
                <h2 className="text-6xl">Skills</h2>
              </div>
              <div className="flex flex-col gap-6">
                {user.skills
                  .slice(0, showAllSkills ? user.skills.length : 5)
                  .map((skills) => (
                    <div
                      key={skills.name}
                      className="flex space-x-6 justify-start items-center"
                    >
                      <div className="h-3 w-3 sm:h-4 sm:w-4 min-h-3 min-w-3 sm:min-h-4 sm:min-w-4 bg-white rounded-full"></div>
                      <h3 className=" text-2xl">{skills.name}</h3>
                    </div>
                  ))}
                {user.skills.length > 5 ? (
                  <span
                    className="text-base underline cursor-pointer"
                    onClick={() => setShowAllSkilss((prev) => !prev)}
                  >
                    {showAllSkills ? "show less" : "show more"}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}

         
        </div>
        <div className="w-full flex justify-center mt-40">
          <div
            className="h-auto w-full  bg-white rounded-x-3xl rounded-t-3xl
          flex flex-col space-y-3 text-[#FF3175] justify-center items-center py-6 "
          >
            <h4 className="text-lg">
              Hey connect with me on{" "}
              <Link
                href={`https://www.linkedin.com/in/${user.username}`}
                className="underline"
              >
                Linkedin
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}
