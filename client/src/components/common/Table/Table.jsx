import * as S from './Table.styles';

export default function Table({ title, data }) {
  return (
    <S.TableType>
      <thead>
        <tr>
          {title.map((title, index) => (
            <S.TableHeader key={`${title}-${index}`}>{title}</S.TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((cellData, cellIndex) => (
              <S.TableData key={cellIndex}>{cellData}</S.TableData>
            ))}
          </tr>
        ))}
      </tbody>
    </S.TableType>
  );
}
