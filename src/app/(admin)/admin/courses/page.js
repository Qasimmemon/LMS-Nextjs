import { CourseDialog } from "@/component/Addmodel/cursemodal";
import CourseTable from "@/component/datatable/coursetble";

export default function Courses() {
    return (
      <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
        <h1 className="text-3xl font-bold text-center">Courses</h1>
        <CourseDialog />
      </div>
      <CourseTable />
    </div>
    );
  }