import { getDocs, getFirestore, getDoc, doc, collection, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"


export const useAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, "products");

        getDocs(productsCollection).then((snapshot) => {
            setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, []);

    return { products, loading, error }
}

export const useAllProductsByCategory = (categoryId) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // Añade una validación para asegurarte de que categoryId tenga un valor
            if (categoryId === undefined || categoryId === null) {
                setLoading(false);
                return;
            }

            const db = getFirestore();
            const collectionRef = collection(db, "products");
            const categoryQuery = query(collectionRef, where("category", "==", categoryId));

            try {
                const snapshot = await getDocs(categoryQuery);
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Error al cargar los productos.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [categoryId]);

    return { products, loading, error };
};

export const useSimpleProduct = (productId) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const productRef = doc(db, "products", productId);

            try {
                const docSnapshot = await getDoc(productRef);

                if (docSnapshot.exists()) {
                    setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
                } else {
                    setError("Producto no encontrado.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Error al cargar el producto.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [productId]);

    return { product, loading, error };
};
