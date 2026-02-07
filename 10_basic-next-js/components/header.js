import Link from "next/link";

export default function Header() {
    return (
        <div className="py-6">
            <ul className="flex gap-6">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/static">Static</Link>
                </li>
                <li>
                    <Link href="/dynamic">Dynamic</Link>
                </li>
                <li>
                    <Link href="/hybrid">Hybrid</Link>
                </li>
                <li>
                    <Link href="/isr/posts">ISR</Link>
                </li>
                <li>
                    <Link href="/rsc">RSC</Link>
                </li>
            </ul>
        </div>
    );
}
