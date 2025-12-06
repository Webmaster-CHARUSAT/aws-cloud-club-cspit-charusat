export const dynamic = "force-dynamic";

import { JoinFormResponses, columns } from "@/components/join/columns";
import { DataTable } from "@/components/join/data-table";
import connect from "@/lib/db";
import Join from "@/schema/Join";

async function getData(): Promise<JoinFormResponses[]> {
  connect();
  const joins = await Join.find();
  return JSON.parse(JSON.stringify(joins));
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Join-us Responses</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
