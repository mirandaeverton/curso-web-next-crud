interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Button(props: ButtonProps) {
    const color = props.color ?? 'gray'
    const from = `from-${color}-400`
    const to = `to-${color}-700`
    
    console.log(from)
    console.log(to)

    return(
        <button className={`
            bg-gradient-to-r ${from} ${to}
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}