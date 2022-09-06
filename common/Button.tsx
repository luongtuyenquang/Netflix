import Link from 'next/link'

export function ButtonLink({ children, href, className, target, rel }) {
    return (
        <Link href={href}>
            <a className={className} target={target} rel={rel}>
                {children}
            </a>
        </Link>
    )
}

export function ButtonNoLink({ children, className, onClick }) {
    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    )
}
