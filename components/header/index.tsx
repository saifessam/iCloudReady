import { DrawersContext, DrawersContextType } from '@/context/drawers';
import UsersJSON from '@/database/users.json';
import CartSVG from '@/public/assets/svgs/cart.svg';
import FridgeSVG from '@/public/assets/svgs/fridge.svg';
import User from '@/types/user';
import { Avatar, Badge, Button, Image, Layout, Typography } from "antd";
import { useContext } from 'react';
import styles from './styles.module.css';

export default function Header() {
	const { setOpenedDrawer } = useContext<DrawersContextType>(DrawersContext);

	return (
		<Layout.Header className={styles["header"]}>
			<div className={styles['heading']}>
				<Typography.Title level={4}>Welcome to iCloudReady!</Typography.Title>
				<Typography.Text type='secondary'>You have started your <Typography.Text strong id={styles['trail']}>30 day trial</Typography.Text></Typography.Text>
			</div>

			<div className={styles['social-proof']}>
				<Avatar.Group size={'large'} maxCount={4} style={{ display: 'flex', justifyContent: "center" }}>
					{UsersJSON.map((user: User) => <Avatar src={<Image src={`/assets/images/avatars/${user.image}`} alt={user.name} preview={false} key={user.id} />} />)}
				</Avatar.Group>
				<div className={styles["call-to-action"]}>
					<Typography.Text type='secondary' strong>Our architects are here to help</Typography.Text>
					<Typography.Link href='/'>Book a free session</Typography.Link>
				</div>
			</div>

			<nav className={styles['buttons']}>
				<Badge color='#FFD900' count={2}>
					<Button type="primary" shape='circle' icon={<CartSVG />} onClick={() => setOpenedDrawer(prev => ({ ...prev, cart: true }))} />
				</Badge>
				<Badge color='#FFD900' count={3}>
					<Button type="primary" shape='circle' icon={<FridgeSVG />} onClick={() => setOpenedDrawer(prev => ({ ...prev, kitchen: true }))} />
				</Badge>
			</nav>
		</Layout.Header>
	);
}
