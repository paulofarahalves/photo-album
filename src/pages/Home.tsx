import { useState, useEffect } from 'react';
import { api } from '../api';
import styles from '../styles.module.css';
import { AlbumItem } from '../components/AlbumItem/index';
import { Album } from '../types/Album';

export const Home = () => {
	const [albums, setAlbums] = useState<Album[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		loadAlbums();
	}, []);

	const loadAlbums = async () => {
		setLoading(true);
		let json = await api.getAllAlbums();
		setLoading(false);
		setAlbums(json);
	};

	return (
		<div>
			{loading && <div>Loading...</div>}

			{!loading && albums.length > 0 && (
				<>
					<div className={styles.HomeBody}>
						{albums.map((item) => (
							<div className={styles.HomeAlbumItem}>
								<AlbumItem data={item} />
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};
