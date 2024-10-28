import StudentTable from "@/component/datatable/student";

export default function Students() {
    return (
      <div className="min-h-screen p-10">
        <h1 className="text-4xl font-bold text-center">Student</h1>


        <div className="my-5">
         <StudentTable />
        </div>
      </div>
    );
  }