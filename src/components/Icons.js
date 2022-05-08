const nameIcons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]

function Icon(props) {
    return <ion-icon name={props.type} ></ion-icon>
}
export default function Icons() {

    return (
        <div className="icones">
            {nameIcons.map((icon) => (<Icon key={icon} type={icon} />))}
        </div>
    )
}