import { Link } from 'react-router-dom';
import styles from '../../styles.module.css';
import { Album } from '../../types/Album';

type Props = {
	data: Album;
};

export const AlbumItem = ({ data }: Props) => {
	return (
		<>
			<Link to={`/album/${data.id}`} className={styles.HomeLink}>
				{data.title}
			</Link>
		</>
	);
};
