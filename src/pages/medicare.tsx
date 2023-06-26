import { useEffect, useState } from "react";
import useGraphQL from '../lib/useGraphQL';
import WkndAdventures from '../components/WkndAdventureDetail';

const medicare = () => {
    const [adventures, setAdventures] = useState([]);

    useEffect(() => {
        const fetchAdventures = async () => {
            const result = useGraphQL('wknd-shared/adventures-all');
            await result.executeQuery()
            if (result && result.value && result.value.adventureList) {
                setAdventures(result.value.adventureList.items);
            }
        };
        fetchAdventures();
    }, []);

    return (
        <WkndAdventures adventures={adventures} />
    );
};

export default medicare;
