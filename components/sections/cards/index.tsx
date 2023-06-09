import Card from '@/components/card';
import CardsJSON from '@/database/cards.json';
import DiamondSVG from '@/public/assets/svgs/diamond.svg';
import FiltersSVG from '@/public/assets/svgs/filters.svg';
import GearSVG from '@/public/assets/svgs/gear.svg';
import { Button, Col, Row, Typography } from 'antd';
import styles from './styles.module.css';

export default function CardsSection() {
	return (
		<Col className={styles['cards-section']}>
			<Row align={'middle'} justify={'space-between'}>
				<Row align={'middle'} style={{ gap: 16 }}>
					<Typography.Title style={{ margin: 0 }}>Get Support</Typography.Title>
					<DiamondSVG />
				</Row>
				<Button type='primary' shape='circle' icon={<FiltersSVG />} style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
			</Row>

			<Row style={{ gap: 16 }}>
				{CardsJSON.map(card => <Card image={card.image} color={card.color} title={card.title} paragraph={card.paragraph} dtsu={card.dtsu} key={card.id} />)}
			</Row>

			<Row align={'middle'} justify={'end'} style={{ gap: 16 }}>
				<Row style={{ gap: 8 }}>
					<GearSVG />
					<Typography.Text style={{ color: "#FFFFFF" }}>Remaining DTSUs: 200</Typography.Text>
				</Row>
				<Row style={{ gap: 8 }} >
					<GearSVG id={styles["red"]} />
					<Typography.Text style={{ color: "#FFFFFF" }}>Consumed DTSUs: 200</Typography.Text>
				</Row>
			</Row>
		</Col>
	);
}