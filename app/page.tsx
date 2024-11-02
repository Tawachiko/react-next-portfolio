import styles from "./page.module.css";
import Image from "next/image";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createAt: string;
};

const data: {
  contents: News[] } ={
    contents:: [
      {
        id: "1",
        title:
        "渋谷にオフィスを移行しました",
        category: {
          name:"更新情報",
        },
        publishedAt: "2023/05/19",
        createAt: "2023/05/19",
      },
      
    ]
  }
}
export default function home() {
  const name = "世界";
  return(
  <section className={styles.top}>
  <div>
    <h1 className="title"> テクノロジーの力で世界を変える</h1>
    <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです</p>
  </div>
    <Image className={styles.bgimg}
    src="img-mv.jpg" 
    alt=""
    width={4000}
    height={1200} 
    />
  </section>
  );
}
