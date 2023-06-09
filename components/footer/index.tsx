import { Layout, Typography } from "antd";
import styles from './styles.module.css';

export default function Footer() {
	return (
		<Layout.Footer className={styles["footer"]}>
			<Typography.Text type="secondary">
				<Typography.Text strong style={{ color: "#052346" }}>Got questions? </Typography.Text>
				Take a look at our
				<Typography.Link href="/" style={{ color: "#0097c2" }}> FAQs</Typography.Link>
				, talk to us on Twitter
				<Typography.Link href="/" style={{ color: "#0097c2" }}> @icloudready </Typography.Link>
				or send an email to
				<Typography.Link href="/" style={{ color: "#0097c2" }}> team@icloud-ready.com</Typography.Link>
			</Typography.Text>
		</Layout.Footer>
	);
}
