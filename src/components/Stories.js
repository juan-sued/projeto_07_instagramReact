
// Function que componentiza Storie para Stories
function Storie({ image, user }) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={image} />
            </div>
            <div className="usuario">
                {user}
            </div>
        </div>
    )
}

// Function que renderiza Stories em LeftContent

export default function Stories() {
    const storiesObjectList = [
        { user: "airton", image: "assets/img/9gag.svg", id: 1 },
        { user: "barked", image: "assets/img/barked.svg", id: 2 },
        { user: "nathanwpylestrangeplanet", image: "assets/img/nathanwpylestrangeplanet.svg", id: 3 },
        { user: "wawawicomics", image: "assets/img/wawawicomics.svg", id: 4 },
        { user: "respondeai", image: "assets/img/respondeai.svg", id: 5 },
        { user: "filomoderna", image: "assets/img/filomoderna.svg", id: 6 },
        { user: "memeriagourmet", image: "assets/img/memeriagourmet.svg", id: 7 },

        { user: "airton", image: "assets/img/9gag.svg", id: 8 },


    ]
    return (
        <div className="stories">

            {storiesObjectList.map(element => <Storie user={element.user} image={element.image} key={element.id} />)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}