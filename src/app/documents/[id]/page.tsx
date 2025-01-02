import Editor from "@/app/documents/[id]/editor";
import Toolbar from "@/app/documents/[id]/toolbar";

export default function DocumentPage() {
  return (
    <main>
      <Toolbar />
      <Editor />
    </main> 
  );
}