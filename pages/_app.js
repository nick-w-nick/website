// Importing the "antd" library, can be removed later on if needed
// https://ant.design/components/overview/
import 'antd/dist/antd.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
};