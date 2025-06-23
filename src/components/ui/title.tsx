type Props = {
    title: string;
}
export default function H1({title}:Props){
    return (
        <h1 className="text-6xl font-bold">
            {title}
        </h1>
    )
} 