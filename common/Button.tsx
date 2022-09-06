import Link from 'next/link'

export function ButtonLink({ children, href, className }) {
    return (
        <Link href={href}>
            <a className={className}>{children}</a>
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
