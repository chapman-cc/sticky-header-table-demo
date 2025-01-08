import React from "react";

export default function NativeTable() {
  return (
    <div>
      <table>
        <thead className="sticky top-0">
          <tr>
            <th>index</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 100 }, (_, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>John</td>
              <td>Doe</td>
              <td>24</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
