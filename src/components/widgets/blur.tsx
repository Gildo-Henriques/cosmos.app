type Props = {
    className: string;
}
export default function DivBlur({className}:Props){
    return (
        <div className="w-full flex relative justify-end">
            <div className={className}></div>
        </div>
    )
}