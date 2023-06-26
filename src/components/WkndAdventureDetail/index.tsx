import React from 'react';
import './WkndAdventureDetail.scss';

interface Adventure {
  _path: string;
  title: string;
  activity: string;
  primaryImage: { _publishUrl: string };
  description: { html: string };
  adventureType: string;
  tripLength: string;
  difficulty: string;
  groupSize: string;
  itinerary: { html: string };
  variation?: string;
}

interface AdventureDetailProps {
  adventure: Adventure;
}

const WkndAdventureDetail: React.FC<AdventureDetailProps> = ({ adventure }) => {
  const navigate = (num: number) => {
    // replace with your navigation logic
  };

  const itemId = adventure.variation
    ? `urn:aemconnection:${adventure._path}/jcr:content/data/${adventure.variation}`
    : `urn:aemconnection:${adventure._path}/jcr:content/data/master`;

  return (
    <div itemId={itemId} itemScope itemFilter="cf" itemType="reference" className="adventure-detail">
      <div className="adventure-detail-header">
        <button className="adventure-detail-back-nav dark" onClick={() => navigate(-1)}>
          Adventures
        </button>
        <h1 className="adventure-detail-title" itemProp="title" itemType="text">
          {adventure.title}
        </h1>
        <div className="pill default">
          <span itemProp="activity" itemType="text">{adventure.activity}</span>
        </div>
      </div>

      <img className="adventure-detail-primaryimage" src={adventure.primaryImage._publishUrl} alt={adventure.title} itemProp="primaryImage" itemType="image" />

      <div className="adventure-detail-content">
        <div itemProp="description" itemType="richtext" dangerouslySetInnerHTML={{__html: adventure.description.html}} />

        <div className="adventure-detail-info">
          <InfoLabel title="Adventure Type" content={adventure.adventureType} itemProp="adventureType" />
          <InfoLabel title="Trip Length" content={adventure.tripLength} itemProp="tripLength" />
          <InfoLabel title="Difficulty" content={adventure.difficulty} itemProp="difficulty" />
          <InfoLabel title="Group Size" content={adventure.groupSize} itemProp="groupSize" />
        </div>

        <h6>Itinerary</h6>
        <div itemProp="itinerary" itemType="richtext" className="adventure-detail-itinerary" dangerouslySetInnerHTML={{__html: adventure.itinerary.html}} />
      </div>
    </div>
  );
};

interface InfoLabelProps {
  title: string;
  content: string;
  itemProp: string;
}

const InfoLabel: React.FC<InfoLabelProps> = ({ title, content, itemProp }) => (
  <div className="adventure-detail-info-label">
    <h6>{title}</h6>
    <span itemProp={itemProp} itemType="text">{content}</span>
  </div>
);

export default WkndAdventureDetail;
