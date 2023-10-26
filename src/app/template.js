import Footer from "@/components/Footer"
import Header from "@/components/Header"

function template({ children }) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default template