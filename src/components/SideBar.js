

// function que componentiza User (usuário acima de sugestions)
function User(props) {
    return (
        <div className="usuario">
            <img src={props.imageUserProfile} />
            <div className="texto">
                <strong>{props.userNameTag}</strong>
                {props.userName}
            </div>
        </div>
    )
}


// objeto de sugestões que vem da API
const sugestionObjectList = [
    { user: "bad.vibes.memes", imageProfile: "assets/img/bad.vibes.memes.svg", follow: false, id: 1 },
    { user: "chibirdart", imageProfile: "assets/img/chibirdart.svg", follow: true, id: 2 },
    { user: "razoesparaacreditar", imageProfile: "assets/img/razoesparaacreditar.svg", follow: false, id: 3 },
    { user: "adorable_animals", imageProfile: "assets/img/adorable_animals.svg", follow: true, id: 4 },
    { user: "smallcutecats", imageProfile: "assets/img/smallcutecats.svg", follow: true, id: 5 }
]

function Sugestion(props) {

    props.sugestionObject.follow ? props.sugestionObject.follow = "Segue você" : props.sugestionObject.follow = "Novo no Instagram"

    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.sugestionObject.imageProfile} />
                <div className="texto">
                    <div className="nome">{props.sugestionObject.user}</div>
                    <div className="razao">{props.sugestionObject.follow}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}


export default function SideBar() {
    return (
        <div className="sidebar">
            <User userNameTag="catanacomics" userName="Catana" imageUserProfile="assets/img/catanacomics.svg" />

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestionObjectList.map(sugestions => <Sugestion sugestionObject={sugestions} key={sugestions.id} />)}

            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}