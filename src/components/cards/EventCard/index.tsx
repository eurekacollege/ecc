import Image from "next/image";
import styles from "./EventCard.module.css";

type EventCardProps = {
    image: string;
    title: string;
    description: string;
}
export default function ProgramCard({ image, title, description}: EventCardProps) {

    return (
        <>
        <div className={styles.event_card}>
            <Image src={image} alt={title} width={300} height={250}/>
            <div className={styles.event_card_details}>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        </>
    )
}