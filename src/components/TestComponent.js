export default function TestComponent() {
    function handleClick() {
        console.log("Button clicked")
    }

    return (
        <>
            <button onClick={handleClick}>testButton</button>
        </>
    )
}