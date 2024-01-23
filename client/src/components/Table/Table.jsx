import * as TableStyle from "./Table.styled";

export default function Table({ title, data }) {
  return (
    <TableStyle.TableType>
      <thead>
        <tr>
          {title.map((title, index) => (
            <TableStyle.TableHeader key={`${title}-${index}`}>
              {title}
            </TableStyle.TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((cellData, cellIndex) => (
              <TableStyle.TableData key={cellIndex}>
                {cellData}
              </TableStyle.TableData>
            ))}
          </tr>
        ))}
      </tbody>
    </TableStyle.TableType>
  );
}
