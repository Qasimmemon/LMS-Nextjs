import Course from "@/component/datatable/coursetble";

export default function Courses() {
    return (
      <div className="min-h-screen p-10">
        <h1 className="text-4xl font-bold text-center">Courses</h1>

        <div className="my-5">
          <Course />
        </div>
      </div>
    );
  }