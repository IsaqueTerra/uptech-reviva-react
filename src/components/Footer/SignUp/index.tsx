import styles from './SignUp.module.scss'

const SignUp = () => {
    return (
        <fieldset className={styles.footer_newsletter}>
            <label className={styles.newsletter_label} htmlFor="newsletter_field">Assine nossa newsletter</label>
            <input className={styles.newsletter_input} type="text" id="newsletter_field" />
            <button className={styles.newsletter_button}>ASSINAR JÁ</button>
        </fieldset>
    )
}

export default SignUp