import styles from './ContactList.module.scss'

const ContactList = () => {
    return (
        <ul className={styles.footer_contacts}>
            <li className={styles.contacts_item}>Entre em contato</li>
            <li className={styles.contacts_item}><a className={styles.contacts_link} href="#">Contato</a></li>
            <li className={styles.contacts_item}><a className={styles.contacts_link}
                href="mailto:reviva@rchlo.com.br?">reviva@rchlo.com.br</a></li>
            <li className={styles.contacts_item}><a className={styles["contacts_link"] + " " + "contacts_link-whats"}
                href="https://web.whatsapp.com/send?phone=#############">WhatsApp</a></li>
            <li className={styles.contacts_item}><a className={styles["contacts_link"] + " " + "contacts_link-tel"} href="tel:+551121233321">11
                2123-3321</a></li>
        </ul>
    )
}

export default ContactList