import AddSVG from '@/public/assets/svgs/add.svg';
import LinkSVG from '@/public/assets/svgs/link.svg';
import { Button, Col, Image, Typography } from 'antd';
import styles from './styles.module.css';

type Props = {
	image: string;
	title: string;
	paragraph: string;
	dtsu: string;
	color: string;
};

export default function Card({ image, title, paragraph, dtsu, color }: Props) {
	return (
		<Col span={6} className={styles["card"]}>
			<div className={styles['card-image']}>
				<Image src={`../../assets/images/illustrations/${image}`} alt={title} preview={false} />
			</div>
			<div className={styles['card-details']} style={{ backgroundColor: color }}>
				<Typography.Title level={5}>{title}</Typography.Title>
				<Typography.Paragraph className={styles['paragraph']}>{paragraph}</Typography.Paragraph>
				<div className={styles['card-details-actions']}>
					<Typography.Text>{dtsu} DTSU*</Typography.Text>
					<div className={styles['buttons']}>
						<Button type='primary' href={`/cards/${title}`} shape='circle' icon={<LinkSVG />} className={styles["filter-button"]} />
						<Button type='primary' shape='circle' icon={<AddSVG />} className={styles["filter-button"]} />
					</div>
				</div>
			</div>
		</Col>
	);
}