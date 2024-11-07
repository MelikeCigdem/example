import axios from 'axios';
import { GetServerSidePropsContext } from 'next';

export const fetchCharacters = async (context: GetServerSidePropsContext) => {
  const { status, gender } = context.query;

  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character`, {
      params: { status, gender },
    });

    return {
      props: {
        characters: response.data.results,
      },
    };
  } catch (error) {
    return {
      props: {
        characters: [],
      },
    };
  }
};
