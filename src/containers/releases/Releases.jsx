/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import ReleasePage from '../../components/presentational/releasePage/ReleasePage';
import { useReleases } from '../../state/useRelease';

const AllReleases = ({ match }) => {
  const { releases } = useReleases(match.params.id);

  return <ReleasePage releases={releases} />;
};

export default AllReleases;
