import styles from "./style.module.css"
const OrderStatusFormSection = () => {
    return (<div className={styles.container}>
        <div className={styles.formContainer}>
            <b className={styles.containerTitle}>Order Status</b>
            <label className={styles.labelHolder}>
                Priority
                <select>
                    <option value={"High"}>High</option>
                    <option value={"Medium"} selected>Medium</option>
                    <option value={"Low"}>Low</option>
                </select>
            </label>
            <label className={styles.labelHolder}>
                Contact Name
                <select>
                    <option value={"High"}>High</option>
                    <option value={"Medium"} selected>Medium</option>
                    <option value={"Low"}>Low</option>
                </select>
            </label>
            <label className={styles.labelHolder}>
                Describe your issues
                <textarea rows={4}></textarea>
            </label>
            <label><input type="checkbox" />&nbsp;Send Updates via email</label>
            <input type="submit" value="d" />
        </div>
    </div>)
}
export default OrderStatusFormSection;