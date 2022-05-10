import React from "react";


function Post({
    imageProfile,
    nameProfile,
    contentPost,
    userLastLikedImage,
    userLastLikedName,
    numberLikes, type
}) {



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
                    <img src={imageProfile} />
                    {nameProfile}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo" onClick={likedPost}>
                {type === "image" ? <img src={contentPost} alt="narutin" /> : // se o type for image, ele coloca uma tag img, senão, ele coloca uma tag video
                    <video controls autoPlay muted>
                        <source src={contentPost[0]} type="video/mp4" />
                        <source src={contentPost[1]} type="video/ogg" />
                    </video>}
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
                    <img src={userLastLikedImage} />
                    <div className="texto">
                        Curtido por <strong>{userLastLikedName}</strong> e <strong>outras {numberLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Posts() {

    const postObjectList = [
        {
            imageProfile: "assets/img/juan.jpg",
            nameProfile: "juan_sued",
            contentPost: "assets/img/gostosa.jpeg",

            type: "image",
            userLastLikedImage: "assets/img/respondeai.svg",
            userLastLikedName: "respondeai",
            numberLikes: 22,
            id: 0
        },
        {
            imageProfile: "assets/img/barked.svg",
            nameProfile: "barked",
            contentPost: "assets/img/barked.svg",
            type: "image",
            userLastLikedImage: "assets/img/juan.jpg",
            userLastLikedName: "juan_sued",
            numberLikes: 100,
            id: 1
        },

        {
            imageProfile: "assets/img/meowed.svg",
            nameProfile: "meowed",
            contentPost: ["assets/video/video1.mp4", "assets/video/video1.ogg"],
            type: "video",
            userLastLikedImage: "assets/img/barked.svg",
            userLastLikedName: "barked",
            numberLikes: 20,
            id: 2
        },

        {
            imageProfile: "assets/img/barked.svg",
            nameProfile: "barked",
            contentPost: "assets/img/barked.svg",
            type: "image",
            userLastLikedImage: "assets/img/juan.jpg",
            userLastLikedName: "juan_sued",
            numberLikes: 24,
            id: 3
        },
        //colocar type: image or type:video
    ]

    return (
        <div className="posts">

            {postObjectList.map(element => <Post key={element.id} imageProfile={element.imageProfile} nameProfile={element.nameProfile} contentPost={element.contentPost} userLastLikedImage={element.userLastLikedImage} userLastLikedName={element.userLastLikedName} numberLikes={element.numberLikes} type={element.type} />)}

        </div>
    )
}