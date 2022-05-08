
const postObjectList = [
    { image: "assets/img/meowed.svg", name: "meowed", contentPost: "assets/img/gato-telefone.svg", id: 1 },
    { image: "assets/img/barked.svg", name: "barked", contentPost: "assets/img/gato-telefone.svg", id: 2 },
    { image: "assets/img/meowed.svg", name: "meowed", contentPost: "assets/img/gato-telefone.svg", id: 3 },

]



function Post(props) {
    console.log(props)
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.postObject.image} />
                    {props.postObject.name}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.postObject.contentPost} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div className="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Posts() {
    return (
        <div className="posts">


            {postObjectList.map(post => <Post key={post.id} postObject={post} />)}

        </div>
    )
}