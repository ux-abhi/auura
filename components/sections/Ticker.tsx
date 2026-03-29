'use client'

const ITEMS = [
  'On-device inference',
  'No raw data transmitted',
  '7-day battery',
  'Jewellery form factor',
  'BLE 5.2',
  'Qi wireless charging',
  'IPX5 water resistant',
  'Russell circumplex model',
  'Ships Q4 2026',
]

function TickerItem({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-4 px-5">
      <span className="text-[11px] tracking-[0.14em] uppercase text-aurra-mid whitespace-nowrap">
        {label}
      </span>
      <span className="text-aurra-light text-[11px]">·</span>
    </span>
  )
}

export default function Ticker() {
  return (
    <div
      className="overflow-hidden bg-white"
      style={{
        height: 42,
        borderTop: '1px solid #e8e8ed',
        borderBottom: '1px solid #e8e8ed',
      }}
    >
      {/* Double the items for seamless loop */}
      <div className="flex items-center h-full marquee-track">
        {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <TickerItem key={i} label={item} />
        ))}
      </div>
    </div>
  )
}
