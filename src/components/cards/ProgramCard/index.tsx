import Image from "next/image";
import styles from "./ProgramCard.module.css";

type ProgramCardProps = {
    image: string;
    title: string;
    description: string;
    link: string;
    alt: string;
}
export default function ProgramCard({ image, title, description, link, alt}: ProgramCardProps) {

    return (
        <>
        <div className={styles.program_card}>
            <Image src={image} alt={alt} width={300} height={250}/>
            <div className={styles.program_card_details}>
              <h4>{title}</h4>
              <p>{description}</p>
              <a href="">Learn More &gt;</a>
            </div>
          </div>
        </>
    )
}