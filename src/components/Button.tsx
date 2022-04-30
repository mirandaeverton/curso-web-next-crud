interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    const color = props.color ?? 'gray'
    const from = `from-${color}-400`
    const to = `to-${color}-700`

    return(
        <button onClick={props.onClick} className={`
            bg-gradient-to-r ${from} ${to}
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}