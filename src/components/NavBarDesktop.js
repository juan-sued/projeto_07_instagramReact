import Logo_Mobile from "./Logo_Mobile"
import Logo_Desktop from "./Logo_Desktop"
import Icons from "./Icons"





export default function NavBarDesktop() {
  return (
    <div className="navbar">
      <div className="container">

        <Logo_Desktop />
        <Logo_Mobile />

        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <Icons />

        <div className="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </div>
  )

}