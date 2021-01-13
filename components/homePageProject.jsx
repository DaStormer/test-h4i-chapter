import React from 'react';
import Link from 'next/link';
import ContentBlock from './ContentBlock';

function HomePageProject({ title, description, thumbnail, urlSlug }) {
  return (
    <Link href={`/projects/${urlSlug}`}>
      <a>
        <div className="project-item">
          <img src={thumbnail.url} alt={thumbnail.description} />
          <h4>{title}</h4>
          <ContentBlock content={description.json} />
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
            .project-item {
              margin: 60px 0;
            }
            p {
              padding-top: 20px;
            }
          }
          .project-item {
            box-shadow: 3px 3px 20px rgba(44, 62, 80, 0.1);
            border-radius: 5px;
            color: #f9fafc;
            display: flex;
            justify-content: flex-end;
            overflow: hidden;
            padding: 20px;
            flex-flow: column;
            height: 95%;
            width: auto;
            min-height: 200px;
            position: relative;

            img {
              filter: grayscale(20%);
              z-index: 1;
              object-fit: cover;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }

            &::after {
              z-index: 2;
              content: '';
              background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6));
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
            }

            :global(*) {
              z-index: 3;
            }

            :global(p) {
              margin-bottom: 0;
            }
          }
          .project-item:hover {
            box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          p {
            margin: 0px;
            color: #f9fafc;
            font-weight: 650;
          }
        `}</style>
      </a>
    </Link>
  );
}

export default HomePageProject;