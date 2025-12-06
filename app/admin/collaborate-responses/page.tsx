export const dynamic = "force-dynamic";

import { JoinFormResponses, columns } from "@/components/collaborate/columns";
import { DataTable } from "@/components/collaborate/data-table";
import connect from "@/lib/db";
import Collaborate from "@/schema/Collaborate";

async function getData(): Promise<JoinFormResponses[]> {
  connect();
  const collaborates = await Collaborate.find();
  return JSON.parse(JSON.stringify(collaborates));
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Collaborate Responses</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
