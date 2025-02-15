export default function PhotosFeedLayout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
    return (
        <>
            {modal}
            {children}
        </>
    )
}