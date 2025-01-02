import Editor from "@/app/documents/[id]/editor";
import Navbar from "@/app/documents/[id]/navbar";
import Toolbar from "@/app/documents/[id]/toolbar";

export default function DocumentPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFD]">
      <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden">
      <Navbar />
      
      <Toolbar />
      </div> 
     <div className="pt-[114px] pring:pt-0">
       <Editor />
       </div> 
    </main> 
  );
}