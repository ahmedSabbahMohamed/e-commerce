import Header from "@/components/Header"

function template({ children }) {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default template