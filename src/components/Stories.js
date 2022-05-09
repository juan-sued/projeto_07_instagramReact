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

// Function que componentiza Storie para Stories
function Storie(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.storiesObject.image} />
            </div>
            <div className="usuario">
                {props.storiesObject.user}
            </div>
        </div>
    )
}

// Function que renderiza Stories em LeftContent

export default function Stories() {
    return (
        <div className="stories">

            {storiesObjectList.map(stories => <Storie storiesObject={stories} key={stories.id} />)}




            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}