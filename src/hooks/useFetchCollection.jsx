import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

const useFetchCollection = (collectionName) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	function fetchProductCollection() {
		setIsLoading(true);
		try {
			const docRef = collection(db, collectionName);
			let q = docRef;

			// Only order by createdAt if it's known to exist
			if (collectionName !== "products") {
				q = query(docRef, orderBy("createdAt", "desc"));
			}

			onSnapshot(q, (querySnapshot) => {
				const allData = [];
				querySnapshot.forEach((doc) => {
					allData.push({ id: doc.id, ...doc.data() });
				});
				setData(allData);
				setIsLoading(false);
			});
		} catch (error) {
			toast.error(error.code, error.message);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchProductCollection();
	}, []);

	return { data, isLoading };
};

export default useFetchCollection;
