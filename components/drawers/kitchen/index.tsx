import { DrawersContext, DrawersContextType } from "@/context/drawers";
import KitchenJSON from '@/database/kitchen.json';
import ProductSVG from '@/public/assets/svgs/product.svg';
import CloudSVG from '@/public/assets/svgs/cloud.svg';
import StatusRedSVG from '@/public/assets/svgs/status-red.svg';
import StatusGreenSVG from '@/public/assets/svgs/status-yellow.svg';
import StatusYellowSVG from '@/public/assets/svgs/status-green.svg';
import { Alert, Button, Col, Divider, Drawer, InputNumber, Row, Space, Table, Typography } from "antd";
import { useContext } from "react";
import styles from './styles.module.css';

export default function KitchenDrawer() {
	const { openedDrawer, setOpenedDrawer } = useContext<DrawersContextType>(DrawersContext);

	function getStatusIcon(status: string) {
		switch (status) {
			case "canceled":
				return <StatusRedSVG />;
			case "pending":
				return <StatusGreenSVG />;
			case "done":
				return <StatusYellowSVG />;
			default:
				break;
		}
	}

	return (
		<Drawer title="Your Run Kitchen" placement="right" size="large" footer={<Footer />} open={openedDrawer.kitchen} onClose={() => setOpenedDrawer(prev => ({ ...prev, kitchen: false }))}>
			<Table dataSource={KitchenJSON} pagination={false}>
				<Table.Column title="Request" dataIndex="request" key="request" align="left" render={(text) => <Request title={text.name} items={text.items} />} />
				<Table.Column title="Status" dataIndex="status" key="status" align="center" render={(text) => getStatusIcon(text)} />
				<Table.Column title="O/P Link" dataIndex="" key="x" align="center" render={() => <Button type="ghost" icon={<CloudSVG />} />} />
			</Table>
			<br />
			<Space direction="vertical" style={{ display: "flex" }}>
				<Row justify={"space-between"}>
					<Typography.Text strong style={{ color: "#00244D" }}>Units Under Processing</Typography.Text>
					<Typography.Text style={{ color: "#0097C2" }}>12.00 DTSUs</Typography.Text>
				</Row>
				<Row justify={"space-between"}>
					<Typography.Text strong style={{ color: "#00244D" }}>Units Completed</Typography.Text>
					<Typography.Text style={{ color: "#0097C2" }}>12.00 DTSUs</Typography.Text>
				</Row>
			</Space>
			<Divider />
			<Space direction="vertical" size={"middle"} style={{ width: "100%" }} >
				<Row justify={"space-between"} align={"middle"}>
					<Typography.Text strong style={{ color: "#00244D" }}>Total Units Consumed</Typography.Text>
					<Typography.Text style={{ color: "#0097C2" }}>12.00 DTSUs</Typography.Text>
				</Row>
				<Button type="primary" shape="round" size="large" block>Checkout</Button>
				<Button type="primary" ghost shape="round" size="large" block>Back to Run Information</Button>
			</Space>
		</Drawer>
	);
}

function Request({ title, items }: { title: string; items: string[]; }) {
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
	return <Alert description="Some requests can take a week or more to be delivered and may be subject to dependency resolutions related to your" type="info" showIcon />;
}