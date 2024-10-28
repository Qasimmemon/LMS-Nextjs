export default function Trainer(){
    return(

<div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
        Course name
        </th>
        <th scope="col" className="px-6 py-3">
          Experience
        </th>
        <th scope="col" className="px-6 py-3">
          Language
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Sir Bilal
        </th>
        <td className="px-6 py-4">Senior of Full Stack/Mern Stack Devoloper.</td>
        <td className="px-6 py-4">6 to 7 year Years</td>
        <td className="px-6 py-4">Urdu</td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Sir Header
        </th>
        <td className="px-6 py-4">Senior of Full Stack Devoloper.</td>
        <td className="px-6 py-4">5 year Years</td>
        <td className="px-6 py-4">Urdu</td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Sir Ghous
        </th>
        <td className="px-6 py-4">Senior of Full Stack/Mern Stack Devoloper.</td>
        <td className="px-6 py-4">7 year Years</td>
        <td className="px-6 py-4">Urdu</td>
      </tr>
     
    </tbody>
  </table>
</div>
)
}