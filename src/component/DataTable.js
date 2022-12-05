import React from "react";

function DataTable() {
  const tableHeight = {
    maxHeight: "300px",
    width: "100%",
  };
  const fontSize = {
    fontSize: "14px",
  };
  return (
    <div style={tableHeight} className="overflow-auto">
      <table className="w-100">
        <tr>
          <th className="bg-primary text-white border text-center p-2">
            Sender Name
          </th>
          <th className="bg-primary text-white border text-center p-2">
            Total Volume
          </th>
          <th
            className="bg-primary text-white border text-center pt-2"
            style={fontSize}
          >
            Volume Change <br />
            (Last Week)
          </th>
          <th className="bg-primary text-white border text-center pt-2">
            Volume Change <br /> (Yesterday)
          </th>
        </tr>
        <tr>
          <td className="border p-1">Amazon</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
        </tr>
        <tr>
          <td className="border p-1">Amazon</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
        </tr>
        <tr>
          <td className="border p-1">Amazon</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
        </tr>
        <tr>
          <td className="border p-1">Amazon</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
        </tr>
        <tr>
          <td className="border p-1">Amazon</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
        </tr>
        <tr>
          <td className="border p-1">Amazon</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
        </tr>
        <tr>
          <td className="border p-1">Amazon</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
        </tr>
        <tr>
          <td className="border p-1">Amazon</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
          <td className="border p-1">XXXXXX</td>
        </tr>
      </table>
    </div>
  );
}

export default DataTable;
