import Batches from "@/component/datatable/batchtable";


export default function Batche() {
    return (
      <div className="min-h-screen p-10">
        <h1 className="text-4xl font-bold text-center">Batches</h1>

        <div className="my-5">
          <Batches />
        </div>
      </div>
    );
  }