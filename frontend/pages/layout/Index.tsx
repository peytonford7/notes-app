import Header from './Header'
import Footer from './Footer'

export default function Index({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header />
        <hr />
          <main>{children}</main>
        <hr />
      <Footer />
    </div>
  );
}
