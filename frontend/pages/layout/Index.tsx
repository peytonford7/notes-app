import Header from './Header'
import Footer from './Footer'

export default function Index({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
