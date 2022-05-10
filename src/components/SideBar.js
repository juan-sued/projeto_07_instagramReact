

// function que componentiza User (usuário acima de sugestions)
function User({ imageUserProfile, userNameTag, userName }) {
    return (
        <div className="usuario">
            <img src={imageUserProfile} />
            <div className="texto">
                <strong>{userNameTag}</strong>
                {userName}
            </div>
        </div>
    )
}


// function que componetiza as sugestões
function Sugestion({ imageProfile, user, follow }) {

    follow ? follow = "Segue você" : follow = "Novo no Instagram"

    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={imageProfile} />
                <div className="texto">
                    <div className="nome">{user}</div>
                    <div className="razao">{follow}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}


export default function SideBar() {

    // objeto de sugestões que vem da API
    const sugestionObjectList = [
        { user: "bad.vibes.memes", imageProfile: "assets/img/bad.vibes.memes.svg", follow: false, id: 1 },
        { user: "chibirdart", imageProfile: "assets/img/chibirdart.svg", follow: true, id: 2 },
        { user: "razoesparaacreditar", imageProfile: "assets/img/razoesparaacreditar.svg", follow: false, id: 3 },
        { user: "adorable_animals", imageProfile: "assets/img/adorable_animals.svg", follow: true, id: 4 },
        { user: "smallcutecats", imageProfile: "assets/img/smallcutecats.svg", follow: true, id: 5 }
    ]
    return (
        <div className="sidebar">

            <User userNameTag="catanacomics" userName="Catana" imageUserProfile="assets/img/catanacomics.svg" />

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestionObjectList.map(element => <Sugestion user={element.user} imageProfile={element.imageProfile} follow={element.follow} key={element.id} />)}

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