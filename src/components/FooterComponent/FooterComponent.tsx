export default function FooterComponent() {
  return (
    <footer className='sticky'>
      <p style={{ textAlign: "center" }}>
        &copy; {new Date().getFullYear()} Study Project
      </p>
    </footer>
  )
}