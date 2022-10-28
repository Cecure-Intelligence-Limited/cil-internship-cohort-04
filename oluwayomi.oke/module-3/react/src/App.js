import { Routes, Route } from "react-router-dom";
import {
	About,
	AddContact,
	EditContact,
	Home,
	Layout,
} from "./components";
import { ContactListContextProvider } from "./context/Provider";

function App() {
	return (
		<ContactListContextProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />

					<Route
						path="add"
						element={<AddContact />}
					/>

					<Route
						path="edit/:editId"
						element={<EditContact />}
					/>

					<Route path="about" element={<About />} />
				</Route>
			</Routes>
		</ContactListContextProvider>
	);
}

export default App;
