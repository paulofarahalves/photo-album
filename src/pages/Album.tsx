import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../api';
import styles from '../styles.module.css';
import { Photo } from '../types/Photo';
import { Album } from '../types/Album';
import { PhotoItem } from '../components/PhotoItem';

export const AlbumPage = () => {
	const params = useParams();
	const navigate = useNavigate();

	const [photos, setPhotos] = useState<Photo[]>([]);
	const [loading, setLoading] = useState(false);
	const [albumInfo, setAlbumInfo] = useState<Album>({
		id: 0,
		title: '',
		userId: 0,
	});

	useEffect(() => {
		if (params.id) {
			loadInfo(params.id);
			loadPhotos(params.id);
		}
	}, []);

	const loadInfo = async (id: string) => {
		const albumInfo = await api.getAlbum(id);
		setAlbumInfo(albumInfo);
	};

	const loadPhotos = async (id: string) => {
		setLoading(true);
		let json = await api.getAlbumPhotos(id);
		setLoading(false);
		setPhotos(json);
	};

	const handleBackButton = () => {
		navigate(-1);
	};
	return (
		<div>
			<button onClick={handleBackButton}>Voltar</button>

			{loading && <div>Loading...</div>}

			<h2>{albumInfo.title}</h2>
			<div className={styles.AlbumBody}>
				{photos.map((item) => (
					<div className={styles.AlbumPhoto}>
						<PhotoItem data={item}></PhotoItem>
					</div>
				))}
			</div>
		</div>
	);
};
