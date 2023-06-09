import { DrawersContext, DrawersContextType } from "@/context/drawers";
import CartJSON from '@/database/cart.json';
import EmptyCartSVG from '@/public/assets/svgs/empty-cart.svg';
import ProductSVG from '@/public/assets/svgs/product.svg';
import TrashSVG from '@/public/assets/svgs/trash.svg';
import GiftSVG from '@/public/assets/svgs/gift.svg';
import { Alert, Button, Col, Divider, Drawer, InputNumber, Row, Space, Table, Typography } from "antd";
import { useContext } from "react";

export default function CartDrawer() {
	const { openedDrawer, setOpenedDrawer } = useContext<DrawersContextType>(DrawersContext);

	if (CartJSON.length === 0) {
		return (
			<Drawer title="Your Run Cart" placement="right" open={openedDrawer.cart} onClose={() => setOpenedDrawer(prev => ({ ...prev, cart: false }))}>
				<Space direction="vertical" style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", textAlign: "center" }}>
					<EmptyCartSVG />
					<Typography.Text strong style={{ color: "#00244D" }}>Your run cart is empty!</Typography.Text>
					<Typography.Text type="secondary">start add your requests here</Typography.Text>
				</Space>
			</Drawer>
		);
	}

	return (
		<Drawer title="Your Run Cart" placement="right" size="large" footer={<Footer />} open={openedDrawer.cart} onClose={() => setOpenedDrawer(prev => ({ ...prev, cart: false }))}>
			<Table dataSource={CartJSON} pagination={false}>
				<Table.Column title="Product" dataIndex="product" key="product" align="left" render={(text) => <Product title={text.name} items={text.items} />} />
				<Table.Column title="Qty." dataIndex="quantity" key="quantity" align="center" render={(text) => <InputNumber min={1} max={10} defaultValue={text} controls />} />
				<Table.Column title="Remove" dataIndex="" key="x" align="center" render={() => <Button type="ghost" icon={<TrashSVG />} />} />
			</Table>
			<br />
			<Space direction="vertical" style={{ display: "flex" }}>
				<Row justify={"space-between"}>
					<Typography.Text strong style={{ color: "#00244D" }}>Subtotal</Typography.Text>
					<Typography.Text style={{ color: "#0097C2" }}>1.00 DTSUs</Typography.Text>
				</Row>
				<Row justify={"space-between"}>
					<Typography.Text strong style={{ color: "#00244D" }}>New Payment</Typography.Text>
					<Typography.Text style={{ color: "#0097C2" }}>No, Inclusive in your package</Typography.Text>
				</Row>
			</Space>
			<Divider />
			<Space direction="vertical" size={"middle"} style={{ width: "100%" }} >
				<Row justify={"space-between"} align={"middle"}>
					<Typography.Text strong style={{ color: "#00244D" }}>Total Units Consumed</Typography.Text>
					<Typography.Text style={{ color: "#0097C2" }}>1.00 DTSUs</Typography.Text>
				</Row>
				<Button type="primary" shape="round" size="large" block>Checkout</Button>
				<Button type="primary" ghost shape="round" size="large" block>Back to Run Information</Button>
			</Space>
		</Drawer>
	);
}

function Product({ title, items }: { title: string; items: string[]; }) {
	return (
		<Row align={"middle"} style={{ gap: 8 }} wrap={false}>
			<ProductSVG />
			<Col style={{ display: "flex", flexDirection: "column" }}>
				<Typography.Text style={{ whiteSpace: "nowrap" }}>{title}</Typography.Text>
				<Typography.Text type="secondary" style={{ whiteSpace: "nowrap" }}>{items.join(', ')}</Typography.Text></Col>
		</Row>
	);
}

function Footer() {
	return (
		<Space direction="vertical">
			<Alert description="Your have made a great chooseLet's Run and be ready for a surprise" type="warning" icon={<GiftSVG />} banner showIcon />
			<Alert description="Some requests can take a week or more to be delivered and may be subject to dependency resolutions related to your" type="info" showIcon />
		</Space>
	);
}