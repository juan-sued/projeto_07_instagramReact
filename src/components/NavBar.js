import Logo_Mobile from "./Logo_Mobile"
import Logo_Desktop from "./Logo_Desktop"
import Icons from "./icons"





export default function NavBar() {
  return (
    <div class="navbar">
      <div class="container">

        <Logo_Desktop />
        <Logo_Mobile />

        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <Icons />

        <div class="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </div>
  )

}