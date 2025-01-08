import CompassUITable from "./CompassUITable";
import NativeTable from "./NativeTable";

export default function Home() {
  return (
    <div className="flex flex-nowrap *:flex-1 *:border-2 *:border-gray-500 gap-4 p-4">
      <NativeTable />

      <CompassUITable />
    </div>
  );
}
