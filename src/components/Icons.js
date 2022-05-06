const nameIcons = [
    "paper-plane-outline", "compass-outline", "heart-outline", "person-outline",
]

function Icon(props) {
    return <ion-icon name={props.type} ></ion-icon>
}
export default function Icons() {

    return (
        <div class="icones">
            {nameIcons.map((icon) => (<Icon type={icon} />))}
        </div>
    )
}