import { BatchModal } from "@/component/Addmodel/batchmodal";
import BatchesTable from "@/component/datatable/batchtable";


export default function Batche() {
    return (
      <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
        <h1 className="text-3xl font-bold text-center">Batches</h1>
        <BatchModal />
      </div>

      <BatchesTable />
    </div>
    );
  }