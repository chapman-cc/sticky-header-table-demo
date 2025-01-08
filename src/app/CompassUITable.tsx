import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableColumnHead,
} from "@dfds-frontend/compass-ui";
import React from "react";

export default function CompassUITable() {
  return (
    <div>
      <Table>
        <TableHeader className="sticky top-0">
          <TableRow>
            <TableColumnHead>index</TableColumnHead>
            <TableColumnHead>First name</TableColumnHead>
            <TableColumnHead>Last name</TableColumnHead>
            <TableColumnHead>Age</TableColumnHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 100 }, (_, i) => (
            <TableRow key={i}>
              <TableCell>{i}</TableCell>
              <TableCell>John</TableCell>
              <TableCell>Doe</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
