const nameIcons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]

function Icon({ type }) {
    return <ion-icon name={type} ></ion-icon>
}
export default function Icons() {

    return (
        <div className="icones">
            {nameIcons.map((icon) => (<Icon key={icon} type={icon} />))}
        </div>
    )
}