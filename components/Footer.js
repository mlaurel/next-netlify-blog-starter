import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer>
                Built with <img src="/netliheart.svg" alt="Netlify Heart" /> for
                you
            </footer>
            <style jsx>{`
                footer {
                    width: 100%;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    )
}
