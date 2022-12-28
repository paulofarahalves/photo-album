import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../api';
import { Photo } from '../types/Photo';

export const PhotoPage = () => {
	const params = useParams();
	const navigate = useNavigate();

	const [photo, setPhoto] = useState<Photo>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (params.id) {
			loadPhoto(params.id);
		}
	}, []);

	const loadPhoto = async (id: string) => {
		setLoading(true);
		let json = await api.getPhoto(id);
		setLoading(false);
		setPhoto(json);
	};

	const handleBackButton = () => {
		navigate(-1);
	};
	return (
		<div>
			<button onClick={handleBackButton}>Voltar</button>

			{loading && <div>Loading...</div>}

			<h2>{photo?.title}</h2>

			<img src={photo?.url} />
		</div>
	);
};
