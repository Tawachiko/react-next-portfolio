import Image from "next/image";

import styles from "./index.module.css";

type News = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publishedAt: string;
    createAt: string;
};

type Props = {
    href: string;
    children: React. ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
    return (
        <a href={href} className={styles.button}>
            {children}
        </a>
    )
}



