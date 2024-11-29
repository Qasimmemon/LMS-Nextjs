import { UserTrainerModal } from "@/component/Addmodel/studenmadal";
import { UserTrainerTable } from "@/component/datatable/student";

export default function Trainers() {
    return (
      <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
        <h1 className="text-3xl font-bold text-center">Students</h1>
        <UserTrainerModal />
      </div>

      <UserTrainerTable />
    </div>
    );
  }