import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
     <center> <Link href={"/"}><button className="bg-yellow-900 text-white font-bold py-3 px-8 rounded-lg transition duration-400 hover:bg-white hover:text-black hover:border-green-500 hover:border-2">Home</button></Link> 
      </center>


      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="w-full">
          <Link href={`/admin/dashboard`}>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </Link>
          <Link href={`/admin/courses`}>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </Link>
          <Link href={`/admin/batches`}>
            <TabsTrigger value="batches">Batches</TabsTrigger>
          </Link>
          <Link href={`/admin/trainer`}>
            <TabsTrigger value="trainers">Trainers</TabsTrigger>
          </Link>
          <Link href={`/admin/student`}>
            <TabsTrigger value="students">Students</TabsTrigger>
          </Link>
        </TabsList>
        <TabsContent value="dashboard">{children}</TabsContent>
        <TabsContent value="courses">{children}</TabsContent>
        <TabsContent value="batches">{children}</TabsContent>
        <TabsContent value="trainers">{children}</TabsContent>
        <TabsContent value="students">{children}</TabsContent>
      </Tabs>
    </div>
  );
}