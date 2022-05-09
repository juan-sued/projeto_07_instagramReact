import React from "react";


function Post(props) {
    console.log(props)
    const [liked, setLiked] = React.useState(false);


    function handleLike() {
        setLiked(!liked);
    }
    function likedPost() {
        setLiked(true)
    }

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

            <div className="conteudo" onClick={likedPost}>
                <img src={props.postObject.contentPost} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={liked ? "heart" : "heart-outline"} onClick={handleLike}></ion-icon>
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

    const postObjectList = [
        { image: "assets/img/juan.jpg", name: "juan_sued", contentPost: "assets/img/gostosa.jpeg", id: 1 },
        { image: "assets/img/barked.svg", name: "barked", contentPost: "assets/img/gato-telefone.svg", id: 2 },
        { image: "assets/img/juan.jpg", name: "juan_sued", contentPost: "assets/img/gostosa.jpeg", id: 3 },
        { image: "assets/img/barked.svg", name: "barked", contentPost: "assets/img/gato-telefone.svg", id: 4 },
        { image: "assets/img/meowed.svg", name: "meowed", contentPost: "assets/img/gostosa.jpeg", id: 5 },

    ]
    return (
        <div className="posts">


            {postObjectList.map(post => <Post key={post.id} postObject={post} />)}

        </div>
    )
}