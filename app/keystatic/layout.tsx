export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ background: '#fff', color: '#000', minHeight: '100vh' }}>
      {children}
    </div>
  )
}
