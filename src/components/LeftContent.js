import Stories from "./Stories";
import Posts from "./Posts";

export default function LeftContent() {
    return (
        <div className="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}