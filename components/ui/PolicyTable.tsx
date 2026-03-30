interface TableRow {
  cells: string[]
}

interface PolicyTableProps {
  headers: string[]
  rows: TableRow[]
}

export default function PolicyTable({ headers, rows }: PolicyTableProps) {
  return (
    <>
      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto my-8">
        <table className="w-full font-body text-[14px] text-aurra-dark" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {headers.map((h) => (
                <th
                  key={h}
                  className="text-left font-body font-normal text-[12px] tracking-[0.08em] uppercase text-aurra-mid"
                  style={{
                    background: '#f5f5f7',
                    border: '1px solid #e8e8ed',
                    padding: '10px 14px',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? 'bg-[#fafafa]' : ''}>
                {row.cells.map((cell, j) => (
                  <td
                    key={j}
                    className={j === 0 ? 'font-body text-aurra-dark font-normal' : 'text-aurra-mid'}
                    style={{ border: '1px solid #e8e8ed', padding: '10px 14px', lineHeight: 1.5 }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-4 my-8">
        {rows.map((row, i) => (
          <div key={i} className="border border-aurra-light rounded-[12px] overflow-hidden">
            {headers.map((header, j) => (
              <div
                key={j}
                className="flex justify-between gap-4 px-4 py-3"
                style={{ borderBottom: j < headers.length - 1 ? '1px solid #e8e8ed' : 'none', background: j === 0 ? '#f5f5f7' : 'white' }}
              >
                <span className="font-body text-[11px] tracking-[0.08em] uppercase text-aurra-mid flex-shrink-0">{header}</span>
                <span className="font-body text-[13px] text-aurra-dark text-right">{row.cells[j]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
